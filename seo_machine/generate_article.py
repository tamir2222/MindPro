#!/usr/bin/env python3
"""
MindPro SEO Article Machine
============================
Generates a nightly SEO-optimized Hebrew article for the MindPro website,
targeting Israeli audiences interested in sport psychology and mental performance.

Usage:
    python3 generate_article.py [--topic "custom topic"]
    python3 generate_article.py --sample   # Generate a sample article
"""

import os
import sys
import json
import random
import argparse
import datetime
import re
from pathlib import Path
from openai import OpenAI

# ─── Configuration ────────────────────────────────────────────────────────────

BRAND_NAME = "MindPro"
BRAND_TAGLINE = "פסיכולוגיה של הספורט והביצוע"
BRAND_WHATSAPP = "https://wa.me/972528483048"
BRAND_INSTAGRAM = "https://www.instagram.com/tamir_bar_psychologist/"
BRAND_LOCATION = "ראש העין + אונליין"
BRAND_DESCRIPTION = (
    "MindPro היא פרקטיקה מקצועית בתחום פסיכולוגיית הספורט והביצוע, "
    "המיועדת לספורטאים, מאמנים, קבוצות ואנשי ביצוע בישראל. "
    "השירות ניתן בקליניקה פרטית בראש העין ובמפגשי אונליין."
)

OUTPUT_DIR = Path(__file__).parent / "articles"
OUTPUT_DIR.mkdir(exist_ok=True)

# ─── Topic Bank ───────────────────────────────────────────────────────────────
# A curated bank of SEO-rich topics targeting Israeli search queries.
# Each topic includes a primary keyword, secondary keywords, and target audience.

