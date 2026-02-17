import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/wordpress";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { ArrowLeft, Calendar, Home } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "게시글을 찾을 수 없습니다 | 법무법인 김앤파트너스",
    };
  }

  const description =
    post.content?.replace(/<[^>]*>/g, "").slice(0, 160) || "";

  return {
    title: `${post.title} | 법무법인 김앤파트너스 블로그`,
    description,
    alternates: {
      canonical: `https://kimnpartners-law.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | 법무법인 김앤파트너스`,
      description,
      type: "article",
      url: `https://kimnpartners-law.com/blog/${slug}`,
    },
  };
}

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f4f5f4" }}>
      {/* Header */}
      <header
        className="sticky top-0 w-full h-16 flex items-center justify-between px-6 z-50"
        style={{ backgroundColor: "#1c4e6f", color: "#ffffff" }}
      >
        <Link
          href="/blog"
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">목록으로</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <Home size={20} />
          <span className="font-medium">메인</span>
        </Link>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-10">
        {/* Title Section */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-8"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Date */}
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500">
              {format(new Date(post.date), "yyyy년 M월 d일 (EEEE)", {
                locale: ko,
              })}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{ color: "#1c4e6f" }}
          >
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-[#1c4e6f] prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-[#4A90B5] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1c4e6f]
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-li:my-1
              prose-blockquote:border-l-[#4A90B5] prose-blockquote:text-gray-600
              prose-hr:my-8 prose-hr:border-gray-200"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>

        {/* Back to Blog Button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#1c4e6f",
              color: "#ffffff",
            }}
          >
            <ArrowLeft size={18} />
            블로그 목록으로 돌아가기
          </Link>
          <a
            href="tel:1577-1097"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#4A90B5",
              color: "#ffffff",
            }}
          >
            1577-1097 상담 예약
          </a>
        </div>
      </article>

      {/* CTA Section */}
      <section
        className="py-12 px-6 text-center"
        style={{
          backgroundColor: "#2a6a8f",
          color: "#ffffff",
        }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          개인회생·개인파산, 혼자 고민하지 마세요
        </h2>
        <p className="text-sm md:text-base opacity-90 mb-6">
          9,375건 이상의 성공 데이터를 보유한 전문가가 상담해 드립니다.
        </p>
        <a
          href="tel:1577-1097"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: "#ffffff",
            color: "#1c4e6f",
          }}
        >
          1577-1097 전화 상담하기
        </a>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center"
        style={{
          backgroundColor: "#163d55",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} 법무법인 김앤파트너스. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
