"""Crop & kompres foto talent KAHA FEST dari Google Drive untuk embed base64.

Guest  : band horizontal 2:1 (1000x500) - untuk kartu Guest Star
Lokal  : kotak 1:1 (400x400) wajah di tengah - untuk avatar Local Heroes
Output : scripts/talent_b64.json (key -> data URI)
"""
import base64
import io
import json
from pathlib import Path

from PIL import Image

RAW = Path("/tmp/talent_raw")
OUT_JSON = Path("/home/z/my-project/scripts/talent_b64.json")

# key: (file, mode, y_offset_fraction)  -> offset atas crop sebagai fraksi tinggi
GUEST = {
    "T_YOUNGLEX": ("younglex_38.img", 0.04),
    "T_BADAI":    ("badai_2025.img", 0.15),
    "T_ECKO":     ("ecko_myb.img", 0.14),
    "T_CHERRY":   ("cherry_1.img", 0.20),
}
AVATAR = {
    "T_ADELIA":  ("adelia.img", 0.06),
    "T_RANDA":   ("randa.img", 0.06),
    "T_SAYUTI":  ("sayuti.img", 0.09),
    "T_YESSA":   ("yessaxhara.img", 0.16),
    "T_INNOISE": ("innoise_8879.img", 0.0),
}


def to_jpeg(im: Image.Image, size, quality=80) -> bytes:
    im = im.convert("RGB").resize(size, Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    return buf.getvalue()


result = {}
for key, (fname, off) in GUEST.items():
    im = Image.open(RAW / fname)
    w, h = im.size
    band_h = int(w / 2.0)              # aspek 2:1
    top = min(int(h * off), h - band_h)
    band = im.crop((0, top, w, top + band_h))
    data = to_jpeg(band, (1000, 500))
    result[key] = "data:image/jpeg;base64," + base64.b64encode(data).decode()
    print(f"{key}: guest band {band.size} -> 1000x500, {len(data)//1024} KB")

for key, (fname, off) in AVATAR.items():
    im = Image.open(RAW / fname)
    w, h = im.size
    side = min(w, h)
    if w > h:
        left = (w - side) // 2
        box = (left, 0, left + side, side)
    else:
        top = min(int(h * off), h - side)
        box = (0, top, side, top + side)
    sq = im.crop(box)
    data = to_jpeg(sq, (400, 400))
    result[key] = "data:image/jpeg;base64," + base64.b64encode(data).decode()
    print(f"{key}: avatar {sq.size} -> 400x400, {len(data)//1024} KB")

OUT_JSON.write_text(json.dumps(result, indent=1))
total = sum(len(v) for v in result.values()) / 1024
print(f"Total base64: {total:.0f} KB -> {OUT_JSON}")

# lembar verifikasi hasil crop
from PIL import ImageDraw, ImageFont
sheet = Image.new("RGB", (5 * 360, 2 * 394), "#111")
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 20)
for i, (key, uri) in enumerate(result.items()):
    im = Image.open(io.BytesIO(base64.b64decode(uri.split(",")[1])))
    im = im.resize((360, 360))
    x, y = (i % 5) * 360, (i // 5) * 394
    sheet.paste(im, (x, y))
    ImageDraw.Draw(sheet).text((x + 8, y + 362), key, fill="#d9ff3d", font=font)
sheet.save(RAW / "crop_check.jpg", quality=82)
print("crop check:", RAW / "crop_check.jpg")