TOPIC_BANK = [
    {
        "title": "חרדת ביצוע בספורט: איך להתגבר על לחץ לפני תחרות",
        "primary_keyword": "חרדת ביצוע בספורט",
        "secondary_keywords": ["לחץ לפני תחרות", "ביצוע תחת לחץ", "פסיכולוג ספורט", "ויסות רגשי ספורטאים"],
        "audience": "ספורטאים הישגיים ומתבגרים",
        "search_intent": "informational",
    },
    {
        "title": "ביטחון עצמי לספורטאים: 5 כלים מנטליים שפסיכולוגי ספורט משתמשים בהם",
        "primary_keyword": "ביטחון עצמי לספורטאים",
        "secondary_keywords": ["כלים מנטליים לספורטאים", "אימון מנטלי", "פסיכולוגיית ספורט ישראל"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
    },
    {
        "title": "מה זה אימון מנטלי לספורטאים ולמה כל ספורטאי צריך אותו",
        "primary_keyword": "אימון מנטלי לספורטאים",
        "secondary_keywords": ["מאמן מנטלי ספורט", "פסיכולוג ספורט ישראל", "שיפור ביצועים מנטליים"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
    },
    {
        "title": "ילד שמפסיד ובוכה: איך הורים יכולים לעזור לספורטאי צעיר להתמודד עם כישלון",
        "primary_keyword": "ספורטאים צעירים התמודדות עם כישלון",
        "secondary_keywords": ["הורים לספורטאים", "חוסן מנטלי ילדים", "פסיכולוגיית ספורט נוער ישראל"],
        "audience": "הורים לספורטאים צעירים",
        "search_intent": "informational",
    },
    {
        "title": "שחיקה בספורט: איך מזהים ומה עושים כשספורטאי מאבד מוטיבציה",
        "primary_keyword": "שחיקה בספורט",
        "secondary_keywords": ["אובדן מוטיבציה ספורטאים", "burnout ספורט", "פסיכולוג ספורט"],
        "audience": "ספורטאים, מאמנים והורים",
        "search_intent": "informational",
    },
    {
        "title": "ריכוז בספורט: טכניקות מנטליות לשיפור הקשב בתחרות",
        "primary_keyword": "ריכוז בספורט",
        "secondary_keywords": ["קשב בספורט", "טכניקות ריכוז", "אימון מנטלי", "ביצוע תחרותי"],
        "audience": "ספורטאים ומאמנים",
        "search_intent": "informational",
    },
    {
        "title": "תקשורת מאמן-ספורטאי: איך לבנות מערכת יחסים שמשפרת ביצועים",
        "primary_keyword": "תקשורת מאמן ספורטאי",
        "secondary_keywords": ["ניהול קבוצה", "פסיכולוגיית ספורט מאמנים", "הובלה ספורטיבית"],
        "audience": "מאמנים וצוותים",
        "search_intent": "informational",
    },
    {
        "title": "חזרה לספורט אחרי פציעה: האתגר המנטלי שאף אחד לא מדבר עליו",
        "primary_keyword": "חזרה לספורט אחרי פציעה",
        "secondary_keywords": ["פציעה ספורט מנטלי", "פחד מפציעה חוזרת", "פסיכולוג ספורט ישראל"],
        "audience": "ספורטאים שחזרו מפציעה",
        "search_intent": "informational",
    },
    {
        "title": "מהי פסיכולוגיית ספורט? מדריך מלא לספורטאים, הורים ומאמנים בישראל",
        "primary_keyword": "פסיכולוגיית ספורט",
        "secondary_keywords": ["פסיכולוג ספורט ישראל", "אימון מנטלי", "ביצוע ספורטיבי"],
        "audience": "כלל הקהל",
        "search_intent": "informational",
    },
    {
        "title": "שגרות מנטליות לפני תחרות: הסוד של ספורטאי עילית",
        "primary_keyword": "שגרות מנטליות לפני תחרות",
        "secondary_keywords": ["הכנה מנטלית לתחרות", "פסיכולוגיית ספורט", "ביצוע עילית"],
        "audience": "ספורטאים הישגיים",
        "search_intent": "informational",
    },
    {
        "title": "ביצוע תחת לחץ: למה כישרון לא מספיק ומה עושים עם זה",
        "primary_keyword": "ביצוע תחת לחץ",
        "secondary_keywords": ["ניהול לחץ ספורטאים", "פסיכולוגיית ביצוע", "אימון מנטלי ישראל"],
        "audience": "ספורטאים ואנשי ביצוע",
        "search_intent": "informational",
    },
    {
        "title": "פסיכולוג ספורט בראש העין: מה לצפות מהתהליך ומי מתאים",
        "primary_keyword": "פסיכולוג ספורט ראש העין",
        "secondary_keywords": ["פסיכולוג ספורט קרוב", "אימון מנטלי ראש העין", "MindPro"],
        "audience": "ספורטאים באזור מרכז",
        "search_intent": "navigational",
    },
]

# ─── Prompt Templates ─────────────────────────────────────────────────────────

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
"""

def build_article_prompt(topic: dict) -> str:
    keywords_str = ", ".join(topic["secondary_keywords"])
    return f"""כתוב מאמר SEO מלא בעברית בנושא: "{topic['title']}"

פרטי הנושא:
- מילת מפתח ראשית: {topic['primary_keyword']}
- מילות מפתח משניות: {keywords_str}
- קהל יעד: {topic['audience']}
- כוונת חיפוש: {topic['search_intent']}

מבנה המאמר הנדרש (Markdown):
1. כותרת H1 (שכוללת את מילת המפתח הראשית)
2. פסקת מבוא (100-150 מילים) — הצגת הבעיה/האתגר, שילוב מילות מפתח, עידוד קריאה
3. לפחות 5 פסקאות תוכן עם כותרות H2 (כל פסקה 150-200 מילים)
4. פסקת סיכום (80-100 מילים)
5. קטע FAQ עם 4 שאלות ותשובות (בפורמט ### לכל שאלה)
6. קטע CTA שמפנה ליצירת קשר עם MindPro בוואטסאפ ({BRAND_WHATSAPP})

דרישות נוספות:
- שלב את שם המותג MindPro לפחות 3 פעמים במאמר
- ציין שהשירות מיועד לישראל בלבד ומתקיים בראש העין ואונליין
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

# ─── Core Functions ────────────────────────────────────────────────────────────

def get_client() -> OpenAI:
    """Initialize OpenAI client."""
    return OpenAI()

def select_topic(custom_topic: str = None) -> dict:
    """Select a topic from the bank or use a custom one."""
    if custom_topic:
        return {
            "title": custom_topic,
            "primary_keyword": custom_topic,
            "secondary_keywords": ["פסיכולוגיית ספורט", "אימון מנטלי", "MindPro"],
            "audience": "ספורטאים ומאמנים",
            "search_intent": "informational",
        }
    
    # Avoid repeating recently used topics
    used_topics_file = OUTPUT_DIR / "used_topics.json"
    used_titles = []
    if used_topics_file.exists():
        with open(used_topics_file) as f:
            used_titles = json.load(f)
    
    available = [t for t in TOPIC_BANK if t["title"] not in used_titles]
    if not available:
        # Reset if all topics have been used
        available = TOPIC_BANK
        used_titles = []
    
    topic = random.choice(available)
    
    # Record used topic
    used_titles.append(topic["title"])
    with open(used_topics_file, "w", encoding="utf-8") as f:
        json.dump(used_titles, f, ensure_ascii=False, indent=2)
    
    return topic

def generate_article(client: OpenAI, topic: dict) -> str:
    """Generate the full article using OpenAI."""
    print(f"📝 Generating article: {topic['title']}")
    
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": build_article_prompt(topic)},
        ],
        temperature=0.75,
        max_tokens=3000,
    )
    
    return response.choices[0].message.content

def generate_faq_schema(client: OpenAI, article_content: str) -> str:
    """Generate FAQ Schema JSON-LD from article content."""
    print("🔧 Generating FAQ Schema markup...")
    
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "user", "content": build_faq_schema_prompt(article_content)},
        ],
        temperature=0.2,
        max_tokens=800,
    )
    
    return response.choices[0].message.content.strip()

