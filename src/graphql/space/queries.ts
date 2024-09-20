import { graphql } from "gql.tada";

export const SpaceFragment = graphql(
  `
    fragment Space on Space @_unmask {
      id
      name
      description
      relativeUrl
    }
  `,
  [],
);

export const GET_SPACE = graphql(
  `
    query GetSpace($path: String) {
      space(path: $path) {
        ...Space
      }
    }
  `,
  [SpaceFragment],
);
