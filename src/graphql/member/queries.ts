import { graphql } from "gql.tada";

export const MemberFragment = graphql(`
  fragment Member on Member @_unmask {
    name
    profilePicture {
      ... on Image {
        url
      }
    }
  }
`);

export const GET_AUTH_MEMBER = graphql(
  `
    query GetAuthMember {
      authMember {
        ...Member
      }
    }
  `,
  [MemberFragment],
);
