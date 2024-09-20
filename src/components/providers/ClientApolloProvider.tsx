import { ApolloProvider } from "@apollo/client";
import { useUserData } from "@/hooks/useUserData";
import { ReactNode } from "react";
import { createApolloClient } from "@/graphql/graphql.client";

type Props = {
  children: ReactNode;
};

export const ClientApolloProvider = (props: Props) => {
  const { children } = props;
  const userData = useUserData();

  return (
    <ApolloProvider client={createApolloClient(userData?.accessToken || "")}>
      {children}
    </ApolloProvider>
  );
};