def extract_meta(article_content: str) -> dict:
    """Extract meta data from article content."""
    meta_match = re.search(r'<!-- META:\s*(\{.*?\})\s*-->', article_content, re.DOTALL)
    if meta_match:
        try:
            return json.loads(meta_match.group(1))
        except json.JSONDecodeError:
            pass
    return {
        "meta_title": "MindPro | פסיכולוגיית ספורט וביצוע בישראל",
        "meta_description": "MindPro — ליווי מנטלי מקצועי לספורטאים, מאמנים וקבוצות בישראל. קליניקה בראש העין ואונליין.",
        "slug": f"article-{datetime.date.today().isoformat()}",
        "reading_time_minutes": 5,
    }

def build_html_article(article_md: str, faq_schema: str, meta: dict, topic: dict, image_alt: str) -> str:
    """Build a complete HTML article with all SEO elements."""
    
    # Convert basic Markdown to HTML (simple conversion)
    html_content = article_md
    # Remove meta comment block
    html_content = re.sub(r'<!-- META:.*?-->', '', html_content, flags=re.DOTALL)
    # Remove image alt comment
    html_content = re.sub(r'<!-- IMAGE_ALT:.*?-->', '', html_content)
    
    today = datetime.date.today().strftime("%d/%m/%Y")
    
    return f"""<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{meta.get('meta_title', topic['title'])}</title>
  <meta name="description" content="{meta.get('meta_description', '')}">
  <meta name="keywords" content="{topic['primary_keyword']}, {', '.join(topic['secondary_keywords'])}">
  <meta name="author" content="MindPro - פסיכולוגיית ספורט וביצוע">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://mindpro.co.il/articles/{meta.get('slug', 'article')}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="{meta.get('meta_title', topic['title'])}">
  <meta property="og:description" content="{meta.get('meta_description', '')}">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="he_IL">
  <meta property="og:site_name" content="MindPro">
  
  <!-- Article Schema -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{topic['title']}",
    "author": {{
      "@type": "Organization",
      "name": "MindPro",
      "url": "https://mindpro.co.il"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "MindPro",
      "logo": {{
        "@type": "ImageObject",
        "url": "https://mindpro.co.il/logo.png"
      }}
    }},
    "datePublished": "{datetime.date.today().isoformat()}",
    "dateModified": "{datetime.date.today().isoformat()}",
    "inLanguage": "he",
    "about": {{
      "@type": "Thing",
      "name": "פסיכולוגיית ספורט"
    }}
  }}
  </script>
  
  <!-- FAQ Schema -->
  <script type="application/ld+json">
  {faq_schema}
  </script>
  
  <style>
    body {{ font-family: 'Assistant', 'Segoe UI', sans-serif; direction: rtl; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8; color: #2c2c2c; }}
    h1 {{ font-size: 2rem; color: #1a1a1a; margin-bottom: 0.5rem; }}
    h2 {{ font-size: 1.4rem; color: #2a3a2a; margin-top: 2rem; border-bottom: 2px solid #c7d9c8; padding-bottom: 0.3rem; }}
    h3 {{ font-size: 1.15rem; color: #3a3a3a; margin-top: 1.5rem; }}
    .meta-info {{ color: #888; font-size: 0.9rem; margin-bottom: 2rem; }}
    .cta-box {{ background: linear-gradient(135deg, #c7d9c8, #e0cfaa); padding: 1.5rem 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; }}
    .cta-box a {{ background: #23251d; color: #f4edde; padding: 0.75rem 2rem; border-radius: 2rem; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 0.75rem; }}
    .article-image {{ width: 100%; border-radius: 1rem; margin: 1.5rem 0; }}
    .faq-section {{ background: #f8f5ef; border-radius: 1rem; padding: 1.5rem 2rem; margin: 2rem 0; }}
    blockquote {{ border-right: 4px solid #c7d9c8; padding-right: 1rem; color: #555; font-style: italic; }}
  </style>
</head>
<body>
  <article>
    <div class="meta-info">
      <span>פורסם: {today}</span> | 
      <span>זמן קריאה: {meta.get('reading_time_minutes', 5)} דקות</span> | 
      <span>קהל יעד: {topic['audience']}</span>
    </div>
    
    <img 
      src="/images/articles/{meta.get('slug', 'article')}.webp" 
      alt="{image_alt}" 
      class="article-image"
      loading="lazy"
      width="800" 
      height="450"
    />
    
    <div class="article-content">
      {html_content}
    </div>
    
    <div class="cta-box">
      <strong>רוצים לדעת אם MindPro מתאים לכם?</strong><br>
      <p>שיחת היכרות קצרה — ללא עלות וללא התחייבות.</p>
      <a href="{BRAND_WHATSAPP}" target="_blank" rel="noopener noreferrer">
        📱 פנייה ב-WhatsApp
      </a>
    </div>
  </article>
</body>
</html>"""

