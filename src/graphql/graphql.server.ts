import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createSSRApolloClient = (token: string) => {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: import.meta.env.VITE_BASE_URL,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};
