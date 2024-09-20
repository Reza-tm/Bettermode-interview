import { ViteDevServer } from "vite";
import { isProduction } from "./server.constant";

/**
 * It manages API routes located in the `/src/api` directory. Utilizes it as a backend for handling requests.
 * We can use filenames as to resolve path and handling request, but in sake of simplicity , a simple express router is enough
 */
export async function loadApiRouter(vite: ViteDevServer) {
  if (isProduction) {
    // @ts-ignore
    return (await import("../dist/server/api/router.js")).default;
  }
  return (await vite.ssrLoadModule("/src/api/router.ts")).default;
}
