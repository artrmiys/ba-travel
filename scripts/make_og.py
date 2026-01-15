from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
bg = (12, 14, 11)         # почти чёрный
accent = (167, 226, 110)  # #a7e26e
muted = (201, 203, 190)   # #c9cbbe

img = Image.new("RGB", (W, H), bg)
d = ImageDraw.Draw(img)

# попытка взять системный шрифт; если не найдёт — будет базовый
def font(size):
  for p in [
    "C:/Windows/Fonts/segoeuib.ttf",
    "C:/Windows/Fonts/seguiemj.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/arial.ttf",
  ]:
    if Path(p).exists():
      return ImageFont.truetype(p, size=size)
  return ImageFont.load_default()

d.rectangle([60, 60, W-60, H-60], outline=muted, width=2)

d.text((90, 110), "BUENOS AIRES", fill=accent, font=font(78))
d.text((92, 205), "Маршрут по дням · 31 Dec → 7 Jan", fill=muted, font=font(34))
d.text((92, 290), "Centro · Retiro · Recoleta · Palermo", fill=muted, font=font(32))
d.text((92, 340), "San Telmo · La Boca · Tigre · San Isidro", fill=muted, font=font(32))

d.text((92, 470), "artrmiys.github.io/ba-travel", fill=muted, font=font(28))

out = Path("public/og.jpg")
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out, quality=92)
print("OK ->", out)
