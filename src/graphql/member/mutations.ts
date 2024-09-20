import { graphql } from "gql.tada";

export const NETWORK_LOGIN = graphql(`
  mutation networkLogin($email: String!, $pass: String!) {
    loginNetwork(input: { usernameOrEmail: $email, password: $pass }) {
      accessToken
    }
  }
`);
