import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/graphql/post/queries";

export const useInfinitePosts = (limit: number, spaceId?: string) => {
  const postQueryResult = useQuery(GET_POSTS, {
    variables: {
      limit,
      spaceIds: [spaceId!],
    },
    notifyOnNetworkStatusChange: true,
    skip: !spaceId,
  });

  const fetchMore = async () => {
    const { data } = postQueryResult;
    if (!data) return;
    if (!data.posts.pageInfo.hasNextPage) return;
    await postQueryResult.fetchMore({
      variables: { after: data.posts.pageInfo.endCursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;

        return {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [
              ...(previousResult.posts?.nodes || []),
              ...(fetchMoreResult.posts?.nodes || []),
            ],
          },
        };
      },
    });
  };

  return { ...postQueryResult, fetchMore };
};
