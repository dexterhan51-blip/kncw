// WordPress GraphQL API Configuration
const WORDPRESS_API_URL = "https://wordpress-1568541-6218161.cloudwaysapps.com/graphql";

// TypeScript Interfaces
export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface PostNode {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: string;
  featuredImage: FeaturedImage | null;
}

export interface Edge {
  node: PostNode;
}

export interface PostsResponse {
  posts: {
    edges: Edge[];
  };
}

export interface SinglePostResponse {
  post: PostNode;
}

// Reusable fetch function for WordPress GraphQL API
async function fetchWordPressAPI<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const response = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error("Failed to fetch WordPress data");
  }

  return json.data;
}

// GraphQL query to fetch latest posts
const GET_ALL_POSTS = `
  query GetAllPosts($first: Int = 20) {
    posts(first: $first, where: { status: PUBLISH }) {
      edges {
        node {
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// GraphQL query to fetch single post by slug
const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      date
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// GraphQL query to get all slugs for static generation
const GET_ALL_SLUGS = `
  query GetAllSlugs {
    posts(first: 100, where: { status: PUBLISH }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

// Fetch all posts
export async function getAllPosts(first: number = 20): Promise<PostNode[]> {
  try {
    const data = await fetchWordPressAPI<PostsResponse>(GET_ALL_POSTS, { first });
    return data.posts.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug: string): Promise<PostNode | null> {
  try {
    const decodedSlug = decodeURIComponent(slug);
    const data = await fetchWordPressAPI<SinglePostResponse>(GET_POST_BY_SLUG, { slug: decodedSlug });
    return data.post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Get all slugs for static params
export async function getAllSlugs(): Promise<string[]> {
  try {
    const data = await fetchWordPressAPI<PostsResponse>(GET_ALL_SLUGS);
    return data.posts.edges.map((edge) => edge.node.slug);
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}
