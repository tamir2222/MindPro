/*
Design philosophy for this file: warm editorial performance-wellness design.
The page should feel more human, premium, and welcoming while preserving authority, clarity, and conversion focus.
Use the official MindPro logo, warmer olive-taupe surfaces, soft sage highlights, sand-gold details, and calmer contrast.
Typography should feel more refined and less cold than the previous iteration.
*/

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowLeft,
  Brain,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ClipboardCheck,
  Dumbbell,
  Medal,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const whatsappLink = "https://wa.me/972528483048";
const instagramLink = "https://www.instagram.com/tamir_bar_psychologist/";
const logoUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-logo-official_64041d3f.svg";

const audienceCards = [
  {
    title: "ספורטאים תחרותיים",
    text: "למי שרוצים להגיע לרגעי אמת עם יותר ביטחון, ריכוז ויציבות מנטלית.",
  },
  {
    title: "מאמנים וצוותים מקצועיים",
    text: "לצוותים המחפשים כלים לתקשורת, הובלה, קבלת החלטות ועבודה תחת לחץ.",
  },
  {
    title: "קבוצות, אקדמיות וארגונים",
    text: "למסגרות שרוצות לייצר תרבות ביצוע בריאה, מקצועית ומתמשכת.",
  },
];

const outcomes = [
  "חיזוק ביטחון עצמי לפני תחרות ובמהלך ביצוע",
  "שיפור ריכוז, ויסות רגשי והתאוששות מטעויות",
  "התמודדות מדויקת עם לחץ, עומס וציפיות",
  "בניית שגרות מנטליות לרגעי אמת ולתקופות מאתגרות",
  "שיפור תקשורת בין ספורטאי, מאמן והסביבה התומכת",
  "יצירת יציבות מנטלית לצד רווחה נפשית לאורך זמן",
];

const services = [
  {
    title: "ליווי אישי לספורטאים",
    description:
      "תהליך אישי לספורטאים המעוניינים לשפר ביצועים, לייצב ביטחון, לחזק קשב ולהגיע לרגעים חשובים עם מוכנות מנטלית גבוהה יותר.",
    icon: Brain,
  },
  {
    title: "ליווי למאמנים וצוותים",
    description:
      "עבודה מקצועית עם מאמנים ואנשי צוות סביב תקשורת, הובלה, קבלת החלטות, תפקוד תחת עומס ובניית סביבה תחרותית בריאה.",
    icon: Users2,
  },
  {
    title: "סדנאות, הרצאות ותהליכים למסגרות",
    description:
      "מפגשים לקבוצות, אקדמיות וארגונים בנושאי חוסן, ביצוע, לכידות, מוכנות מנטלית ותרבות מקצועית בסביבות הישגיות.",
    icon: Building2,
  },
];

const processSteps = [
  {
    number: "01",
    title: "מגדירים את תמונת הביצוע",
    text: "מזהים את האתגרים, הלחצים, המטרות והקשר המקצועי שבתוכו נדרש התפקוד.",
  },
  {
    number: "02",
    title: "מתרגמים קושי לעבודה יישומית",
    text: "העבודה אינה נשארת ברמת שיחה כללית, אלא הופכת לכלים, עקרונות ושגרות שניתן להפעיל בפועל.",
  },
  {
    number: "03",
    title: "מתרגלים למצבי אמת",
    text: "בונים מוכנות לרגעי לחץ, טעויות, פציעות, ירידות, קבלת החלטות ומעברים בתוך עונה.",
  },
  {
    number: "04",
    title: "שומרים על תהליך יציב ומתמשך",
    text: "המטרה היא לא רק שיפור מיידי, אלא יצירת יסודות מנטליים שיחזיקו לאורך זמן.",
  },
];

const authorityItems = [
  "פסיכולוג בתחום הספורט והביצוע",
  "קליניקה פרטית בראש העין לצד מפגשי אונליין בישראל",
  "עבודה עם ספורטאים צעירים, ספורט הישגי, מאמנים, קבוצות ואקדמיות",
  "שילוב בין ידע מחקרי, כלים יישומיים וניסיון מהשטח",
  "מיקוד בנושאים כמו ביטחון עצמי, חוסן, לחץ, מוטיבציה, קשב ותקשורת",
  "התאמה מקצועית למסגרת, לענף, לגיל ולשלב ההתפתחותי",
];

