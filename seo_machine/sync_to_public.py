#!/usr/bin/env python3
"""
MindPro SEO Machine — Sync to Public
======================================
Copies newly generated article files from seo_machine/articles/
into client/public/articles/ so they are served by the React app.

This script is called automatically by generate_article.py after
each article is generated. It can also be run manually.

Usage:
    python3 sync_to_public.py
"""

import shutil
import json
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent.resolve()
REPO_ROOT = SCRIPT_DIR.parent
SOURCE_DIR = SCRIPT_DIR / "articles"
TARGET_DIR = REPO_ROOT / "client" / "public" / "articles"

TARGET_DIR.mkdir(parents=True, exist_ok=True)

COPY_EXTENSIONS = {".md", ".webp", ".jpg", ".jpeg", ".png", ".json"}


def sync():
    synced = []

    for src_file in SOURCE_DIR.iterdir():
        if src_file.suffix not in COPY_EXTENSIONS:
            continue
        if src_file.name == "used_topics.json":
            continue

        dest_file = TARGET_DIR / src_file.name
        # Always overwrite index.json; only copy new article files
        if src_file.name == "index.json" or not dest_file.exists():
            shutil.copy2(src_file, dest_file)
            synced.append(src_file.name)

    if synced:
        print(f"✅ Synced {len(synced)} file(s) to client/public/articles:")
        for f in synced:
            print(f"   - {f}")
    else:
        print("ℹ️  No new files to sync.")

    return synced


if __name__ == "__main__":
    sync()
