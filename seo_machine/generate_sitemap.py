#!/usr/bin/env python3
"""
MindPro SEO Machine — Dynamic Sitemap Generator
==================================================
Generates a sitemap.xml from the articles index and static pages.
Called automatically after each article is generated, and also
available for manual execution.

The sitemap is written to client/public/sitemap.xml so it is
served at https://mindpro.co.il/sitemap.xml (or whatever the
production domain is).

Usage:
    python3 generate_sitemap.py
    python3 generate_sitemap.py --base-url https://mindpro.co.il
"""

import json
import argparse
from datetime import datetime, timezone
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, ElementTree, indent

SCRIPT_DIR = Path(__file__).parent.resolve()
REPO_ROOT = SCRIPT_DIR.parent
ARTICLES_INDEX = SCRIPT_DIR / "articles" / "index.json"
OUTPUT_PATH = REPO_ROOT / "client" / "public" / "sitemap.xml"

DEFAULT_BASE_URL = "https://mindpro-ackphuam.manus.space"

# Static pages with their change frequency and priority
STATIC_PAGES = [
    {"loc": "/", "changefreq": "weekly", "priority": "1.0"},
    {"loc": "/articles", "changefreq": "daily", "priority": "0.9"},
]


def load_articles() -> list[dict]:
    """Load articles from the index JSON file."""
    if not ARTICLES_INDEX.exists():
        return []
    with open(ARTICLES_INDEX, "r", encoding="utf-8") as f:
        return json.load(f)


def generate_sitemap(base_url: str) -> str:
    """Generate sitemap XML content."""
    base_url = base_url.rstrip("/")
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    # Create XML structure
    urlset = Element("urlset")
    urlset.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
    urlset.set("xmlns:xhtml", "http://www.w3.org/1999/xhtml")

    # Add static pages
    for page in STATIC_PAGES:
        url_el = SubElement(urlset, "url")
        loc = SubElement(url_el, "loc")
        loc.text = f"{base_url}{page['loc']}"
        lastmod = SubElement(url_el, "lastmod")
        lastmod.text = today
        changefreq = SubElement(url_el, "changefreq")
        changefreq.text = page["changefreq"]
        priority = SubElement(url_el, "priority")
        priority.text = page["priority"]

    # Add article pages
    articles = load_articles()
    for article in articles:
        url_el = SubElement(urlset, "url")
        loc = SubElement(url_el, "loc")
        loc.text = f"{base_url}/articles/{article['slug']}"
        lastmod = SubElement(url_el, "lastmod")
        lastmod.text = article.get("date", today)
        changefreq = SubElement(url_el, "changefreq")
        changefreq.text = "monthly"
        priority = SubElement(url_el, "priority")
        priority.text = "0.8"

    # Format and return
    indent(urlset, space="  ")
    tree = ElementTree(urlset)

    # Write to string with XML declaration
    import io
    output = io.BytesIO()
    tree.write(output, encoding="utf-8", xml_declaration=True)
    return output.getvalue().decode("utf-8")


def save_sitemap(base_url: str) -> Path:
    """Generate and save sitemap.xml to client/public/."""
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    xml_content = generate_sitemap(base_url)
    OUTPUT_PATH.write_text(xml_content, encoding="utf-8")
    return OUTPUT_PATH


def main():
    parser = argparse.ArgumentParser(description="Generate sitemap.xml for MindPro")
    parser.add_argument(
        "--base-url",
        default=DEFAULT_BASE_URL,
        help=f"Base URL of the site (default: {DEFAULT_BASE_URL})",
    )
    args = parser.parse_args()

    path = save_sitemap(args.base_url)
    articles = load_articles()

    print(f"✅ Sitemap generated: {path}")
    print(f"📄 Static pages: {len(STATIC_PAGES)}")
    print(f"📝 Article pages: {len(articles)}")
    print(f"📊 Total URLs: {len(STATIC_PAGES) + len(articles)}")


if __name__ == "__main__":
    main()