const audienceChips = [
  "ספורטאי עילית וספורטאים הישגיים",
  "ספורטאים צעירים ומתבגרים בישראל",
  "מאמנים, צוותים מקצועיים ומנהלים",
  "אגודות, אקדמיות ומחלקות נוער",
  "הורים לספורטאים צעירים",
  "אנשי ביצוע בסביבות לחץ",
];

const faqs = [
  {
    question: "למי התהליך מתאים?",
    answer:
      "התהליך מתאים לספורטאים, מאמנים, קבוצות, הורים ואנשי ביצוע הזקוקים לעבודה מנטלית מדויקת בסביבה תחרותית או עתירת לחץ.",
  },
  {
    question: "האם אפשר להיפגש אונליין?",
    answer:
      "כן. לצד מפגשים בקליניקה בראש העין, ניתן לקיים גם תהליכים אונליין בהתאם לצורך המקצועי ולמסגרת העבודה.",
  },
  {
    question: "האם יש מחירים באתר?",
    answer:
      "לא. סוג הליווי נקבע לפי הקהל, מטרת התהליך, משך העבודה והמסגרת המקצועית, ולכן ההתאמה נעשית לאחר שיחה ראשונית.",
  },
  {
    question: "האם השירותים מיועדים גם לחו״ל?",
    answer: "לא. האתר והשירותים מיועדים לישראל בלבד.",
  },
];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.3em] text-[#d6c49b] uppercase">
      <span className="h-px w-10 bg-[#bfa672]/45" />
      <span>{children}</span>
    </div>
  );
}

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(25,27,22,0.74)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#top" className="group flex items-center gap-4">
            <div className="rounded-[1.35rem] border border-[rgba(216,197,154,0.18)] bg-[rgba(248,241,227,0.06)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 group-hover:bg-[rgba(248,241,227,0.09)]">
              <img src={logoUrl} alt="לוגו MindPro" className="h-8 w-auto sm:h-9" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-[#f3ecdf]">MindPro</p>
              <p className="text-sm text-[#d6cfbf]/80">פסיכולוגיה של הספורט והביצוע</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#e1d8c8]/78 lg:flex">
            <a href="#fit" className="transition hover:text-[#f7f0e3]">למי זה מתאים</a>
            <a href="#services" className="transition hover:text-[#f7f0e3]">שירותים</a>
            <a href="#method" className="transition hover:text-[#f7f0e3]">איך זה עובד</a>
            <a href="#authority" className="transition hover:text-[#f7f0e3]">ניסיון מקצועי</a>
            <Link href="/articles" className="transition hover:text-[#f7f0e3]">מאמרים</Link>
            <a href="#contact" className="transition hover:text-[#f7f0e3]">יצירת קשר</a>
          </nav>

          <Button
            asChild
            className="rounded-full border border-[rgba(192,168,115,0.24)] bg-[linear-gradient(135deg,rgba(190,211,192,0.24),rgba(214,196,155,0.2))] px-5 text-[#f9f5ec] shadow-[0_14px_34px_rgba(35,41,31,0.24)] backdrop-blur-md hover:bg-[linear-gradient(135deg,rgba(190,211,192,0.3),rgba(214,196,155,0.26))]"
          >
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="ml-2 h-4 w-4" />
              לתיאום שיחה
            </a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(190,211,192,0.16),transparent_24%),radial-gradient(circle_at_top_left,rgba(210,185,132,0.12),transparent_22%),linear-gradient(180deg,rgba(32,35,28,0.55),rgba(18,20,17,0.82))]" />
          <div
            className="absolute inset-0 opacity-25 mix-blend-screen"
            style={{
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-abstract-performance-texture-fffjahg9zjtLakyH3dHLXu.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container relative grid min-h-[calc(100vh-76px)] items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
            <FadeUp delay={0.05}>
              <div className="order-2 lg:order-1">
                <SectionEyebrow>MindPro | ישראל בלבד</SectionEyebrow>
                <h1 className="max-w-3xl text-5xl leading-[0.94] font-semibold text-[#f4edde] sm:text-6xl xl:text-7xl">
                  לשחק, להוביל
                  <span className="block text-[#bfd2be]">ולתפקד בביטחון</span>
                  <span className="mt-4 block text-[0.5em] leading-[1.16] text-[#ddd4c4]">
                    פסיכולוגיה של ספורט וביצוע לספורטאים, מאמנים, קבוצות ואנשי ביצוע בישראל.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8cfbe] sm:text-xl">
                  MindPro נבנתה עבור מי שמבינים שביצועים ברגעי אמת נשענים לא רק על כישרון או כושר, אלא גם על היכולת
                  להתרכז, להתאושש, לקבל החלטות, ולשמור על יציבות כשהלחץ עולה.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-[linear-gradient(135deg,#c7d9c8,#e0cfaa)] px-7 text-base font-semibold text-[#23251d] shadow-[0_22px_60px_rgba(57,66,50,0.26)] hover:opacity-95"
                  >
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      לתיאום שיחת היכרות
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-[rgba(231,220,199,0.18)] bg-[rgba(255,248,236,0.04)] px-7 text-base text-[#f4edde] hover:bg-[rgba(255,248,236,0.08)]"
                  >
                    <a href="#services">
                      להבין איך זה עובד
                      <ChevronLeft className="mr-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 grid gap-5 border-t border-[rgba(234,222,199,0.12)] pt-7 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-semibold text-[#f4edde]">1:1</p>
                    <p className="mt-2 text-sm leading-6 text-[#cfc5b4]">ליווי אישי מדויק לספורטאים ולאנשי ביצוע.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-[#f4edde]">קבוצות</p>
                    <p className="mt-2 text-sm leading-6 text-[#cfc5b4]">עבודה עם מאמנים, צוותים, אקדמיות וארגונים.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-[#f4edde]">ראש העין</p>
                    <p className="mt-2 text-sm leading-6 text-[#cfc5b4]">קליניקה פרטית לצד מפגשי אונליין בישראל.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="order-1 lg:order-2 lg:justify-self-end">
                <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(235,223,199,0.13)] bg-[rgba(34,36,30,0.65)] shadow-[0_35px_120px_rgba(0,0,0,0.34)]">
                  <div className="absolute inset-0 bg-gradient-to-l from-[rgba(24,24,20,0.44)] via-transparent to-[rgba(210,184,129,0.1)]" />
                  <div className="absolute right-6 top-6 z-10 rounded-[1.35rem] border border-[rgba(229,216,191,0.16)] bg-[rgba(255,248,236,0.08)] px-4 py-3 backdrop-blur-md">
                    <img src={logoUrl} alt="MindPro" className="h-7 w-auto sm:h-8" />
                  </div>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-hero-reference-XEG7krSAD6cAD2iZwthjPm.webp"
                    alt="ספורטאי מתכונן לרגע אמת"
                    className="h-[38rem] w-full object-cover object-[34%_center] saturate-[0.9] sepia-[0.12] lg:w-[39rem]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="max-w-md rounded-[1.5rem] border border-[rgba(233,219,193,0.12)] bg-[rgba(34,38,31,0.72)] p-5 backdrop-blur-xl">
                      <p className="text-sm tracking-[0.24em] text-[#d6c49b] uppercase">מיקוד. יציבות. ביצוע.</p>
                      <p className="mt-3 text-base leading-7 text-[#ddd5c5]">
                        עבודה מקצועית סביב ביטחון עצמי, חוסן, ויסות רגשי, קשב, תקשורת ותפקוד תחרותי.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="fit" className="border-b border-white/8 py-20">
          <div className="container">
            <FadeUp>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionEyebrow>למי זה מתאים</SectionEyebrow>
                  <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                    שלוש כניסות ברורות לאותו עיקרון: עבודה מנטלית שמשרתת תפקוד אמיתי, לא רק השראה רגעית.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[#cdc3b3]">
                  אחת החוזקות של עבודה מקצועית היא היכולת להתאים את השפה, הקצב והכלים לאדם, לצוות או למסגרת.
                </p>
              </div>
            </FadeUp>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {audienceCards.map((card, index) => (
                <FadeUp key={card.title} delay={0.08 * index}>
                  <article className="rounded-[1.8rem] border border-[rgba(230,218,196,0.1)] bg-[linear-gradient(180deg,rgba(40,42,35,0.8),rgba(26,29,24,0.92))] p-7 transition duration-500 hover:-translate-y-1 hover:border-[rgba(190,211,192,0.28)] hover:bg-[linear-gradient(180deg,rgba(48,51,42,0.82),rgba(30,34,28,0.96))]">
                    <p className="text-sm tracking-[0.22em] text-[#d6c49b] uppercase">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl font-semibold text-[#f5eee1]">{card.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[#d1c8b8]">{card.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/8 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <FadeUp>
              <div className="rounded-[2rem] border border-[rgba(230,218,196,0.1)] bg-[rgba(255,247,233,0.03)] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-consultation-scene-R6jQ4xURzgobmaaJLYp8vg.webp"
                  alt="שיחה מקצועית בין פסיכולוג לספורטאי"
                  className="h-full min-h-[24rem] w-full rounded-[1.55rem] object-cover sepia-[0.08]"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div>
                <SectionEyebrow>על MindPro</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                  שילוב בין פסיכולוגיה מקצועית, הבנה עמוקה של עולם הספורט, ועבודה מנטלית שמכוונת לביצוע.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d6cdbc]">
                  MindPro פועלת מתוך תפיסה שלפיה התפתחות מנטלית איכותית אינה שכבה חיצונית, אלא חלק מהותי מהדרך שבה
                  ספורטאים ואנשי ביצוע מתכוננים, מגיבים, לומדים ומתאוששים. המטרה היא לשפר ביצועים, אבל גם לבנות זהות מקצועית
                  יציבה, בריאה ומדויקת יותר.
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#cbbfae]">
                  העבודה מיועדת לישראל בלבד, ומתקיימת בקליניקה פרטית בראש העין או במפגשי אונליין, בהתאם לצורך, למסגרת ולסוג
                  הליווי הנדרש.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="border-b border-white/8 py-24">
          <div className="container grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <FadeUp>
              <div>
                <SectionEyebrow>מה משתנה בתהליך</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                  תרגום של פסיכולוגיה לתוצאות יום־יומיות: פחות רעש פנימי, יותר בהירות, יותר תפקוד.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item, index) => (
                <FadeUp key={item} delay={0.05 * index}>
                  <div className="flex items-start gap-4 rounded-[1.4rem] border border-[rgba(230,218,196,0.1)] bg-[rgba(255,246,232,0.035)] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                    <div className="mt-1 text-[#bfd2be]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-7 text-[#ddd4c3]">{item}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-white/8 py-24">
          <div className="container">
            <FadeUp>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionEyebrow>שירותים</SectionEyebrow>
                  <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                    מבנה שירותים ברור, מדויק ומותאם לאופי המסגרת.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[#cdc4b4]">
                  לא מוצגים מחירים באתר. ההתאמה נעשית לפי סוג הליווי, מטרות התהליך, משך העבודה ואופי הקהל.
                </p>
              </div>
            </FadeUp>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeUp key={service.title} delay={0.08 * index}>
                    <article className="group relative overflow-hidden rounded-[1.8rem] border border-[rgba(230,218,196,0.1)] bg-[linear-gradient(180deg,rgba(42,45,37,0.84),rgba(28,31,25,0.95))] p-8 transition duration-500 hover:-translate-y-1 hover:border-[rgba(191,211,190,0.26)] hover:bg-[linear-gradient(180deg,rgba(49,53,43,0.88),rgba(31,34,28,0.98))]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,196,155,0.16),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start gap-5">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(214,196,155,0.18)] bg-[rgba(214,196,155,0.08)] text-[#e7dcc1]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-[#f5eee1]">{service.title}</h3>
                          <p className="mt-4 text-base leading-8 text-[#d0c6b6]">{service.description}</p>
                        </div>
                      </div>
                    </article>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        <section id="method" className="relative overflow-hidden border-b border-white/8 py-24">
          <div
            className="absolute inset-y-0 left-0 hidden w-[44%] bg-cover bg-center opacity-28 lg:block"
            style={{
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-team-workshop-ZRKXcweJVPfNsExWx3fgoG.webp)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(24,25,20,0.68)] to-[rgba(22,24,20,0.96)] lg:bg-gradient-to-r lg:from-[rgba(22,24,20,0.96)] lg:via-[rgba(28,31,24,0.82)] lg:to-transparent" />
          <div className="container relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <FadeUp>
              <div>
                <SectionEyebrow>איך זה עובד</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                  תהליך שנבנה באופן שיטתי: מהבנת המציאות המקצועית ועד כלים שנשארים זמינים גם מחוץ לחדר.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <FadeUp key={step.number} delay={0.08 * index}>
                  <article className="rounded-[1.75rem] border border-[rgba(230,218,196,0.1)] bg-[rgba(255,247,234,0.05)] p-7 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(214,196,155,0.13)] text-sm font-semibold text-[#e9dfc8]">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-[#f5eee1]">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-base leading-8 text-[#d2c8b8]">{step.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="authority" className="border-b border-white/8 py-24">
          <div className="container grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <FadeUp>
              <div>
                <SectionEyebrow>ניסיון מקצועי</SectionEyebrow>
                <h2 className="max-w-xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                  אמינות מקצועית שנבנית לא רק מטון, אלא מעומק, מסגרות עבודה, וניסיון בעולם הביצוע.
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="rounded-[2rem] border border-[rgba(230,218,196,0.1)] bg-[linear-gradient(180deg,rgba(40,43,36,0.82),rgba(28,31,25,0.96))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
                <div className="grid gap-4">
                  {authorityItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 border-b border-[rgba(230,218,196,0.08)] pb-4 last:border-b-0 last:pb-0">
                      <span className="mt-1 text-sm font-semibold text-[#d6c49b]">0{index + 1}</span>
                      <p className="text-base leading-7 text-[#ddd3c3]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-[rgba(214,196,155,0.14)] bg-[rgba(214,196,155,0.08)] p-5">
                    <ShieldCheck className="h-5 w-5 text-[#e7dcc1]" />
                    <p className="mt-4 text-sm tracking-[0.22em] text-[#d6c49b] uppercase">מקצועיות</p>
                    <p className="mt-2 text-base leading-7 text-[#efe6d7]">גישה מחקרית, דיסקרטית ומדויקת.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-[rgba(191,211,190,0.14)] bg-[rgba(191,211,190,0.08)] p-5">
                    <Medal className="h-5 w-5 text-[#e4ead8]" />
                    <p className="mt-4 text-sm tracking-[0.22em] text-[#bfd2be] uppercase">עולם הישגי</p>
                    <p className="mt-2 text-base leading-7 text-[#efe6d7]">הבנה עמוקה של ספורט, תחרות ולחץ.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-[rgba(214,196,155,0.14)] bg-[rgba(255,248,236,0.06)] p-5">
                    <ClipboardCheck className="h-5 w-5 text-[#efe2c6]" />
                    <p className="mt-4 text-sm tracking-[0.22em] text-[#d6c49b] uppercase">יישומיות</p>
                    <p className="mt-2 text-base leading-7 text-[#efe6d7]">כלים שנועדו לעבוד גם מחוץ למפגש עצמו.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="border-b border-white/8 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeUp>
              <div>
                <SectionEyebrow>קהל ותחומי עבודה</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                  התאמה מנטלית לסביבות שבהן צריך להופיע, להוביל, להתאושש ולהחזיק עומס לאורך זמן.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2">
              {audienceChips.map((audience, index) => (
                <FadeUp key={audience} delay={0.05 * index}>
                  <div className="flex items-start gap-4 rounded-[1.4rem] border border-[rgba(230,218,196,0.1)] bg-[rgba(255,247,234,0.035)] p-5">
                    <div className="mt-1 text-[#bfd2be]">
                      {index % 3 === 0 ? (
                        <Sparkles className="h-5 w-5" />
                      ) : index % 3 === 1 ? (
                        <Target className="h-5 w-5" />
                      ) : (
                        <Dumbbell className="h-5 w-5" />
                      )}
                    </div>
                    <p className="text-base leading-7 text-[#ddd4c4]">{audience}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-white/8 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <FadeUp>
              <div>
                <SectionEyebrow>שאלות נפוצות</SectionEyebrow>
                <h2 className="max-w-xl text-4xl leading-tight font-semibold text-[#f4edde] sm:text-5xl">
                  תשובות קצרות לפני שפונים.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <FadeUp key={faq.question} delay={0.06 * index}>
                  <article className="rounded-[1.5rem] border border-[rgba(230,218,196,0.1)] bg-[linear-gradient(180deg,rgba(40,42,35,0.76),rgba(28,31,25,0.92))] p-6">
                    <h3 className="text-xl font-semibold text-[#f5eee1]">{faq.question}</h3>
                    <p className="mt-3 text-base leading-8 text-[#d2c7b7]">{faq.answer}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container">
            <FadeUp>
              <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(214,196,155,0.15)] bg-[linear-gradient(135deg,rgba(53,56,45,0.96),rgba(29,31,25,0.98))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.26)] sm:p-10 lg:p-14">
                <div
                  className="absolute inset-0 opacity-16"
                  style={{
                    backgroundImage:
                      "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-abstract-performance-texture-fffjahg9zjtLakyH3dHLXu.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <div className="mb-6 inline-flex rounded-[1.25rem] border border-[rgba(231,218,194,0.14)] bg-[rgba(255,247,234,0.07)] px-4 py-3">
                      <img src={logoUrl} alt="לוגו MindPro" className="h-8 w-auto sm:h-9" />
                    </div>
                    <SectionEyebrow>יצירת קשר</SectionEyebrow>
                    <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-[#f6efe2] sm:text-5xl">
                      אם אתם מחפשים תהליך מקצועי, מדויק ורציני, זה המקום להתחיל ממנו.
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ddd3c3]">
                      ניתן לפנות ב-WhatsApp לצורך שיחת היכרות קצרה, התאמת צורך, ותיאום המשך. השירותים מיועדים לישראל בלבד.
                    </p>
                  </div>

                  <div className="rounded-[1.7rem] border border-[rgba(230,218,196,0.12)] bg-[rgba(255,247,234,0.07)] p-6 backdrop-blur-md">
                    <p className="text-sm tracking-[0.24em] text-[#d6c49b] uppercase">פרטי קשר</p>
                    <div className="mt-5 space-y-3 text-[#efe5d6]">
                      <p>WhatsApp: 052-848-3048</p>
                      <p>מיקום: ראש העין + אונליין</p>
                      <p>אזור פעילות: ישראל בלבד</p>
                    </div>

                    <div className="mt-7 flex flex-col gap-3">
                      <Button
                        asChild
                        size="lg"
                        className="h-14 rounded-full bg-[linear-gradient(135deg,#c7d9c8,#e0cfaa)] px-6 text-base font-semibold text-[#23251d] hover:opacity-95"
                      >
                        <a href={whatsappLink} target="_blank" rel="noreferrer">
                          <MessageCircle className="ml-2 h-4 w-4" />
                          פנייה ב-WhatsApp
                        </a>
                      </Button>

                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="h-14 rounded-full border-[rgba(231,220,199,0.16)] bg-[rgba(255,248,236,0.04)] px-6 text-base text-[#f4edde] hover:bg-[rgba(255,248,236,0.08)]"
                      >
                        <a href={instagramLink} target="_blank" rel="noreferrer">
                          לעמוד האינסטגרם
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </div>
  );
}
