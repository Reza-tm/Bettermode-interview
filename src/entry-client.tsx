import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "./index.css";
import { USER_DATA_KEY } from "@/constants/app";
import { UserData } from "@/types/user";
import { UserDataContext } from "@/hooks/useUserData";
import { ClientApolloProvider } from "@/components/providers/ClientApolloProvider";

// User data assigned to window in server.
let _userData: UserData | undefined;
if (!_userData) {
  _userData = window[USER_DATA_KEY];
  document.getElementById(USER_DATA_KEY)?.remove();
}

hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <UserDataContext.Provider value={_userData!}>
      <ClientApolloProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClientApolloProvider>
    </UserDataContext.Provider>
  </React.StrictMode>,
);
