from playwright.sync_api import sync_playwright
import os

def verify_site_http():
    base_url = "http://localhost:8080"
    index_url = f"{base_url}/index.html"
    total_url = f"{base_url}/totalkalori.html"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Verify Index
        page = browser.new_page()
        print(f"Navigating to {index_url}")
        page.goto(index_url)
        page.wait_for_load_state("networkidle")

        # Check title
        title = page.title()
        print(f"Index Title: {title}")
        assert "BMI Calculator" in title

        # Check if window.calculateBMI is defined
        is_calc_defined = page.evaluate("typeof window.calculateBMI !== 'undefined'")
        print(f"Index: calculateBMI defined? {is_calc_defined}")

        page.screenshot(path="verification/verify_index_http.png")

        # Verify Total Kalori
        page_total = browser.new_page()
        print(f"Navigating to {total_url}")
        page_total.goto(total_url)
        page_total.wait_for_load_state("networkidle")

        title_total = page_total.title()
        print(f"Total Title: {title_total}")
        assert "Total Kalori" in title_total

        # Check dbOps defined
        is_dbops_defined = page_total.evaluate("typeof window.dbOps !== 'undefined'")
        print(f"Total: dbOps defined? {is_dbops_defined}")

        page_total.screenshot(path="verification/verify_total_http.png")

        browser.close()

if __name__ == "__main__":
    try:
        verify_site_http()
        print("Verification successful")
    except Exception as e:
        print(f"Verification failed: {e}")
        exit(1)
