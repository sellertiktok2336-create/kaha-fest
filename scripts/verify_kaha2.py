"""Screenshot halaman KAHA FEST untuk verifikasi visual lineup baru."""
import asyncio
from pathlib import Path

from playwright.async_api import async_playwright

OUT = Path("/home/z/my-project/scripts")
URL = "file:///home/z/my-project/download/kaha-fest-website.html"


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Desktop
        page = await browser.new_page(viewport={"width": 1440, "height": 960})
        await page.goto(URL)
        await page.wait_for_timeout(1200)
        await page.screenshot(path=OUT / "verify2-lineup-desktop.png", full_page=False)
        await page.locator("#lineup").scroll_into_view_if_needed()
        await page.wait_for_timeout(600)
        await page.locator("#lineup").screenshot(path=OUT / "verify2-lineup-section.png")
        await page.locator("#rundown").screenshot(path=OUT / "verify2-rundown-section.png")
        await page.locator("#tentang").screenshot(path=OUT / "verify2-tentang-section.png")

        # Mobile
        mp = await browser.new_page(viewport={"width": 390, "height": 844})
        await mp.goto(URL)
        await mp.wait_for_timeout(1000)
        await mp.locator("#lineup").scroll_into_view_if_needed()
        await mp.wait_for_timeout(600)
        await mp.locator("#lineup").screenshot(path=OUT / "verify2-lineup-mobile.png")
        await mp.locator("#rundown").screenshot(path=OUT / "verify2-rundown-mobile.png")

        await browser.close()
        print("screenshots done")


asyncio.run(main())
