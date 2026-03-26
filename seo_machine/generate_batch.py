#!/usr/bin/env python3
"""
MindPro SEO Batch Article Generator
====================================
Generates multiple Hebrew SEO articles based on research from malharmali.com.
Each article is adapted for the Israeli market and MindPro's target audience.
"""

import os
import sys
import json
import re
import datetime
from pathlib import Path
from openai import OpenAI

# ─── Configuration ────────────────────────────────────────────────────────────

BRAND_NAME = "MindPro"
BRAND_WHATSAPP = "https://wa.me/972528483048"
BRAND_INSTAGRAM = "https://www.instagram.com/tamir_bar_psychologist/"
OUTPUT_DIR = Path(__file__).parent / "articles"
OUTPUT_DIR.mkdir(exist_ok=True)

# ─── Research-Based Topics ───────────────────────────────────────────────────
# Based on deep research of malharmali.com articles, adapted for Israeli market

RESEARCH_TOPICS = [
    {
        "title": "חמלה עצמית בספורט: למה זה בסדר לפחד לפני תחרות",
        "primary_keyword": "חמלה עצמית בספורט",
        "secondary_keywords": ["פחד לפני תחרות", "שיפוט עצמי ספורטאים", "חוסן מנטלי", "פסיכולוגיית ספורט"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "Self-Judgement vs Self-Kindness (SS #77)",
        "key_concepts": """
        - Self-compassion framework: self-kindness vs self-judgment
        - Two layers of worry: the actual worry + worrying about worrying
        - It's OKAY to feel nervous/afraid before competition
        - Athletes returning from injury feel extra fear — that's normal
        - Still use mental skills (mindfulness, process goals) but from acceptance
        - Saying it's okay doesn't mean being swept away by emotions
        - Self-kindness transforms the experience of competing
        """,
    },
    {
        "title": "הורים ומאמנים: איזה אקלים מוטיבציוני אתם יוצרים לילדים?",
        "primary_keyword": "אקלים מוטיבציוני בספורט",
        "secondary_keywords": ["הורים לספורטאים", "מוטיבציה ילדים ספורט", "אגו מול שליטה", "פסיכולוגיית ספורט ילדים"],
        "audience": "הורים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "What Motivational Climate Are You Creating? (SS #76)",
        "key_concepts": """
        - Motivational climate = psychological environment created by parents/coaches
        - Ego-involving climate: winning, comparison, rankings = anxiety, fear of failure, dropout
        - Mastery-involving climate: effort, learning, improvement = intrinsic motivation, resilience
        - Parents are MORE influential than coaches on motivational climate
        - Post-match conversations matter enormously — what are you emphasizing?
        - What is emphasized becomes internalized by the athlete
        - Ask: "What kind of player do you want to be in 3 years?"
        """,
    },
    {
        "title": "למה ספורטאים צעירים מפסיקים? 3 צרכים פסיכולוגיים שחייבים לספק",
        "primary_keyword": "למה ילדים מפסיקים ספורט",
        "secondary_keywords": ["נשירה מספורט", "מוטיבציה פנימית ספורטאים", "תיאוריית ההגדרה העצמית", "הורים ספורט ילדים"],
        "audience": "הורים לספורטאים צעירים",
        "search_intent": "informational",
        "source_inspiration": "Why So Many Junior Tennis Players Quit (SS #75)",
        "key_concepts": """
        - Self-Determination Theory (Deci & Ryan): 3 basic psychological needs
        - Autonomy: feeling in control of your own path. Pressure creates compliance, not motivation
        - Competence: feeling skilled and improving. Without it, no reason to continue
        - Relatedness: belonging and acceptance in the sporting community
        - Parents guilting children into playing = destroying autonomy
        - When all 3 needs met = intrinsic motivation and flourishing
        - When unmet = resentment, dropout, broken family dynamics
        """,
    },
    {
        "title": "שליטה עצמית מול אגו: הסוד של ספורטאים שממשיכים להתפתח",
        "primary_keyword": "מוטיבציה פנימית ספורטאים",
        "secondary_keywords": ["שליטה עצמית בספורט", "אגו בתחרות", "מוטיבציה חיצונית", "אימון מנטלי"],
        "audience": "ספורטאים הישגיים",
        "search_intent": "informational",
        "source_inspiration": "Choose Mastery Over Ego (SS #73)",
        "key_concepts": """
        - Mastery orientation vs ego orientation (Achievement Goal Theory)
        - Extrinsic motivation (fame, money, rankings) is fickle and fragile
        - Ego orientation = higher burnout, performance anxiety, sub-par performance
        - Mastery orientation = self-improvement, process focus, long-term development
        - Dane Sweeney (ATP) example: shifted from extrinsic to mastery, ranking improved
        - Judge yourself on HOW you performed, managed emotions, navigated difficulties
        - Not about eliminating desire to win — about what DRIVES you primarily
        """,
    },
    {
        "title": "דה-קטסטרופיזציה: מה באמת יקרה אם תפסיד?",
        "primary_keyword": "פחד מהפסד בספורט",
        "secondary_keywords": ["חרדת תחרות", "CBT ספורט", "מחשבות שליליות ספורטאים", "פסיכולוגיית ביצוע"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "Decatastrophizing (SS #55)",
        "key_concepts": """
        - Catastrophizing: inflating potential negative outcomes until they feel like identity threats
        - Athletes fear imagined consequences more than actual events
        - "What if I lose?" becomes "I'm not good enough to keep playing"
        - CBT technique: "So what if?" — investigate and confront the thought
        - Decatastrophizing helps athletes see fears hinge on imagined consequences
        - Need rapport and readiness to use this technique
        - Different from mindfulness defusion — actively unpacks root assumptions
        """,
    },
    {
        "title": "איך ג'וקוביץ' מאמן את הראש: מיינדפולנס ושליטה בקשב לספורטאים",
        "primary_keyword": "אימון מנטלי ג'וקוביץ'",
        "secondary_keywords": ["מיינדפולנס ספורט", "שליטה בקשב", "חוסן מנטלי", "אימון מנטלי ספורטאים"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "How Novak Djokovic Trains Mental Skills (SS #70)",
        "key_concepts": """
        - Djokovic practices mindfulness 15 min daily — as important as physical training
        - Mental toughness is NOT being fearless — it's trained attentional control
        - Acceptance and non-judgment: let negative thoughts come and go
        - Reduces secondary struggle of "not wanting to feel this way"
        - Mindfulness is NOT clearing your mind — it's nonjudgmental awareness
        - You can't improve attention without practice, like you can't get stronger without training
        - Focus on present-oriented task-relevant cues vs future-oriented worries
        """,
    },
    {
        "title": "מה קורה כשנחנקים בתחרות? המדע מאחורי הצ'וקינג וכלים להתמודדות",
        "primary_keyword": "צ'וקינג בספורט",
        "secondary_keywords": ["חנק בתחרות", "לחץ בספורט", "הרפיית שרירים מתקדמת", "ויסות עוררות"],
        "audience": "ספורטאים",
        "search_intent": "informational",
        "source_inspiration": "What Happens When You Choke? (SS #58)",
        "key_concepts": """
        - Choking = loss of normal motor functioning under pressure
        - Cusp Catastrophe Theory: high arousal + cognitive anxiety = performance collapse
        - High arousal alone doesn't cause choking — cognitive anxiety is the trigger
        - Choking is NOT your fault — it's a brain mechanism
        - Remedies: Progressive Muscle Relaxation, body scanning, box breathing
        - 5-4-3-2-1 grounding technique for in-match use
        - CBT, REBT, Mindfulness, ACT all help manage cognitive anxiety
        """,
    },
    {
        "title": "מנטרות לא עובדות: מה כן עובד בדיבור עצמי לספורטאים",
        "primary_keyword": "דיבור עצמי ספורטאים",
        "secondary_keywords": ["מנטרות ספורט", "שיחה פנימית", "כלים מנטליים", "אימון מנטלי"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "Mantras Don't Work (SS #72) + Self-Talk (SS #60)",
        "key_concepts": """
        - Generic mantras ("I am strong", "I can do this") often don't work
        - Self-talk must be specific, task-relevant, and believable
        - Instructional self-talk (what to do) vs motivational self-talk (how to feel)
        - Self-talk is a foundational and trainable mental skill
        - Must practice self-talk in training, not just in competition
        - Effective self-talk is personalized and contextual
        - Connect self-talk to specific actions and process goals
        """,
    },
    {
        "title": "קשב — המשאב הכי חשוב שלך כספורטאי (וכולם מתעלמים ממנו)",
        "primary_keyword": "קשב בספורט",
        "secondary_keywords": ["ריכוז בתחרות", "שליטה בקשב", "אימון מנטלי", "ביצוע ספורטיבי"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "Attention Is Your Most Valuable Resource (SS #71) + Working Memory (SS #59)",
        "key_concepts": """
        - Attention/focus is the most valuable resource on the field/court
        - Forget about confidence, nerves — attention management is key
        - Working memory is critical for athletes — limited capacity under pressure
        - Attention is trainable through deliberate practice
        - Mindfulness meditation builds attentional control
        - Difference between broad/narrow and internal/external attention
        - Must redirect attention to task-relevant cues under pressure
        """,
    },
    {
        "title": "\"הכל בראש\" — אז למה אנחנו לא מתאמנים על זה? מדריך לאימון מנטלי אמיתי",
        "primary_keyword": "אימון מנטלי בספורט",
        "secondary_keywords": ["פסיכולוגיית ספורט ישראל", "כלים מנטליים", "שיפור ביצועים", "MindPro"],
        "audience": "ספורטאים, הורים ומאמנים",
        "search_intent": "informational",
        "source_inspiration": "It's All Mental (SS #57) + Information Without Application (SS #54) + Folk Psychology (SS #48)",
        "key_concepts": """
        - Everyone says "it's all mental" but nobody trains it systematically
        - Information without application is worthless — must practice mental skills
        - Folk psychology (common wisdom) vs evidence-based sport psychology
        - Mental skills require deliberate, consistent practice like physical skills
        - Most athletes spend <5% of training time on mental skills
        - Sport psychology is a science, not motivational speaking
        - Practical framework: assess, learn, practice, compete, review
        """,
    },
]

# ─── Prompts ─────────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """אתה כותב תוכן SEO מומחה בעברית, המתמחה בפסיכולוגיית ספורט וביצוע בישראל.
אתה כותב עבור המותג MindPro — פרקטיקה מקצועית בתחום פסיכולוגיית הספורט, המיועדת לספורטאים, מאמנים, קבוצות ואנשי ביצוע בישראל.

כללי כתיבה:
- כתוב בעברית טבעית, מקצועית ואמפתית. אל תשתמש בשפה מכירתית אגרסיבית.
- הטון: סמכותי אך נגיש, מבוסס מחקר, מניע לפעולה.
- שלב מילות מפתח בצורה טבעית, ללא דחיסה מלאכותית.
- כתוב פסקאות קצרות (3-4 משפטים). הימנע מרשימות ארוכות.
- כל מאמר יכלול: כותרת H1, לפחות 5 כותרות H2, תוכן של 900-1200 מילים, FAQ של 4 שאלות, ו-CTA.
- השתמש בפורמט Markdown.
- כתוב בגוף שלישי (לא "אני" אלא "MindPro" או "הפסיכולוג").
- המאמר צריך להיות רלוונטי לכל ענפי הספורט בישראל, לא רק טניס.
- שלב דוגמאות מהספורט הישראלי (כדורגל, כדורסל, שחייה, אתלטיקה וכו').
- התייחס למציאות הישראלית (תרבות ספורט, מערכת ספורט, הורים ישראלים).
"""

def build_article_prompt(topic: dict) -> str:
    keywords_str = ", ".join(topic["secondary_keywords"])
    return f"""כתוב מאמר SEO מלא בעברית בנושא: "{topic['title']}"

פרטי הנושא:
- מילת מפתח ראשית: {topic['primary_keyword']}
- מילות מפתח משניות: {keywords_str}
- קהל יעד: {topic['audience']}
- כוונת חיפוש: {topic['search_intent']}

רקע מקצועי (השתמש ברעיונות אלה כבסיס, אך כתוב תוכן מקורי):
{topic['key_concepts']}

מבנה המאמר הנדרש (Markdown):
1. כותרת H1 (שכוללת את מילת המפתח הראשית)
2. פסקת מבוא (100-150 מילים) — הצגת הבעיה/האתגר, שילוב מילות מפתח, עידוד קריאה
3. לפחות 5 פסקאות תוכן עם כותרות H2 (כל פסקה 150-200 מילים)
4. פסקת סיכום (80-100 מילים)
5. קטע FAQ עם 4 שאלות ותשובות (בפורמט ### לכל שאלה)
6. קטע CTA שמפנה ליצירת קשר עם MindPro בוואטסאפ ({BRAND_WHATSAPP})

דרישות נוספות:
- שלב את שם המותג MindPro לפחות 3 פעמים במאמר
- ציין שהשירות מיועד לישראל ומתקיים בראש העין ואונליין
- שלב ידע מחקרי ומקצועי אמיתי (ציין מחקרים/תיאוריות ידועות בתחום)
- הוסף תגית alt מוצעת לתמונה בפורמט: <!-- IMAGE_ALT: [תיאור התמונה המוצעת] -->
- בסוף המאמר, הוסף מטא-נתונים בפורמט JSON:
<!-- META:
{{
  "meta_title": "כותרת SEO (עד 60 תווים)",
  "meta_description": "תיאור SEO (עד 155 תווים)",
  "slug": "slug-in-english-with-hyphens",
  "primary_keyword": "{topic['primary_keyword']}",
  "reading_time_minutes": 5
}}
-->
"""


def build_faq_schema_prompt(article_content: str) -> str:
    return f"""מהמאמר הבא, חלץ את 4 שאלות ה-FAQ ויצר קוד JSON-LD תקין לסכמת FAQPage של Schema.org.

המאמר:
{article_content[:3000]}

החזר JSON-LD בלבד, ללא הסברים נוספים, בפורמט:
{{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {{
      "@type": "Question",
      "name": "שאלה כאן",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "תשובה כאן"
      }}
    }}
  ]
}}
"""


def extract_meta(article_content: str) -> dict:
    meta_match = re.search(r'<!-- META:\s*(\{.*?\})\s*-->', article_content, re.DOTALL)
    if meta_match:
        try:
            return json.loads(meta_match.group(1))
        except json.JSONDecodeError:
            pass
    return {
        "meta_title": "MindPro | פסיכולוגיית ספורט וביצוע בישראל",
        "meta_description": "MindPro — ליווי מנטלי מקצועי לספורטאים, מאמנים וקבוצות בישראל.",
        "slug": f"article-{datetime.date.today().isoformat()}",
        "reading_time_minutes": 5,
    }


def save_article(article_md: str, meta: dict, topic: dict, date_str: str) -> Path:
    slug = meta.get("slug", f"article-{date_str}")

    # Save Markdown with frontmatter
    md_path = OUTPUT_DIR / f"{date_str}-{slug}.md"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(f"---\n")
        f.write(f"title: \"{topic['title']}\"\n")
        f.write(f"date: \"{date_str}\"\n")
        f.write(f"slug: \"{slug}\"\n")
        f.write(f"meta_title: \"{meta.get('meta_title', '')}\"\n")
        f.write(f"meta_description: \"{meta.get('meta_description', '')}\"\n")
        f.write(f"primary_keyword: \"{topic['primary_keyword']}\"\n")
        f.write(f"audience: \"{topic['audience']}\"\n")
        f.write(f"reading_time: {meta.get('reading_time_minutes', 5)}\n")
        f.write(f"---\n\n")
        # Remove META comment from article body
        clean_md = re.sub(r'<!-- META:.*?-->', '', article_md, flags=re.DOTALL)
        clean_md = re.sub(r'<!-- IMAGE_ALT:.*?-->', '', clean_md)
        f.write(clean_md.strip())
        f.write("\n")

    # Save metadata JSON
    meta_path = OUTPUT_DIR / f"{date_str}-{slug}.json"
    full_meta = {**meta, "topic": topic, "date": date_str, "files": {
        "markdown": str(md_path.name),
    }}
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(full_meta, f, ensure_ascii=False, indent=2)

    return md_path


def update_articles_index(meta: dict, topic: dict, date_str: str):
    index_path = OUTPUT_DIR / "index.json"
    articles = []
    if index_path.exists():
        with open(index_path, encoding="utf-8") as f:
            articles = json.load(f)

    # Avoid duplicates
    existing_slugs = {a.get("slug") for a in articles}
    slug = meta.get("slug")
    if slug not in existing_slugs:
        articles.insert(0, {
            "date": date_str,
            "title": topic["title"],
            "slug": slug,
            "meta_description": meta.get("meta_description"),
            "primary_keyword": topic["primary_keyword"],
            "audience": topic["audience"],
            "reading_time": meta.get("reading_time_minutes", 5),
        })
        with open(index_path, "w", encoding="utf-8") as f:
            json.dump(articles, f, ensure_ascii=False, indent=2)


def main():
    print("🚀 MindPro Batch Article Generator — Starting...")
    print(f"📅 Date: {datetime.date.today().isoformat()}")
    print(f"📝 Articles to generate: {len(RESEARCH_TOPICS)}")
    print("=" * 60)

    client = OpenAI()
    base_date = datetime.date.today()
    generated = []

    for i, topic in enumerate(RESEARCH_TOPICS):
        # Spread dates across the last 10 days for natural appearance
        article_date = base_date - datetime.timedelta(days=len(RESEARCH_TOPICS) - 1 - i)
        date_str = article_date.isoformat()

        print(f"\n[{i+1}/{len(RESEARCH_TOPICS)}] Generating: {topic['title']}")
        print(f"  📌 Keyword: {topic['primary_keyword']}")
        print(f"  👥 Audience: {topic['audience']}")
        print(f"  📅 Date: {date_str}")

        try:
            # Generate article
            response = client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": build_article_prompt(topic)},
                ],
                temperature=0.75,
                max_tokens=3000,
            )
            article_md = response.choices[0].message.content

            # Extract meta
            meta = extract_meta(article_md)
            print(f"  🔖 Meta: {meta.get('meta_title', 'N/A')}")
            print(f"  🔗 Slug: {meta.get('slug', 'N/A')}")

            # Save
            saved_path = save_article(article_md, meta, topic, date_str)
            update_articles_index(meta, topic, date_str)

            generated.append({
                "title": topic["title"],
                "slug": meta.get("slug"),
                "date": date_str,
                "path": str(saved_path),
            })
            print(f"  ✅ Saved: {saved_path.name}")

        except Exception as e:
            print(f"  ❌ Error: {e}")
            continue

    # Sync to public
    print("\n" + "=" * 60)
    print("🔄 Syncing to public directory...")
    try:
        sys.path.insert(0, str(Path(__file__).parent))
        from sync_to_public import sync
        sync()
        print("✅ Synced to public")
    except Exception as e:
        print(f"⚠️  Sync failed: {e}")

    # Regenerate sitemap
    print("🗺️  Regenerating sitemap...")
    try:
        from generate_sitemap import save_sitemap
        save_sitemap("https://mindpro-ackphuam.manus.space")
        print("✅ Sitemap updated")
    except Exception as e:
        print(f"⚠️  Sitemap failed: {e}")

    print("\n" + "=" * 60)
    print(f"🎉 Batch generation complete! {len(generated)}/{len(RESEARCH_TOPICS)} articles generated.")
    for g in generated:
        print(f"  📄 [{g['date']}] {g['title']} → {g['slug']}")


if __name__ == "__main__":
    main()
