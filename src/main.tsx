import React, { StrictMode } from "react";

import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { apolloClient, router } from "@/configs";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
