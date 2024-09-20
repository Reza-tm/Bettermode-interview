import { SimpleError } from "@/components/shared/SimpleError";
import { DetailedPostCard } from "@/components/posts/DetailedPostCard";
import { Button } from "@ui";
import { useInfinitePosts } from "@/hooks/useInfinitePosts";
import { DetailedPostCardSkeleton } from "@/components/posts/DetailedPostCardSkeleton";

type Props = {
  spaceId?: string;
};

export const SpacePosts = (props: Props) => {
  const { spaceId } = props;
  const { error, data, loading, fetchMore } = useInfinitePosts(3, spaceId);

  if (error) return <SimpleError />;

  if (!data)
    return (
      <div className={"flex flex-col gap-4 pb-5"}>
        <DetailedPostCardSkeleton />
      </div>
    );

  return (
    <div className={"flex flex-col gap-4 pb-5"}>
      {data.posts.nodes?.map((post) => (
        <DetailedPostCard key={post.id} {...post} />
      ))}
      {data.posts.pageInfo.hasNextPage && (
        <Button onClick={fetchMore} size={"full-width"} isLoading={loading}>
          Show more
        </Button>
      )}
    </div>
  );
};
