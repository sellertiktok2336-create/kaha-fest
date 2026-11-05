"""Kompres gambar KAHA FEST menjadi data URI base64 (WebP) untuk HTML standalone."""
import base64
import io
import json
from pathlib import Path

from PIL import Image

PUB = Path("/home/z/my-project/public")
OUT = Path("/home/z/my-project/scripts/assets_b64.json")


def to_webp(path: Path, max_w: int, quality: int, keep_alpha: bool = True) -> tuple[str, int]:
    img = Image.open(path)
    print(f"{path.name}: {img.size} mode={img.mode}", end=" -> ")
    if img.width > max_w:
        h = round(img.height * max_w / img.width)
        img = img.resize((max_w, h), Image.LANCZOS)
    has_alpha = False
    if keep_alpha:
        if img.mode in ("RGBA", "LA"):
            has_alpha = True
        elif img.mode == "P" and "transparency" in img.info:
            has_alpha = True
    if has_alpha:
        img = img.convert("RGBA")
    else:
        img = img.convert("RGB")
    buf = io.BytesIO()
    img.save(buf, "WEBP", quality=quality, method=6)
    data = buf.getvalue()
    uri = "data:image/webp;base64," + base64.b64encode(data).decode()
    print(f"{img.size} {len(data) / 1024:.0f} KB")
    return uri, len(data)


def to_png_small(path: Path, size: int = 64) -> str:
    img = Image.open(path).convert("RGBA")
    img.thumbnail((size, size), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, "PNG", optimize=True)
    print(f"favicon: {img.size} {len(buf.getvalue()) / 1024:.1f} KB")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()


assets: dict[str, str] = {}
assets["LOGO"], _ = to_webp(PUB / "kaha-fest-logo.png", 640, 88)
assets["FAVICON"] = to_png_small(PUB / "kaha-fest-logo.png", 64)
assets["HERO_BG"], _ = to_webp(PUB / "images/hero-bg.png", 1344, 76)
assets["G_DJ"], _ = to_webp(PUB / "images/gallery-dj.png", 900, 78)
assets["G_CROWD"], _ = to_webp(PUB / "images/gallery-crowd.png", 900, 78)
assets["G_CHROME"], _ = to_webp(PUB / "images/gallery-chrome.png", 900, 78)
assets["G_BORNEO"], _ = to_webp(PUB / "images/gallery-borneo.png", 900, 78)

OUT.write_text(json.dumps(assets))
total = sum(len(v) for v in assets.values())
print(f"\nTotal base64: {total / 1024:.0f} KB -> {OUT}")
