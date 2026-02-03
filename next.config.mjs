/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://wp.kimnpartners-law.com",
      },
      {
        source: "/blog/:path*",
        destination: "https://wp.kimnpartners-law.com/:path*",
      },
    ];
  },
}

export default nextConfig
