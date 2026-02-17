import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "창원개인회생 창원개인파산 법률 블로그 | 법무법인 김앤파트너스",
  description:
    "창원개인회생, 창원개인파산, 채무조정 등 빚 문제 해결에 필요한 법률 정보를 제공합니다. 법무법인 김앤파트너스 전문 변호사 칼럼.",
  keywords:
    "창원개인회생, 창원개인파산, 개인회생 블로그, 개인파산 블로그, 채무조정, 빚탕감, 법률 칼럼",
  alternates: {
    canonical: "https://kimnpartners-law.com/blog",
  },
  openGraph: {
    title: "창원개인회생 창원개인파산 법률 블로그 | 법무법인 김앤파트너스",
    description:
      "창원개인회생, 창원개인파산, 채무조정 등 빚 문제 해결에 필요한 법률 정보를 제공합니다.",
    type: "website",
    url: "https://kimnpartners-law.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts(20);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f4f5f4" }}>
      {/* Header */}
      <header
        className="sticky top-0 w-full h-16 flex items-center justify-between px-6 z-50"
        style={{ backgroundColor: "#1c4e6f", color: "#ffffff" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">메인으로</span>
        </Link>
        <span className="text-lg font-bold">블로그</span>
        <div className="w-20" />
      </header>

      {/* Hero Section */}
      <section
        className="py-14 px-6 text-center"
        style={{
          backgroundColor: "#1c4e6f",
          backgroundImage: "linear-gradient(#1c4e6f, #2a6a8f)",
          color: "#ffffff",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          창원 개인회생·개인파산 법률 블로그
        </h1>
        <p className="text-base md:text-lg opacity-85 max-w-2xl mx-auto leading-relaxed">
          9,375건 이상의 채무 해결 경험을 바탕으로
          <br className="hidden md:block" />
          개인회생·개인파산에 관한 실전 법률 정보를 전해드립니다.
        </p>
      </section>

      {/* Posts List */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                아직 게시된 글이 없습니다.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {posts.map((post) => {
                const excerpt = post.excerpt
                  ?.replace(/<[^>]*>/g, "")
                  .trim() || "";

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e3e0",
                    }}
                  >
                    {/* Date */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {format(new Date(post.date), "yyyy년 M월 d일", {
                          locale: ko,
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#4A90B5] transition-colors"
                      style={{ color: "#1c4e6f" }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {excerpt && (
                      <p
                        className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />
                    )}

                    {/* Read More */}
                    <div
                      className="flex items-center gap-0.5 text-sm font-semibold"
                      style={{ color: "#4A90B5" }}
                    >
                      <span>자세히 보기</span>
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 px-6 text-center"
        style={{
          backgroundColor: "#1c4e6f",
          color: "#ffffff",
        }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          빚 문제, 혼자 고민하지 마세요
        </h2>
        <p className="text-sm md:text-base opacity-90 mb-6 max-w-xl mx-auto">
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
