"""Verifikasi versi terbaru: foto talent termuat + semua tombol tiket ke WhatsApp."""
import asyncio
from pathlib import Path

from playwright.async_api import async_playwright

OUT = Path("/home/z/my-project/scripts")
URL = "file:///home/z/my-project/download/kaha-fest-website.html"


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 960})
        await page.goto(URL)
        await page.wait_for_timeout(1500)

        imgs = await page.evaluate(
            """() => [...document.querySelectorAll('img')].map(i => ({
                alt: i.alt, ok: i.complete && i.naturalWidth > 0,
                data: i.src.startsWith('data:image'),
            }))"""
        )
        gagal = [i for i in imgs if not i["ok"]]
        print(f"Total <img>: {len(imgs)} | base64: {sum(1 for i in imgs if i['data'])} | gagal load: {len(gagal)}")
        for i in gagal:
            print("  GAGAL:", i["alt"])

        hrefs = await page.evaluate(
            """() => [...document.querySelectorAll('a[data-wa]')].map(a => ({
                text: a.innerText.trim().replace(/\\s+/g,' ').slice(0,40),
                href: a.getAttribute('href'),
            }))"""
        )
        print(f"Tombol tiket (data-wa): {len(hrefs)}")
        for h in hrefs:
            print("  ", h["text"], "->", h["href"][:80])

        await page.locator("#lineup").scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await page.locator("#lineup").screenshot(path=OUT / "verify3-lineup.png")
        await page.locator("#tiket").scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await page.locator("#tiket").screenshot(path=OUT / "verify3-tiket.png")
        await browser.close()
        print("screenshots done")


asyncio.run(main())
