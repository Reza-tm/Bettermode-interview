import { graphql } from "gql.tada";
import { SpaceFragment } from "@/graphql/space/queries";

export const GET_COLLECTIONS = graphql(
  `
    query GetCollections($limit: Int!) {
      collections {
        id
        name
        spaces(limit: $limit) {
          nodes {
            ...Space
          }
        }
      }
    }
  `,
  [SpaceFragment],
);
