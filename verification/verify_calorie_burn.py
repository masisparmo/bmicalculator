from playwright.sync_api import sync_playwright, expect
import time

def verify_calorie_burn():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Load the page
        page.goto("http://localhost:8000/index.html")

        # 1. Fill BMI Data first (required for BMR)
        page.fill('#age', '30')
        page.fill('#weight', '70')
        page.fill('#height', '175')
        # Use simple click for radio if label check fails
        page.click('input[name="gender"][value="male"]')
        page.select_option('#activity', '1.55') # Moderate

        page.click('button[onclick="calculateBMI()"]')

        # Wait for BMI result to ensure BMR is calculated
        expect(page.locator('#bmiValue')).to_be_visible()

        # 2. Scroll to Calorie Burn Section
        burn_section = page.locator('h3[data-i18n="burn_title"]')
        burn_section.scroll_into_view_if_needed()
        expect(burn_section).to_be_visible()

        # 3. Test Standard Sport
        # Select "Ping Pong (Kompetitif)" -> value "7.0"
        page.select_option('#sportType', '7.0')
        page.fill('#burnDuration', '60') # 1 hour

        page.click('button[onclick="calculateBurn()"]')

        # Verify result visibility
        result_div = page.locator('#burnResult')
        expect(result_div).to_be_visible()

        # Check calculation
        # BMR for Male 30y, 70kg, 175cm = 10*70 + 6.25*175 - 5*30 + 5 = 700 + 1093.75 - 150 + 5 = 1648.75
        # Hourly BMR = 1648.75 / 24 ~= 68.7
        # Burn = MET * HourlyBMR * DurationHours
        # Burn = 7.0 * 68.7 * 1.0 = 480.9 -> Round to 481
        # Let's check if the text contains a number near 481

        # Take screenshot of Standard Result
        page.screenshot(path="verification/burn_standard.png")
        print("Standard burn test screenshot taken.")

        # 4. Test Custom Sport
        page.select_option('#sportType', 'custom')

        # Verify custom inputs appear
        custom_container = page.locator('#customMetContainer')
        expect(custom_container).to_be_visible()

        page.fill('#customSportName', 'Yoga Extreme')
        page.fill('#customMetValue', '3.5')
        page.fill('#burnDuration', '30') # 0.5 hours

        page.click('button[onclick="calculateBurn()"]')

        # Take screenshot of Custom Result
        page.screenshot(path="verification/burn_custom.png")
        print("Custom burn test screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_calorie_burn()
