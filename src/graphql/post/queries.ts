import { graphql } from "gql.tada";
import { MemberFragment } from "@/graphql/member/queries";
import { SpaceFragment } from "@/graphql/space/queries";

export const PostFragment = graphql(
  `
    fragment Post on Post @_unmask {
      id
      slug
      title
      textContent
      fields {
        value
        key
      }
      description
      relativeUrl
      publishedAt
      reactionsCount
      totalRepliesCount
      owner {
        member {
          ...Member
        }
      }
      space {
        ...Space
      }
      reactions {
        count
        reaction
        reacted
      }
    }
  `,
  [MemberFragment, SpaceFragment],
);

export const GET_POSTS = graphql(
  `
    query GetPosts($limit: Int!, $after: String, $spaceIds: [ID!]) {
      posts(
        spaceIds: $spaceIds
        limit: $limit
        after: $after
        orderByString: "publishedAt"
        reverse: false
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          ...Post
        }
      }
    }
  `,
  [PostFragment],
);

export const GET_POST = graphql(
  `
    query GetPost($id: ID!) {
      post(id: $id) {
        ...Post
      }
    }
  `,
  [PostFragment],
);
