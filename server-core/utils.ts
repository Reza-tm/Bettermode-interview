import fs from "node:fs/promises";
import { isProduction } from "./server.constant";

/**
 *  This function reads the content of the specified entry file and extracts
 *  all CSS imports. It then adjusts the paths based on the number
 *  of directory levels in the requested URL to ensure the paths are
 *  resolved relative to the `src` directory.
 *
 *  This is a hack to inject css to html during development-ssr
 */
export async function findCssImportsBasedOnReqUrl(
  entryFile: string,
  url: string,
) {
  const urlPatternLength = url.split("/").length - 2;
  const content = await fs.readFile(entryFile, "utf-8");
  const cssImports = content.match(/import\s+['"](.+\.css)['"];?/g) || [];
  const cssPaths = cssImports
    .map((imp) => {
      const match = imp.match(/['"](.+)['"]/);
      return match ? match[1] : null;
    })
    .filter(Boolean);
  return cssPaths.map((path) => {
    return `${"../".repeat(urlPatternLength)}./src${path!.substring(1)}`;
  });
}

export async function readProductionAssets() {
  if (!isProduction) return {};

  const templateHtml = await fs.readFile("./dist/client/index.html", "utf-8");
  const ssrManifest = await fs.readFile(
    "./dist/client/.vite/ssr-manifest.json",
    "utf-8",
  );
  return { templateHtml, ssrManifest };
}
