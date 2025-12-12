from playwright.sync_api import sync_playwright

def verify_redirect():
    base_url = "http://localhost:8081"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print(f"Navigating to root: {base_url}")
        page.goto(base_url)

        # Check if URL redirected to dist/index.html
        current_url = page.url
        print(f"Current URL: {current_url}")

        if "/dist/index.html" in current_url:
            print("Redirect successful!")
        else:
            print("Redirect FAILED or not finished.")
            # Verify meta refresh
            content = page.content()
            if 'http-equiv="refresh"' in content and 'url=dist/index.html' in content:
                 print("Meta refresh tag present.")
            else:
                 print("Meta refresh tag MISSING.")
                 exit(1)

        # Verify page content loads
        page.wait_for_load_state("networkidle")
        title = page.title()
        print(f"Final Page Title: {title}")
        assert "BMI Calculator" in title

        browser.close()

if __name__ == "__main__":
    verify_redirect()
