/*
Design philosophy for this file: Systemic-elegant athletic editorial design.
Use asymmetric composition, disciplined spacing, dark premium surfaces, and Hebrew RTL copy.
Every section should reinforce calm authority, performance credibility, and a clear WhatsApp conversion path.
Avoid generic coaching language, centered-template layouts, and overly playful UI.
*/

import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Building2, CheckCircle2, ChevronLeft, Dumbbell, MessageCircle, ShieldCheck, Target, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const whatsappLink = "https://wa.me/972528483048";
const instagramLink = "https://www.instagram.com/tamir_bar_psychologist/";

const services = [
  {
    title: "ליווי אישי לספורטאים",
    description:
      "תהליך אישי ומדויק לספורטאים המעוניינים לשפר ביצועים, לבנות ביטחון, לייצב קשב, ולתפקד טוב יותר תחת לחץ תחרותי.",
    icon: Brain,
  },
  {
    title: "ליווי עונתי וספורט הישגי",
    description:
      "עבודה רציפה לאורך עונה או תקופת הכנה, עם דגש על חוסן, קבלת החלטות, רוטינות מנטליות, והתמודדות עם טעויות ומשברים.",
    icon: Target,
  },
  {
    title: "סדנאות והרצאות לקבוצות",
    description:
      "מפגשים לקבוצות, אקדמיות וצוותים מקצועיים בנושאי מנהיגות, תקשורת, לכידות קבוצתית, מוכנות מנטלית וביצועים תחת עומס.",
    icon: Users2,
  },
  {
    title: "עבודה עם מאמנים ואנשי מקצוע",
    description:
      "ליווי למאמנים ולאנשי צוות סביב יחסי מאמן-ספורטאי, קבלת החלטות, העברת מסרים, ויסות רגשי והובלה של סביבה תחרותית בריאה.",
    icon: Building2,
  },
];

const audiences = [
  "ספורטאים צעירים ותחרותיים בישראל",
  "ספורטאי עילית וספורטאים ברמות הישגיות גבוהות",
  "מאמנים, צוותים מקצועיים ומחלקות נוער",
  "אגודות, מועדונים ואקדמיות ספורט",
  "הורים לספורטאים צעירים",
  "אנשי כוחות הביטחון בסביבות ביצוע ולחץ",
];

const principles = [
  {
    title: "מבוסס מחקר וניסיון שדה",
    text: "העבודה משלבת כלים מבוססי מחקר עם ניסיון יישומי בעולם הספורט התחרותי והביצועי.",
  },
  {
    title: "מותאם אישית לאדם ולסביבה",
    text: "כל תהליך נבנה לפי שלב הקריירה, מאפייני הענף, מבנה האישיות, ורמת הלחץ שבה נדרש לתפקד.",
  },
  {
    title: "מצוינות לצד רווחה נפשית",
    text: "המטרה איננה רק תוצאה מיידית, אלא תפקוד יציב, זהות מקצועית בריאה, ויכולת להחזיק עומס לאורך זמן.",
  },
];

const credibility = [
  "פסיכולוג בתחום הספורט והביצוע",
  "קליניקה פרטית בראש העין ומפגשי אונליין",
  "ניסיון עם ספורטאי עילית, מאמנים, קבוצות מקצועניות ואקדמיות",
  "עבודה סביב ביטחון עצמי, חוסן, מוטיבציה, תקשורת, קשב וביצוע תחת לחץ",
  "שילוב כלים כגון CBT מותאם ביצועים, PST, ביופידבק ונוירופידבק לפי הצורך",
];

