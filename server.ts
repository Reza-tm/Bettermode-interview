import fs from "node:fs/promises";
import express, { Request, Response } from "express";
import {
  findCssImportsBasedOnReqUrl,
  readProductionAssets,
} from "./server-core/utils";
import { isProduction, port } from "./server-core/server.constant";
import { setupMiddleware } from "./server-core/middleware";
import { ViteDevServer } from "vite";

async function renderApp(
  req: Request,
  res: Response,
  vite: ViteDevServer,
  { templateHtml, ssrManifest }: any,
) {
  const url = req.originalUrl;
  const accessToken = req.user?.accessToken;

  try {
    let template, render;

    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);

      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      // @ts-ignore
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(url, ssrManifest, accessToken);
    const initialTheme = req.cookies["x-theme"] || "dark";

    let html = template
      .replace(`<!--app-html-->`, rendered.html ?? "")
      .replace(`<!--body-class-->`, initialTheme)
      .replace(
        `<!--user-data-->`,
        `<script id="__USER_DATA__">window.__USER_DATA__=${JSON.stringify({ accessToken })}</script>`,
      )
      .replace(
        `<!--apollo-state-->`,
        `<script>window.__APOLLO_STATE__=${JSON.stringify(rendered.state).replace(/</g, "\\u003c")};</script>`,
      );

    if (!isProduction) {
      const cssImports = await findCssImportsBasedOnReqUrl(
        "./src/entry-server.tsx",
        url,
      );

      html = html.replace(
        `<!--app-head-->`,
        cssImports
          .map((cssImport) => `<link rel="stylesheet" href="${cssImport}" />`)
          .join("\n"),
      );
    }

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e: any) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

const { templateHtml, ssrManifest } = await readProductionAssets();

const app = express();

const vite = await setupMiddleware(app);

app.use("*", (req, res) =>
  renderApp(req, res, vite, { templateHtml, ssrManifest }),
);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
