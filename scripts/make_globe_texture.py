from PIL import Image, ImageDraw, ImageFilter
import random, math
from pathlib import Path

W, H = 2048, 1024
random.seed(7)

# base white
img = Image.new("RGB", (W, H), (245, 245, 245))

# noisy blobs -> fake land mask (stylish)
noise = Image.new("L", (W, H), 0)
px = noise.load()
for y in range(H):
    for x in range(W):
        v = int(255 * random.random())
        px[x, y] = v

noise = noise.filter(ImageFilter.GaussianBlur(18))

# threshold -> land
land = noise.point(lambda p: 255 if p > 150 else 0).filter(ImageFilter.GaussianBlur(2))

# edge detect for outline
edges = land.filter(ImageFilter.FIND_EDGES).filter(ImageFilter.GaussianBlur(1))
edges = edges.point(lambda p: 255 if p > 40 else 0)

# draw outlines on white
outline = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(outline)
epx = edges.load()
for y in range(H):
    for x in range(W):
        if epx[x, y] > 0:
            # dark gray lines
            outline.putpixel((x, y), (40, 40, 40, 170))

img_rgba = img.convert("RGBA")
img_rgba = Image.alpha_composite(img_rgba, outline)

# subtle diagonal hatch to mimic "engraved" look
hatch = Image.new("RGBA", (W, H), (0, 0, 0, 0))
hd = ImageDraw.Draw(hatch)
step = 26
for k in range(-H, W, step):
    hd.line([(k, 0), (k + H, H)], fill=(30, 30, 30, 22), width=2)

img_rgba = Image.alpha_composite(img_rgba, hatch)

# optional very light vignette
vig = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(vig)
for r in range(0, max(W, H)//2, 8):
    a = int(255 * (r / (max(W, H)//2)))
    vd.ellipse([W//2 - r, H//2 - r, W//2 + r, H//2 + r], outline=a)
vig = vig.filter(ImageFilter.GaussianBlur(22))
vig = vig.point(lambda p: int(p * 0.22))
vig_rgba = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vig_rgba.putalpha(vig)
img_rgba = Image.alpha_composite(img_rgba, vig_rgba)

out = Path("public/globe-texture.png")
out.parent.mkdir(parents=True, exist_ok=True)
img_rgba.save(out, "PNG")
print("OK:", out)
