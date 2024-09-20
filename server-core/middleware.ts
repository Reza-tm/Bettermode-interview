import cookieParser from "cookie-parser";
import { loadApiRouter } from "./api-router";
import { base, isProduction } from "./server.constant";
import express, { Express, NextFunction, Request, Response } from "express";
import { ViteDevServer } from "vite";

declare module "express" {
  export interface Request {
    user?: {
      accessToken: string;
    };
  }
}

async function authGuard(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies["c_access_token"];
  if (req.url.startsWith("/auth") && token) return res.redirect("/");
  if (req.url.startsWith("/auth")) return next();

  if (!token) return res.redirect("/auth/login");
  req.user = { accessToken: token };
  next();
}

export async function setupMiddleware(app: Express): Promise<ViteDevServer> {
  let vite: ViteDevServer | undefined = undefined;

  app.use(express.json());
  app.use(cookieParser());

  if (!isProduction) {
    const { createServer } = await import("vite");
    vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      base,
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;
    app.use(compression());
    app.use(base, sirv("./dist/client", { extensions: [] }));
  }

  const apiRouter = await loadApiRouter(vite!);

  app.use("/api", apiRouter);

  app.use(authGuard);

  return vite!;
}
