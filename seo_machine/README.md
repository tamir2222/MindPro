# MindPro SEO Article Machine 🚀

מכונת תוכן אוטומטית שמייצרת מאמרי SEO בעברית מדי לילה, מותאמים לקהל הישראלי בתחום פסיכולוגיית הספורט והביצוע.

## מה המכונה עושה?

1. **בוחרת נושא** מתוך מאגר נושאים ממוקדי SEO (12+ נושאים מוכנים)
2. **מייצרת מאמר** בעברית טבעית ומקצועית באמצעות OpenAI GPT
3. **מוסיפה סכמת FAQ** (JSON-LD) לתוצאות עשירות בגוגל
4. **בונה קובץ HTML** מלא עם כל תגיות ה-SEO (meta, canonical, OG, Schema)
5. **שומרת קבצים** בפורמט Markdown + HTML + JSON
6. **מעדכנת אינדקס** של כל המאמרים

## מבנה הקבצים

```
seo_machine/
├── generate_article.py   # הסקריפט הראשי
├── scheduler.py          # ניהול הרצה אוטומטית (Cron)
├── README.md             # מסמך זה
├── articles/             # מאמרים שנוצרו
│   ├── index.json        # אינדקס כל המאמרים
│   ├── YYYY-MM-DD-slug.md
│   ├── YYYY-MM-DD-slug.html
│   └── YYYY-MM-DD-slug.json
└── logs/
    └── seo_machine.log   # לוג הרצות
```

## התקנה והפעלה

### דרישות מוקדמות
```bash
pip install openai
export OPENAI_API_KEY="your-key-here"
```

### הרצה ידנית
```bash
# יצירת מאמר עם נושא אקראי מהמאגר
python3 generate_article.py

# יצירת מאמר עם נושא מותאם אישית
python3 generate_article.py --topic "חרדת ביצוע בכדורגל"
```

### הגדרת הרצה אוטומטית לילית
```bash
# התקנת Cron Job (כל לילה בשעה 02:00)
python3 scheduler.py --install

# בדיקת סטטוס
python3 scheduler.py --status

# הסרת Cron Job
python3 scheduler.py --remove

# הרצה מיידית לבדיקה
python3 scheduler.py --run-now
```

## מבנה המאמר שנוצר

כל מאמר כולל:
- **H1** עם מילת המפתח הראשית
- **5+ פסקאות H2** עם תוכן מקצועי (900-1200 מילים)
- **FAQ** עם 4 שאלות ותשובות + סכמת JSON-LD
- **CTA** עם קישור לוואטסאפ של MindPro
- **Meta Tags**: title, description, keywords, canonical, OG
- **Schema.org**: Article + FAQPage
- **תגיות alt** לתמונות

## מאגר הנושאים

| נושא | מילת מפתח ראשית | קהל יעד |
|------|-----------------|---------|
| חרדת ביצוע בספורט | חרדת ביצוע בספורט | ספורטאים |
| ביטחון עצמי לספורטאים | ביטחון עצמי לספורטאים | ספורטאים ומאמנים |
| אימון מנטלי לספורטאים | אימון מנטלי לספורטאים | ספורטאים ומאמנים |
| ספורטאים צעירים וכישלון | ספורטאים צעירים כישלון | הורים |
| שחיקה בספורט | שחיקה בספורט | ספורטאים ומאמנים |
| ריכוז בספורט | ריכוז בספורט | ספורטאים |
| תקשורת מאמן-ספורטאי | תקשורת מאמן ספורטאי | מאמנים |
| חזרה לספורט אחרי פציעה | חזרה לספורט אחרי פציעה | ספורטאים |
| מהי פסיכולוגיית ספורט | פסיכולוגיית ספורט | כלל הקהל |
| שגרות מנטליות לפני תחרות | שגרות מנטליות לפני תחרות | ספורטאים עילית |
| ביצוע תחת לחץ | ביצוע תחת לחץ | ספורטאים ואנשי ביצוע |
| פסיכולוג ספורט ראש העין | פסיכולוג ספורט ראש העין | Local SEO |

## אינטגרציה עם האתר

כדי לשלב את המאמרים באתר MindPro, יש להוסיף:
1. עמוד בלוג (`/articles`) שמציג את `index.json`
2. עמוד מאמר דינמי (`/articles/:slug`) שמציג את קובץ ה-HTML
3. Sitemap אוטומטי שמתעדכן עם כל מאמר חדש

## SEO Best Practices שמיושמות

- ✅ Hebrew RTL content
- ✅ Schema.org Article + FAQPage
- ✅ Meta title & description
- ✅ Canonical URL
- ✅ Open Graph tags
- ✅ Long-tail Hebrew keywords
- ✅ Internal linking to WhatsApp CTA
- ✅ Image alt text in Hebrew
- ✅ Reading time metadata
- ✅ Mobile-friendly HTML structure
- ✅ Nightly fresh content (Google loves fresh content)
