
from playwright.sync_api import sync_playwright
import os

def verify_chat(page):
    print("Navigating...")
    page.goto("file:///app/index.html")

    # 2. Mock fetch safely
    page.evaluate("""
        window.originalFetch = window.fetch;
        window.fetch = async (input, init) => {
            let url = "";
            if (typeof input === 'string') {
                url = input;
            } else if (input && typeof input === 'object') {
                try {
                    url = input.url || input.toString();
                } catch(e) { url = ""; }
            }

            // Check if it's the Gemini call
            if (url && url.includes('gemini')) {
                console.log("Mocking Gemini response");
                return {
                    ok: true,
                    json: async () => ({
                        candidates: [{
                            content: {
                                parts: [{ text: "```html\\n<ul><li>Item 1</li><li>Item 2</li></ul>\\n```" }]
                            }
                        }]
                    })
                };
            }

            // Fallback: Try original, but catch error
            try {
                return await window.originalFetch(input, init);
            } catch (e) {
                // console.warn("Fetch failed for:", url);
                return {
                     ok: false,
                     status: 404,
                     json: async () => ({})
                };
            }
        };
    """)

    # 3. Setup Key and Open Chat
    print("Setting key and clicking...")
    page.evaluate("localStorage.setItem('geminiApiKey', 'TEST_KEY')")
    page.click('#expertBtn')

    # 4. Type and Send
    print("Sending message...")
    page.fill('#chatInput', 'Test Message')
    page.click('#sendBtn')

    # 5. Wait for response
    print("Waiting for response...")
    try:
        page.wait_for_selector('text=Item 1', timeout=5000)
        print("Found 'Item 1'!")
    except:
        print("Timeout waiting for 'Item 1'")

    # 6. Screenshot
    output_path = "verification/verify_chat_clean.png"
    print(f"Taking screenshot to {output_path}...")
    page.screenshot(path=output_path)
    print("Done.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify_chat(page)
        browser.close()
