import { motion } from "framer-motion";
import { marked } from "marked";
import { ArrowRight, Calendar, Clock, MessageCircle, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";

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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Strip frontmatter and meta comments from markdown
function cleanMarkdown(raw: string): string {
  // Remove ```yaml ... ``` frontmatter block at the start of the file
  let cleaned = raw.replace(/^```yaml[\s\S]*?```\n?/m, "");
  // Also remove standard YAML frontmatter (--- ... ---) just in case
  cleaned = cleaned.replace(/^---[\s\S]*?\n---[\r\n]?/m, "");
  // Remove <!-- META: ... --> blocks
  cleaned = cleaned.replace(/<!--\s*META:[\s\S]*?-->/g, "");
  // Remove <!-- IMAGE_ALT: ... --> comments
  cleaned = cleaned.replace(/<!--\s*IMAGE_ALT:[\s\S]*?-->/g, "");
  return cleaned.trim();
}

export default function ArticleReader() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [meta, setMeta] = useState<ArticleMeta | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    // Load index to find the article meta
    fetch("/articles/index.json")
      .then((r) => r.json())
      .then((articles: ArticleMeta[]) => {
        const found = articles.find((a) => a.slug === slug);
        if (!found) {
          setNotFound(true);
          setLoading(false);
          return;
        }
        setMeta(found);

        // Find the markdown file by slug
        const datePrefix = found.date;
        const mdFile = `/articles/${datePrefix}-${slug}.md`;

        return fetch(mdFile)
          .then((r) => {
            if (!r.ok) throw new Error("not found");
            return r.text();
          })
          .then((raw) => {
            const cleaned = cleanMarkdown(raw);
            const html = marked(cleaned) as string;
            setHtmlContent(html);
            setLoading(false);
          });
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  // Update page title and meta description dynamically
  useEffect(() => {
    if (meta) {
      document.title = `${meta.title} | MindPro`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", meta.meta_description);
      }
    }
  }, [meta]);

  if (loading) {
    return (
      <div dir="rtl" className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#c7d9c8] border-t-transparent" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div dir="rtl" className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] text-center">
        <p className="text-2xl font-semibold text-[#f4edde]">המאמר לא נמצא</p>
        <Link href="/articles" className="mt-6 text-[#c7d9c8] underline">
          חזרה למאמרים
        </Link>
      </div>
    );
  }

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
            <Link href="/articles" className="transition hover:text-[#f7f0e3]">
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

      <main className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-sm text-[#b0a898]"
          >
            <Link href="/articles" className="flex items-center gap-1.5 transition hover:text-[#c7d9c8]">
              <ArrowRight className="h-3.5 w-3.5" />
              מאמרים
            </Link>
            <span>/</span>
            <span className="truncate text-[#d8cfbe]">{meta?.title}</span>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 overflow-hidden rounded-[1.5rem]"
          >
            <img
              src={`/articles/${slug}.png`}
              alt={meta?.title}
              className="h-64 w-full object-cover saturate-[0.9] sepia-[0.08] sm:h-80"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                if (img.src.endsWith('.png')) {
                  img.src = `/articles/${slug}.webp`;
                } else {
                  img.parentElement!.style.display = 'none';
                }
              }}
            />
          </motion.div>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Keyword badge */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(214,196,155,0.2)] bg-[rgba(34,38,31,0.72)] px-3 py-1 text-xs text-[#d6c49b]">
                <Tag className="h-3 w-3" />
                {meta?.primary_keyword}
              </span>
              <span className="text-xs text-[#b0a898]">{meta?.audience}</span>
            </div>

            <h1 className="mb-4 text-3xl font-semibold leading-snug text-[#f4edde] sm:text-4xl">
              {meta?.title}
            </h1>

            <div className="mb-8 flex items-center gap-5 text-sm text-[#b0a898]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {meta ? formatDate(meta.date) : ""}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {meta?.reading_time} דקות קריאה
              </span>
            </div>

            <div className="editorial-line mb-10" />
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="article-body prose-mindpro"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 overflow-hidden rounded-[1.8rem] border border-[rgba(199,217,200,0.18)] bg-[linear-gradient(135deg,rgba(53,56,45,0.96),rgba(29,31,25,0.98))] p-8 text-center"
          >
            <p className="text-xs font-medium tracking-[0.28em] text-[#d6c49b] uppercase">MindPro</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#f4edde] sm:text-3xl">
              רוצים לדבר עם פסיכולוג ספורט?
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-[#d8cfbe]">
              שיחת היכרות קצרה, ללא עלות וללא התחייבות. לספורטאים, מאמנים וקבוצות בישראל.
            </p>
            <a
              href="https://wa.me/972528483048"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-13 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#c7d9c8,#e0cfaa)] px-7 text-base font-semibold text-[#23251d] shadow-[0_14px_40px_rgba(57,66,50,0.26)] transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              פנייה ב-WhatsApp
            </a>
          </motion.div>

          {/* Back to articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-[#b0a898] transition hover:text-[#c7d9c8]"
            >
              <ArrowRight className="h-4 w-4" />
              לכל המאמרים
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 py-8 mt-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-[#b0a898] sm:flex-row">
          <p>© {new Date().getFullYear()} MindPro — פסיכולוגיית ספורט וביצוע בישראל</p>
          <p>ראש העין + אונליין | ישראל בלבד</p>
        </div>
      </footer>
    </div>
  );
}
