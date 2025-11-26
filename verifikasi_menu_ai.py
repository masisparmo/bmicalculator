
import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Load the local HTML file
        file_path = os.path.abspath('index.html')
        await page.goto(f'file://{file_path}')

        print("1. Mengisi form dan menghitung BMI...")
        # Fill the form to get a result
        await page.locator('input[name="gender"][value="male"]').check()
        await page.locator('#age').fill('30')
        await page.locator('#weight').fill('70')
        await page.locator('#height').fill('175')
        await page.locator('#waist').fill('85')
        await page.locator('button[onclick="calculateBMI()"]').click()

        # Wait for results to be visible
        await expect(page.locator('#resultArea')).to_be_visible()
        print("   - Perhitungan BMI berhasil.")

        print("2. Membuka laporan lengkap...")
        # Open the report modal
        await page.locator('button[onclick="generateReport()"]').click()
        await expect(page.locator('#reportModal')).to_be_visible()
        print("   - Laporan berhasil dibuka.")

        # Set a dummy API key in localStorage
        await page.evaluate("localStorage.setItem('geminiApiKey', 'DUMMY_API_KEY_FOR_TESTING')")
        print("3. Menyimpan dummy API key ke localStorage.")

        print("4. Mengklik tombol 'Re-generate AI'...")
        # Click the AI regenerate button
        regenerate_button = page.locator('#regenerateAiBtn')
        await regenerate_button.click()

        print("5. Memverifikasi indikator loading muncul...")
        # VERIFY LOADING INDICATOR IS VISIBLE
        loading_indicator = page.locator('#menuLoading')
        await expect(loading_indicator).to_be_visible(timeout=5000)
        print("   - BERHASIL: Indikator loading terlihat.")

        # Wait for the loading to disappear (simulates API call finishing)
        # In a real test, you'd mock the API and wait for the result.
        # Here, we just wait for it to hide again.
        print("6. Menunggu indikator loading menghilang...")
        await expect(loading_indicator).to_be_hidden(timeout=15000)
        print("   - BERHASIL: Indikator loading hilang.")

        print("7. Mengambil screenshot hasil akhir...")
        await page.screenshot(path='verification_screenshot.png')
        print("   - Screenshot 'verification_screenshot.png' berhasil diambil.")

        await browser.close()
        print("\n✅ Verifikasi Selesai dan Berhasil!")

if __name__ == '__main__':
    asyncio.run(main())