const faqs = [
  {
    question: "למי מתאים התהליך?",
    answer:
      "התהליך מתאים לספורטאים צעירים ובוגרים, לספורט הישגי, למאמנים, לקבוצות ולאנשי מקצוע הזקוקים לעבודה מנטלית מדויקת בסביבת ביצוע.",
  },
  {
    question: "האם אפשר להיפגש אונליין?",
    answer:
      "כן. לצד הקליניקה בראש העין, ניתן לקיים גם מפגשים אונליין בהתאם לאופי העבודה, המיקום והצורך המקצועי.",
  },
  {
    question: "האם האתר מיועד ללקוחות מחוץ לישראל?",
    answer:
      "לא. הפעילות והשירותים המוצגים כאן מיועדים לישראל בלבד.",
  },
  {
    question: "האם מוצגים מחירים באתר?",
    answer:
      "לא. ההתאמה נעשית לפי סוג התהליך, הקהל והמסגרת, ולכן השלב הראשון הוא שיחת היכרות קצרה והתאמת הצורך.",
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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(6,10,10,0.72)] backdrop-blur-xl">
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
            <a href="#services" className="transition hover:text-white">שירותים</a>
            <a href="#approach" className="transition hover:text-white">הגישה</a>
            <a href="#experience" className="transition hover:text-white">ניסיון מקצועי</a>
            <a href="#faq" className="transition hover:text-white">שאלות נפוצות</a>
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
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-abstract-performance-texture-fffjahg9zjtLakyH3dHLXu.webp)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="container relative grid min-h-[calc(100vh-76px)] items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
            <FadeUp delay={0.05}>
              <div className="order-2 lg:order-1">
                <SectionEyebrow>MindPro | ישראל בלבד</SectionEyebrow>
                <h1 className="max-w-3xl text-5xl leading-[0.95] font-semibold text-white sm:text-6xl xl:text-7xl">
                  פסיכולוגיה של
                  <span className="block text-emerald-200">ספורט וביצוע</span>
                  <span className="mt-3 block text-[0.54em] leading-[1.15] text-white/72">
                    עבודה מנטלית מדויקת לספורטאים, מאמנים, קבוצות ואנשי ביצוע.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  MindPro נבנתה עבור מי שמבינים שביצועים גבוהים לא נשענים רק על כישרון או כושר, אלא גם על יכולת לחשוב,
                  להתרכז, להתאושש, ולתפקד נכון כשהלחץ עולה.
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
                      לצפייה בשירותים
                      <ChevronLeft className="mr-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
                  <div>
                    <p className="text-3xl font-semibold text-white">1:1</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">ליווי אישי לספורטאים ולביצוע אישי תחת לחץ.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">קבוצות</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">סדנאות, הרצאות וליווי מקצועי למחלקות וצוותים.</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">ראש העין</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">קליניקה פרטית לצד אפשרות למפגשי אונליין בישראל.</p>
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
                    alt="ספורטאי רגע לפני עליה למגרש"
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
                  שילוב בין אמינות מקצועית, הבנה עמוקה של עולם הספורט, ועבודה מנטלית שמכוונת לביצוע.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
                  MindPro פועלת מתוך תפיסה שלפיה התפתחות מנטלית איכותית אינה שכבה חיצונית, אלא חלק מהותי מהדרך שבה
                  ספורטאים ואנשי ביצוע מתכוננים, מגיבים, לומדים ומתאוששים. התהליך שם דגש על שיפור ביצועים, אך שומר במקביל על
                  רווחה נפשית, איזון, ובניית זהות מקצועית בריאה ויציבה.
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
                  העבודה מיועדת לישראל בלבד, ומתקיימת בקליניקה פרטית בראש העין או במפגשי אונליין, בהתאם לצורך, למסגרת ולסוג
                  הליווי הנדרש.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="services" className="border-b border-white/8 py-24">
          <div className="container">
            <FadeUp>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionEyebrow>שירותים</SectionEyebrow>
                  <h2 className="max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                    שירותים מקצועיים לספורטאים, מאמנים, קבוצות וארגונים.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-white/62">
                  ללא הצגת מחירים פומביים. ההתאמה המקצועית נעשית לפי הקהל, סוג המסגרת, אופי הליווי והמטרות הביצועיות.
                </p>
              </div>
            </FadeUp>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeUp key={service.title} delay={0.08 * index}>
                    <article className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-8 transition duration-500 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.065]">
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(126,255,209,0.15),transparent_34%)]" />
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

        <section className="border-b border-white/8 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeUp>
              <div>
                <SectionEyebrow>למי זה מתאים</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  עבודה מנטלית מותאמת לסביבות שבהן נדרשים תפקוד, יציבות, דיוק והתמודדות עם עומס.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience, index) => (
                <FadeUp key={audience} delay={0.05 * index}>
                  <div className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-black/16 p-5">
                    <div className="mt-1 text-emerald-200">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-7 text-white/75">{audience}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="relative overflow-hidden border-b border-white/8 py-24">
          <div className="absolute inset-y-0 left-0 hidden w-[44%] bg-cover bg-center opacity-30 lg:block" style={{ backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-team-workshop-ZRKXcweJVPfNsExWx3fgoG.webp)" }} />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(4,10,9,0.72)] to-[rgba(4,10,9,0.98)] lg:bg-gradient-to-r lg:from-[rgba(4,10,9,0.96)] lg:via-[rgba(4,10,9,0.84)] lg:to-transparent" />
          <div className="container relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <FadeUp>
              <div>
                <SectionEyebrow>הגישה המקצועית</SectionEyebrow>
                <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  לא עוד מסרים כלליים על מוטיבציה, אלא תהליך עבודה מבוסס, מדיד ומותאם למציאות תחרותית.
                </h2>
              </div>
            </FadeUp>

            <div className="grid gap-5">
              {principles.map((principle, index) => (
                <FadeUp key={principle.title} delay={0.08 * index}>
                  <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-100">
                        {index === 0 ? <ShieldCheck className="h-5 w-5" /> : index === 1 ? <Target className="h-5 w-5" /> : <Dumbbell className="h-5 w-5" />}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{principle.title}</h3>
                    </div>
                    <p className="mt-4 text-base leading-8 text-white/68">{principle.text}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-white/8 py-24">
          <div className="container grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <FadeUp>
              <div>
                <SectionEyebrow>ניסיון ואמינות</SectionEyebrow>
                <h2 className="max-w-xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  נוכחות מקצועית שמדברת בגובה העיניים, אך נשענת על עומק, רישוי וניסיון בעולם הביצוע.
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
                <div className="grid gap-4">
                  {credibility.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                      <span className="mt-1 text-sm font-semibold text-emerald-200/82">0{index + 1}</span>
                      <p className="text-base leading-7 text-white/74">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-emerald-300/14 bg-emerald-300/8 p-6">
                  <p className="text-sm tracking-[0.24em] text-emerald-200/72 uppercase">נוכחות מקצועית</p>
                  <p className="mt-3 text-lg leading-8 text-white/78">
                    האתר נבנה עבור אנשים המחפשים איש מקצוע רציני, מדויק ודיסקרטי, ולא עבור מי שמחפש מסר שיווקי רועש.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="faq" className="border-b border-white/8 py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <FadeUp>
              <div>
                <SectionEyebrow>שאלות נפוצות</SectionEyebrow>
                <h2 className="max-w-xl text-4xl leading-tight font-semibold text-white sm:text-5xl">
                  תשובות קצרות לפני שעושים את הצעד הראשון.
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
                <div className="absolute inset-0 opacity-18" style={{ backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663471879519/aCkpHUAMj8zFeyEhmDVF7N/mindpro-abstract-performance-texture-fffjahg9zjtLakyH3dHLXu.webp)", backgroundSize: "cover", backgroundPosition: "center" }} />
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
