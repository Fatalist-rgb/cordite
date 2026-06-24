from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "source-assets" / "chatgpt"

EXPORTS = [
    ("hero-decapping.png", "public/images/hero-decapping.jpg", (1760, 900)),
    ("hero-start.png", "public/images/hero-start.jpg", (1760, 900)),
    ("hero-primer.png", "public/images/hero-primer.jpg", (1760, 900)),
    ("press-rl550.png", "public/images/press-rl550.jpg", (1080, 1080)),
    ("press-xl750.png", "public/images/press-xl750.jpg", (1080, 1080)),
    ("press-rl1100.png", "public/images/press-rl1100.jpg", (1080, 1080)),
    ("press-super1050.png", "public/images/press-super1050.jpg", (1080, 1080)),
    ("press-cp2000.png", "public/images/press-cp2000.jpg", (1080, 1080)),
    ("press-squaredeal.png", "public/images/press-squaredeal.jpg", (1080, 1080)),
    ("cat-conversion.png", "public/images/cat-conversion.jpg", (700, 560)),
    ("cat-caseprep.png", "public/images/cat-caseprep.jpg", (700, 560)),
    ("cat-powder.png", "public/images/cat-powder.jpg", (700, 560)),
    ("cat-parts.png", "public/images/cat-parts.jpg", (700, 560)),
    ("cat-dies.png", "public/images/cat-dies.jpg", (700, 560)),
    ("cat-components.png", "public/images/cat-components.jpg", (700, 560)),
    ("feat-primerfiller.png", "public/images/feat-primerfiller.jpg", (1080, 1080)),
    ("feat-decapping.png", "public/images/feat-decapping.jpg", (1080, 1080)),
    ("feat-casefeeder.png", "public/images/feat-casefeeder.jpg", (1080, 1080)),
    ("feat-upgradekit.png", "public/images/feat-upgradekit.jpg", (1080, 1080)),
]


def export_image(source_name: str, output_path: str, size: tuple[int, int]) -> None:
    src = SOURCE / source_name
    out = ROOT / output_path
    out.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(src) as image:
        rgb = image.convert("RGB")
        fitted = ImageOps.fit(rgb, size, Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        fitted.save(out, "JPEG", quality=90, optimize=True, progressive=True)
        print(f"exported {output_path} {size[0]}x{size[1]}")


def main() -> None:
    for item in EXPORTS:
        export_image(*item)


if __name__ == "__main__":
    main()
