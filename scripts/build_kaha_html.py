"""Gabungkan template KAHA FEST + base64 gambar menjadi satu file HTML standalone."""
import json
import re
from pathlib import Path

SCRIPTS = Path("/home/z/my-project/scripts")
OUT = Path("/home/z/my-project/download/kaha-fest-website.html")

assets = json.loads((SCRIPTS / "assets_b64.json").read_text())
assets.update(json.loads((SCRIPTS / "talent_b64.json").read_text()))

parts = ["kaha_part1_head.html", "kaha_part2_body.html", "kaha_part3_script.html"]
html = "".join((SCRIPTS / p).read_text() for p in parts)

for key, uri in assets.items():
    html = html.replace("{{" + key + "}}", uri)

leftover = re.findall(r"\{\{[A-Z_]+\}\}", html)
OUT.write_text(html)

size_kb = OUT.stat().st_size / 1024
print(f"File  : {OUT}")
print(f"Ukuran: {size_kb:.0f} KB")
print(f"Sisa placeholder: {leftover if leftover else 'tidak ada (semua gambar tertanam)'}")

# Sanity check: tidak boleh ada tanda em/en dash di teks yang tampil
bad = [ln.strip()[:90] for ln in html.splitlines() if ("\u2014" in ln or "\u2013" in ln)]
print(f"Baris dengan em/en dash: {len(bad)}")
for b in bad:
    print("  >", b)
