/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
