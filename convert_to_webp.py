from PIL import Image
import os

# Your assets folder
TARGET_FOLDER = "./src/assets"

# Supported formats
SUPPORTED_FORMATS = (".jpg", ".jpeg", ".png")

# Traverse all folders and files
for root, dirs, files in os.walk(TARGET_FOLDER):
    for file in files:

        if file.lower().endswith(SUPPORTED_FORMATS):

            input_path = os.path.join(root, file)

            # Output path
            output_path = os.path.splitext(input_path)[0] + ".webp"

            try:
                with Image.open(input_path) as img:

                    # Handle transparency properly
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGBA")
                    else:
                        img = img.convert("RGB")

                    # Save as webp
                    img.save(output_path, "WEBP", quality=85)

                print(f"✅ Converted: {input_path}")

            except Exception as e:
                print(f"❌ Failed: {input_path}")
                print(e)

print("\n🎉 All images converted!")