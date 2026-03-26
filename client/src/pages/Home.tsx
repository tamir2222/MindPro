/*
Design philosophy for this file: systemic-elegant athletic editorial design.
This upgraded version should preserve the dark premium visual system while improving conversion logic.
The page must move clearly through identity, audience fit, practical outcomes, authority, service structure, and repeated WhatsApp invitations.
Avoid generic coaching language, noisy sales tactics, and any imitation of competitor layouts.
*/

import { Button } from "@/components/ui/button";
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
    answer:
      "לא. האתר והשירותים מיועדים לישראל בלבד.",
  },
];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-emerald-200/75 uppercase">
      <span className="h-px w-10 bg-emerald-300/40" />
      <span>{children}</span>
    </div>
  );
}

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(6,10,10,0.74)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#top" className="group flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/8 text-sm font-semibold text-emerald-100 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_50px_rgba(0,0,0,0.25)]">
              MP
            </div>
            <div>
              <p className="text-lg font-semibold text-white">MindPro</p>
              <p className="text-sm text-white/55">פסיכולוגיה של הספורט והביצוע</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/72 lg:flex">
            <a href="#fit" className="transition hover:text-white">למי זה מתאים</a>
            <a href="#services" className="transition hover:text-white">שירותים</a>
            <a href="#method" className="transition hover:text-white">איך זה עובד</a>
            <a href="#authority" className="transition hover:text-white">ניסיון מקצועי</a>
            <a href="#contact" className="transition hover:text-white">יצירת קשר</a>
          </nav>

          <Button
            asChild
            className="rounded-full border border-emerald-300/30 bg-emerald-300/12 px-5 text-white shadow-[0_14px_34px_rgba(11,80,61,0.25)] backdrop-blur-md hover:bg-emerald-300/20"
          >
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle className="ml-2 h-4 w-4" />
              לתיאום שיחה
            </a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,255,206,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(190,232,216,0.08),transparent_24%)]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-abstract-performance-texture-fffjahg9zjtLakyH3dHLXu.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container relative grid min-h-[calc(100vh-76px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <FadeUp delay={0.05}>
              <div className="order-2 lg:order-1">
                <SectionEyebrow>MindPro | ישראל בלבד</SectionEyebrow>
                <h1 className="max-w-3xl text-5xl leading-[0.95] font-semibold text-white sm:text-6xl xl:text-7xl">
                  לשחק, להוביל
                  <span className="block text-emerald-200">ולתפקד בביטחון</span>
                  <span className="mt-3 block text-[0.54em] leading-[1.12] text-white/72">
                    פסיכולוגיה של ספורט וביצוע לספורטאים, מאמנים, קבוצות ואנשי ביצוע בישראל.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  MindPro נבנתה עבור מי שמבינים שביצועים ברגעי אמת נשענים לא רק על כישרון או כושר, אלא גם על היכולת להתרכז,
                  להתאושש, לקבל החלטות, ולשמור על יציבות כשהלחץ עולה.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-emerald-300 px-7 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(88,255,205,0.22)] hover:bg-emerald-200"
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
                    className="h-14 rounded-full border-white/15 bg-white/5 px-7 text-base text-white hover:bg-white/10"
                  >
                    <a href="#services">
                      להבין איך זה עובד
                      <ChevronLeft className="mr-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-semibold text-white">1:1</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">ליווי אישי מדויק לספורטאים ולאנשי ביצוע.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">קבוצות</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">עבודה עם מאמנים, צוותים, אקדמיות וארגונים.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">ראש העין</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">קליניקה פרטית לצד מפגשי אונליין בישראל.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="order-1 lg:order-2 lg:justify-self-end">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
                  <div className="absolute inset-0 bg-gradient-to-l from-black/68 via-black/22 to-transparent" />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-hero-reference-XEG7krSAD6cAD2iZwthjPm.webp"
                    alt="ספורטאי מתכונן לרגע אמת"
                    className="h-[38rem] w-full object-cover object-[34%_center] lg:w-[39rem]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="max-w-md rounded-[1.5rem] border border-white/10 bg-[rgba(7,17,15,0.74)] p-5 backdrop-blur-xl">
                      <p className="text-sm tracking-[0.24em] text-emerald-200/70 uppercase">מיקוד. יציבות. ביצוע.</p>
                      <p className="mt-3 text-base leading-7 text-white/72">
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
                  <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                    שלוש כניסות ברורות לאותו עיקרון: עבודה מנטלית שמשרתת תפקוד אמיתי, לא רק השראה רגעית.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-white/62">
                  אחת החוזקות של עבודה מקצועית היא היכולת להתאים את השפה, הקצב והכלים לאדם, לצוות או למסגרת.
                </p>
              </div>
            </FadeUp>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {audienceCards.map((card, index) => (
                <FadeUp key={card.title} delay={0.08 * index}>
                  <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-7 transition duration-500 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.065]">
                    <p className="text-sm tracking-[0.22em] text-emerald-200/68 uppercase">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-4 text-base leading-8 text-white/66">{card.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/8 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <FadeUp>
              <div className="rounded-[2rem] border border-white/10 bg-white/4 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-consultation-scene-R6jQ4xURzgobmaaJLYp8vg.webp"
                  alt="שיחה מקצועית בין פסיכולוג לספורטאי"
                  className="h-full min-h-[24rem] w-full rounded-[1.55rem] object-cover"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div>
                <SectionEyebrow>על MindPro</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  שילוב בין פסיכולוגיה מקצועית, הבנה עמוקה של עולם הספורט, ועבודה מנטלית שמכוונת לביצוע.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
                  MindPro פועלת מתוך תפיסה שלפיה התפתחות מנטלית איכותית אינה שכבה חיצונית, אלא חלק מהותי מהדרך שבה
                  ספורטאים ואנשי ביצוע מתכוננים, מגיבים, לומדים ומתאוששים. המטרה היא לשפר ביצועים, אבל גם לבנות זהות מקצועית
                  יציבה, בריאה ומדויקת יותר.
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
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
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  תרגום של פסיכולוגיה לתוצאות יום־יומיות: פחות רעש פנימי, יותר בהירות, יותר תפקוד.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item, index) => (
                <FadeUp key={item} delay={0.05 * index}>
                  <div className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-black/16 p-5">
                    <div className="mt-1 text-emerald-200">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-7 text-white/75">{item}</p>
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
                  <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                    מבנה שירותים ברור, מדויק ומותאם לאופי המסגרת.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-white/62">
                  לא מוצגים מחירים באתר. ההתאמה נעשית לפי סוג הליווי, מטרות התהליך, משך העבודה ואופי הקהל.
                </p>
              </div>
            </FadeUp>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeUp key={service.title} delay={0.08 * index}>
                    <article className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-8 transition duration-500 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.065]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,255,209,0.15),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start gap-5">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                          <p className="mt-4 text-base leading-8 text-white/66">{service.description}</p>
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
            className="absolute inset-y-0 left-0 hidden w-[44%] bg-cover bg-center opacity-30 lg:block"
            style={{
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-team-workshop-ZRKXcweJVPfNsExWx3fgoG.webp)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(4,10,9,0.72)] to-[rgba(4,10,9,0.98)] lg:bg-gradient-to-r lg:from-[rgba(4,10,9,0.96)] lg:via-[rgba(4,10,9,0.84)] lg:to-transparent" />
          <div className="container relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <FadeUp>
              <div>
                <SectionEyebrow>איך זה עובד</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  תהליך שנבנה באופן שיטתי: מהבנת המציאות המקצועית ועד כלים שנשארים זמינים גם מחוץ לחדר.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <FadeUp key={step.number} delay={0.08 * index}>
                  <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-300/10 text-sm font-semibold text-emerald-100">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-base leading-8 text-white/68">{step.text}</p>
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
                <h2 className="max-w-xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  אמינות מקצועית שנבנית לא רק מטון, אלא מעומק, מסגרות עבודה, וניסיון בעולם הביצוע.
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
                <div className="grid gap-4">
                  {authorityItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                      <span className="mt-1 text-sm font-semibold text-emerald-200/82">0{index + 1}</span>
                      <p className="text-base leading-7 text-white/74">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-emerald-300/14 bg-emerald-300/8 p-5">
                    <ShieldCheck className="h-5 w-5 text-emerald-100" />
                    <p className="mt-4 text-sm tracking-[0.22em] text-emerald-200/70 uppercase">מקצועיות</p>
                    <p className="mt-2 text-base leading-7 text-white/76">גישה מחקרית, דיסקרטית ומדויקת.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-emerald-300/14 bg-emerald-300/8 p-5">
                    <Medal className="h-5 w-5 text-emerald-100" />
                    <p className="mt-4 text-sm tracking-[0.22em] text-emerald-200/70 uppercase">עולם הישגי</p>
                    <p className="mt-2 text-base leading-7 text-white/76">הבנה עמוקה של ספורט, תחרות ולחץ.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-emerald-300/14 bg-emerald-300/8 p-5">
                    <ClipboardCheck className="h-5 w-5 text-emerald-100" />
                    <p className="mt-4 text-sm tracking-[0.22em] text-emerald-200/70 uppercase">יישומיות</p>
                    <p className="mt-2 text-base leading-7 text-white/76">כלים שנועדו לעבוד גם מחוץ למפגש עצמו.</p>
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
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  התאמה מנטלית לסביבות שבהן צריך להופיע, להוביל, להתאושש ולהחזיק עומס לאורך זמן.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2">
              {audienceChips.map((audience, index) => (
                <FadeUp key={audience} delay={0.05 * index}>
                  <div className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-black/16 p-5">
                    <div className="mt-1 text-emerald-200">
                      {index % 3 === 0 ? <Sparkles className="h-5 w-5" /> : index % 3 === 1 ? <Target className="h-5 w-5" /> : <Dumbbell className="h-5 w-5" />}
                    </div>
                    <p className="text-base leading-7 text-white/75">{audience}</p>
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
                <h2 className="max-w-xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  תשובות קצרות לפני שפונים.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <FadeUp key={faq.question} delay={0.06 * index}>
                  <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-base leading-8 text-white/67">{faq.answer}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container">
            <FadeUp>
              <div className="relative overflow-hidden rounded-[2.2rem] border border-emerald-300/16 bg-[linear-gradient(135deg,rgba(12,26,23,0.96),rgba(8,13,13,0.98))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-10 lg:p-14">
                <div
                  className="absolute inset-0 opacity-18"
                  style={{
                    backgroundImage:
                      "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-abstract-performance-texture-fffjahg9zjtLakyH3dHLXu.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <SectionEyebrow>יצירת קשר</SectionEyebrow>
                    <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                      אם אתם מחפשים תהליך מקצועי, מדויק ורציני, זה המקום להתחיל ממנו.
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                      ניתן לפנות ב-WhatsApp לצורך שיחת היכרות קצרה, התאמת צורך, ותיאום המשך. השירותים מיועדים לישראל בלבד.
                    </p>
                  </div>

                  <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
                    <p className="text-sm tracking-[0.24em] text-emerald-200/70 uppercase">פרטי קשר</p>
                    <div className="mt-5 space-y-3 text-white/78">
                      <p>WhatsApp: 052-848-3048</p>
                      <p>מיקום: ראש העין + אונליין</p>
                      <p>אזור פעילות: ישראל בלבד</p>
                    </div>

                    <div className="mt-7 flex flex-col gap-3">
                      <Button
                        asChild
                        size="lg"
                        className="h-14 rounded-full bg-emerald-300 px-6 text-base font-semibold text-slate-950 hover:bg-emerald-200"
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
                        className="h-14 rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10"
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
