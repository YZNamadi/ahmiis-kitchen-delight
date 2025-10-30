import favicons from "favicons";
import { writeFile } from "fs/promises";
import path from "path";

const source = path.join("public", "favicon-source.jpg");

const configuration = {
  path: "/",
  icons: {
    favicons: true,
    appleIcon: true,
    android: false,
    windows: false,
    yandex: false,
    coast: false,
    firefox: false,
  },
};

try {
  const response = await favicons(source, configuration);
  const outDir = path.join("public");
  const writes = [];
  for (const image of response.images) {
    writes.push(writeFile(path.join(outDir, image.name), image.contents));
  }
  for (const file of response.files) {
    writes.push(writeFile(path.join(outDir, file.name), file.contents));
  }
  await Promise.all(writes);
  console.log(
    "Generated:",
    response.images.map((i) => i.name).join(", "),
    response.files.map((f) => f.name).join(", ")
  );
} catch (err) {
  console.error("Favicons generation failed:", err);
  process.exit(1);
}