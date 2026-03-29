import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock, Tag, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface ArticleMeta {
  date: string;
  title: string;
  slug: string;
  meta_description: string;
  primary_keyword: string;
  audience: string;
  reading_time: number;
}

const logoUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-logo-aCkpHUAMj8zFeyEhmDVF7N.webp";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.3em] text-[#d6c49b] uppercase">
      <span className="h-px w-10 bg-[#bfa672]/45" />
      <span>{children}</span>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Articles() {
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/articles/index.json")
      .then((r) => r.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(25,27,22,0.74)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="group flex items-center gap-4">
            <div className="rounded-[1.35rem] border border-[rgba(216,197,154,0.18)] bg-[rgba(248,241,227,0.06)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 group-hover:bg-[rgba(248,241,227,0.09)]">
              <img src={logoUrl} alt="לוגו MindPro" className="h-8 w-auto sm:h-9" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-[#f3ecdf]">MindPro</p>
              <p className="text-sm text-[#d6cfbf]/80">פסיכולוגיה של הספורט והביצוע</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#e1d8c8]/78 lg:flex">
            <Link href="/" className="transition hover:text-[#f7f0e3]">
              דף הבית
            </Link>
            <Link href="/articles" className="text-[#f4edde] font-medium">
              מאמרים
            </Link>
          </nav>
          <a
            href="https://wa.me/972528483048"
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#c7d9c8,#e0cfaa)] px-5 text-sm font-semibold text-[#23251d] shadow-[0_8px_24px_rgba(57,66,50,0.22)] transition hover:opacity-90 sm:inline-flex"
          >
            לתיאום שיחה
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-white/8 py-20">
          <div className="container">
            <FadeUp>
              <SectionEyebrow>ידע מקצועי</SectionEyebrow>
              <h1 className="max-w-2xl text-5xl leading-tight font-semibold text-[#f4edde] sm:text-6xl">
                מאמרים בפסיכולוגיית
                <span className="block text-[#bfd2be]">ספורט וביצוע</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8cfbe]">
                תוכן מקצועי ומבוסס מחקר לספורטאים, מאמנים, הורים ואנשי ביצוע בישראל. מאמר חדש מדי שבוע.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container">
            {loading ? (
              <div className="flex items-center justify-center py-24">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#c7d9c8] border-t-transparent" />
              </div>
            ) : articles.length === 0 ? (
              <FadeUp>
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <BookOpen className="mb-4 h-12 w-12 text-[#d6c49b]/40" />
                  <p className="text-lg text-[#d8cfbe]">המאמרים הראשונים בדרך. חזרו בקרוב.</p>
                </div>
              </FadeUp>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                  <FadeUp key={article.slug} delay={0.06 * index}>
                    <Link href={`/articles/${article.slug}`}>
                      <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(230,218,196,0.1)] bg-[linear-gradient(180deg,rgba(40,42,35,0.76),rgba(28,31,25,0.92))] transition-all duration-300 hover:border-[rgba(199,217,200,0.25)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                        {/* Article Image */}
                        <div className="relative h-48 overflow-hidden bg-[rgba(34,36,30,0.8)]">
                          <img
                            src={`/articles/${article.slug}.png`}
                            alt={article.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.9] sepia-[0.08]"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              if (img.src.endsWith('.png')) {
                                img.src = `/articles/${article.slug}.webp`;
                              } else {
                                img.style.display = 'none';
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,26,22,0.7)] to-transparent" />
                          {/* Keyword badge */}
                          <div className="absolute bottom-3 right-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(214,196,155,0.2)] bg-[rgba(34,38,31,0.72)] px-3 py-1 text-xs text-[#d6c49b] backdrop-blur-sm">
                              <Tag className="h-3 w-3" />
                              {article.primary_keyword}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-[#b0a898]">
                            <span className="flex items-center gap-1.5">
                              <User className="h-3.5 w-3.5" />
                              תמיר בר
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {formatDate(article.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {article.reading_time} דקות קריאה
                            </span>
                          </div>

                          <h2 className="mb-3 text-xl font-semibold leading-snug text-[#f5eee1] transition-colors group-hover:text-[#c7d9c8]">
                            {article.title}
                          </h2>

                          <p className="mb-5 flex-1 text-sm leading-7 text-[#c8bfb0]">
                            {article.meta_description}
                          </p>

                          <div className="flex items-center gap-2 text-sm font-medium text-[#c7d9c8]">
                            <span>לקריאת המאמר</span>
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/8 py-20">
          <div className="container">
            <FadeUp>
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(214,196,155,0.15)] bg-[linear-gradient(135deg,rgba(53,56,45,0.96),rgba(29,31,25,0.98))] p-8 text-center sm:p-12">
                <SectionEyebrow>יצירת קשר</SectionEyebrow>
                <h2 className="mx-auto max-w-xl text-3xl font-semibold text-[#f4edde] sm:text-4xl">
                  רוצים לדבר עם פסיכולוג ספורט?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#d8cfbe]">
                  שיחת היכרות קצרה, ללא עלות וללא התחייבות. לספורטאים, מאמנים וקבוצות בישראל.
                </p>
                <a
                  href="https://wa.me/972528483048"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#c7d9c8,#e0cfaa)] px-8 text-base font-semibold text-[#23251d] shadow-[0_16px_48px_rgba(57,66,50,0.28)] transition hover:opacity-90"
                >
                  פנייה ב-WhatsApp
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-[#b0a898] sm:flex-row">
          <p>© {new Date().getFullYear()} MindPro — פסיכולוגיית ספורט וביצוע בישראל</p>
          <p>ראש העין + אונליין | ישראל בלבד</p>
        </div>
      </footer>
    </div>
  );
}