def save_article(article_md: str, html_content: str, meta: dict, topic: dict) -> Path:
    """Save article files to disk."""
    date_str = datetime.date.today().isoformat()
    slug = meta.get("slug", f"article-{date_str}")
    
    # Save Markdown
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
        f.write(article_md)
    
    # Save HTML
    html_path = OUTPUT_DIR / f"{date_str}-{slug}.html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    # Save metadata JSON
    meta_path = OUTPUT_DIR / f"{date_str}-{slug}.json"
    full_meta = {**meta, "topic": topic, "date": date_str, "files": {
        "markdown": str(md_path.name),
        "html": str(html_path.name),
    }}
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(full_meta, f, ensure_ascii=False, indent=2)
    
    return md_path

def sync_to_public():
    """Sync generated articles to client/public/articles for the React app."""
    try:
        from sync_to_public import sync
        sync()
    except Exception as e:
        print(f"⚠️  Sync to public failed: {e}")


def regenerate_sitemap():
    """Regenerate sitemap.xml after new article is published."""
    try:
        from generate_sitemap import save_sitemap
        path = save_sitemap("https://mindpro-ackphuam.manus.space")
        print(f"🗺️  Sitemap updated: {path}")
    except Exception as e:
        print(f"⚠️  Sitemap generation failed: {e}")


def update_articles_index(meta: dict, topic: dict):
    """Update the articles index JSON file."""
    index_path = OUTPUT_DIR / "index.json"
    articles = []
    if index_path.exists():
        with open(index_path, encoding="utf-8") as f:
            articles = json.load(f)
    
    articles.insert(0, {
        "date": datetime.date.today().isoformat(),
        "title": topic["title"],
        "slug": meta.get("slug"),
        "meta_description": meta.get("meta_description"),
        "primary_keyword": topic["primary_keyword"],
        "audience": topic["audience"],
        "reading_time": meta.get("reading_time_minutes", 5),
    })
    
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)

# ─── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="MindPro SEO Article Machine")
    parser.add_argument("--topic", type=str, help="Custom article topic (Hebrew)")
    parser.add_argument("--sample", action="store_true", help="Generate a sample article")
    args = parser.parse_args()
    
    print("🚀 MindPro SEO Article Machine — Starting...")
    print(f"📅 Date: {datetime.date.today().isoformat()}")
    
    client = get_client()
    topic = select_topic(args.topic)
    
    print(f"📌 Topic selected: {topic['title']}")
    print(f"🎯 Primary keyword: {topic['primary_keyword']}")
    print(f"👥 Target audience: {topic['audience']}")
    
    # Step 1: Generate article
    article_md = generate_article(client, topic)
    
    # Step 2: Extract image alt text
    image_alt_match = re.search(r'<!-- IMAGE_ALT:\s*(.*?)\s*-->', article_md)
    image_alt = image_alt_match.group(1) if image_alt_match else f"פסיכולוגיית ספורט - {topic['primary_keyword']}"
    
    # Step 3: Generate FAQ Schema
    faq_schema = generate_faq_schema(client, article_md)
    
    # Step 4: Extract meta data
    meta = extract_meta(article_md)
    print(f"🔖 Meta title: {meta.get('meta_title')}")
    print(f"🔗 Slug: {meta.get('slug')}")
    
    # Step 5: Build HTML
    html_content = build_html_article(article_md, faq_schema, meta, topic, image_alt)
    
    # Step 6: Save files
    saved_path = save_article(article_md, html_content, meta, topic)
    update_articles_index(meta, topic)
    sync_to_public()
    regenerate_sitemap()
    
    print(f"\n✅ Article generated successfully!")
    print(f"📄 Markdown: {saved_path}")
    print(f"🌐 HTML: {saved_path.with_suffix('.html')}")
    print(f"📊 Meta: {saved_path.with_suffix('.json')}")
    print(f"\n📋 Article Index updated: {OUTPUT_DIR / 'index.json'}")
    
    return str(saved_path)

if __name__ == "__main__":
    main()
