import os
import fitz  # PyMuPDF
from playwright.sync_api import sync_playwright

def render_pdf_to_images(pdf_path, output_folder="pdf_renders"):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    doc = fitz.open(pdf_path)
    image_paths = []
    for i, page in enumerate(doc):
        pix = page.get_pixmap()
        image_path = os.path.join(output_folder, f"page_{i + 1}.png")
        pix.save(image_path)
        image_paths.append(image_path)
    doc.close()
    return image_paths

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Fill form to generate a multi-page report
        page.check('input[value="male"]')
        page.fill('#age', '45')
        page.fill('#weight', '95') # Heavier weight to generate more content
        page.fill('#height', '175')
        page.select_option('#activity', '1.55')

        page.click('button[onclick="calculateBMI()"]')
        page.click('button[onclick="generateReport()"]')

        try:
            page.wait_for_selector('#reportModal:not(.hidden)', timeout=5000)
            print("SUCCESS: Report modal is visible.")
        except Exception as e:
            print(f"FAIL: Report modal did not open. {e}")
            browser.close()
            return

        # Download the PDF
        download_path = os.path.join(os.getcwd(), "test_report.pdf")
        if os.path.exists(download_path):
            os.remove(download_path)

        with page.expect_download() as download_info:
            page.click('#btnPdf')

        download = download_info.value
        download.save_as(download_path)

        if os.path.exists(download_path):
            print(f"SUCCESS: PDF downloaded to {download_path}")
        else:
            print("FAIL: PDF file was not created.")
            browser.close()
            return

        browser.close()

    # Render PDF to images for visual verification
    print("Rendering PDF pages to images...")
    image_files = render_pdf_to_images(download_path)
    if image_files:
        print(f"SUCCESS: Rendered {len(image_files)} pages to PNGs in 'pdf_renders' folder.")
        for img_path in image_files:
            print(f"- {img_path}")
    else:
        print("FAIL: Could not render PDF to images.")

if __name__ == "__main__":
    run()
