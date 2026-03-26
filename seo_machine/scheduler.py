#!/usr/bin/env python3
"""
MindPro SEO Machine — Nightly Scheduler
=========================================
This script sets up a nightly cron job to automatically generate
and publish a new SEO article every night at 02:00 AM Israel time.

Usage:
    python3 scheduler.py --install    # Install the cron job
    python3 scheduler.py --remove     # Remove the cron job
    python3 scheduler.py --status     # Check cron job status
    python3 scheduler.py --run-now    # Run immediately (for testing)
"""

import os
import sys
import subprocess
import argparse
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent.resolve()
GENERATE_SCRIPT = SCRIPT_DIR / "generate_article.py"
LOG_FILE = SCRIPT_DIR / "logs" / "seo_machine.log"
CRON_COMMENT = "# MindPro SEO Article Machine"

def get_cron_line() -> str:
    """Return the cron job line for nightly execution at 02:00 AM Israel time."""
    python_path = sys.executable
    log_dir = LOG_FILE.parent
    log_dir.mkdir(exist_ok=True)
    
    # 02:00 AM Israel time (UTC+2/UTC+3 depending on DST)
    # Using 00:00 UTC which is 02:00 Israel Standard Time
    return (
        f"0 0 * * * {python_path} {GENERATE_SCRIPT} >> {LOG_FILE} 2>&1 "
        f"{CRON_COMMENT}"
    )

def install_cron():
    """Install the nightly cron job."""
    cron_line = get_cron_line()
    
    # Get current crontab
    result = subprocess.run(["crontab", "-l"], capture_output=True, text=True)
    current_cron = result.stdout if result.returncode == 0 else ""
    
    # Check if already installed
    if CRON_COMMENT in current_cron:
        print("⚠️  Cron job already installed. Use --remove first to reinstall.")
        return
    
    # Add new cron job
    new_cron = current_cron.rstrip() + f"\n{cron_line}\n"
    
    proc = subprocess.run(
        ["crontab", "-"],
        input=new_cron,
        text=True,
        capture_output=True
    )
    
    if proc.returncode == 0:
        print("✅ Cron job installed successfully!")
        print(f"📅 Schedule: Every night at 02:00 AM Israel time")
        print(f"📝 Cron line: {cron_line}")
        print(f"📋 Log file: {LOG_FILE}")
    else:
        print(f"❌ Failed to install cron job: {proc.stderr}")

def remove_cron():
    """Remove the MindPro cron job."""
    result = subprocess.run(["crontab", "-l"], capture_output=True, text=True)
    if result.returncode != 0:
        print("No crontab found.")
        return
    
    lines = result.stdout.splitlines()
    new_lines = [l for l in lines if CRON_COMMENT not in l and "generate_article.py" not in l]
    
    new_cron = "\n".join(new_lines) + "\n"
    proc = subprocess.run(["crontab", "-"], input=new_cron, text=True, capture_output=True)
    
    if proc.returncode == 0:
        print("✅ Cron job removed successfully.")
    else:
        print(f"❌ Failed to remove cron job: {proc.stderr}")

def check_status():
    """Check if the cron job is installed."""
    result = subprocess.run(["crontab", "-l"], capture_output=True, text=True)
    if result.returncode != 0 or CRON_COMMENT not in result.stdout:
        print("❌ MindPro SEO Machine cron job is NOT installed.")
        print("   Run: python3 scheduler.py --install")
    else:
        print("✅ MindPro SEO Machine cron job is ACTIVE.")
        for line in result.stdout.splitlines():
            if CRON_COMMENT in line or "generate_article.py" in line:
                print(f"   {line}")
    
    # Show recent logs
    if LOG_FILE.exists():
        print(f"\n📋 Recent log entries ({LOG_FILE}):")
        with open(LOG_FILE) as f:
            lines = f.readlines()
            for line in lines[-20:]:
                print(f"   {line.rstrip()}")

def run_now():
    """Run the article generator immediately."""
    print("🚀 Running article generator now...")
    result = subprocess.run(
        [sys.executable, str(GENERATE_SCRIPT)],
        capture_output=False
    )
    sys.exit(result.returncode)

def main():
    parser = argparse.ArgumentParser(description="MindPro SEO Machine Scheduler")
    parser.add_argument("--install", action="store_true", help="Install nightly cron job")
    parser.add_argument("--remove", action="store_true", help="Remove cron job")
    parser.add_argument("--status", action="store_true", help="Check cron job status")
    parser.add_argument("--run-now", action="store_true", help="Run immediately")
    
    args = parser.parse_args()
    
    if args.install:
        install_cron()
    elif args.remove:
        remove_cron()
    elif args.status:
        check_status()
    elif args.run_now:
        run_now()
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
