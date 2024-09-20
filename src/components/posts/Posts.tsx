import { SimpleError } from "@/components/shared/SimpleError";
import { Carousel } from "@ui";
import { SimplePostCard } from "@/components/posts/SimplePostCard";
import { GET_POSTS } from "@/graphql/post/queries";
import { useQuery } from "@apollo/client";
import { SimplePostCardSkeleton } from "@/components/posts/SimplePostCardSkeleton.tsx";

type Props = {
  spaceId: string;
};

export const Posts = (props: Props) => {
  const { spaceId } = props;
  const { data, error, loading } = useQuery(GET_POSTS, {
    variables: { spaceIds: [spaceId], limit: 5 },
  });

  if (error?.graphQLErrors) return <SimpleError />;

  if (loading)
    return (
      <div className={"flex items-stretch gap-4 overflow-x-auto"}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <SimplePostCardSkeleton key={idx} />
        ))}
      </div>
    );

  return (
    <div>
      <Carousel
        items={data?.posts.nodes?.map((post) => (
          <SimplePostCard key={post.id} {...post} />
        ))}
      />
    </div>
  );
};
