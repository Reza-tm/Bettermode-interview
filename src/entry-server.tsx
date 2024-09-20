import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import "./index.css";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { ApolloProvider } from "@apollo/client";
import { renderToStringWithData } from "@apollo/client/react/ssr";
import { createSSRApolloClient } from "@/graphql/graphql.server.ts";

export async function render(url: string, _: unknown, token: string) {
  const apolloClient = createSSRApolloClient(token);
  if (!import.meta.env.PROD) {
    loadDevMessages();
    loadErrorMessages();
  }

  const app = (
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </React.StrictMode>
  );

  try {
    const content = await renderToStringWithData(app);

    const initialState = apolloClient.extract();

    return { html: content, state: initialState };
  } catch (error) {
    console.error("Error during SSR:", error);
    throw error;
  }
}
