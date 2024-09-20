import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createApolloClient = (token: string) =>
  new ApolloClient({
    ssrMode: false,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    link: new HttpLink({
      uri: import.meta.env.VITE_BASE_URL,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }),
  });
