import { useQuery } from "@apollo/client";
import { GET_POST } from "@/graphql/post/queries";
import { DetailedPostCard } from "@/components/posts/DetailedPostCard";
import { useNavigate, useParams } from "react-router-dom";
import { DetailedPostCardSkeleton } from "@/components/posts/DetailedPostCardSkeleton";
import { SimpleError } from "@/components/shared/SimpleError";
import { PostPageHeader } from "@/components/posts/PostPageHeader";

type Params = {
  postSlug: string;
};

export const PostPage = () => {
  const { postSlug } = useParams<Params>();
  const navigate = useNavigate();
  const postId = postSlug?.split("-").at(-1);

  if (!postId) {
    navigate("/");
  }

  const { data, error } = useQuery(GET_POST, {
    variables: {
      id: postId!,
    },
    skip: !postId,
  });

  if (error) return <SimpleError error={error} />;

  return (
    <div className={"flex flex-col gap-4 pb-5"}>
      {data && (
        <>
          <PostPageHeader
            spaceName={data.post.space?.name || ""}
            spaceUrl={data.post.space?.relativeUrl || "/"}
          />
          <DetailedPostCard {...data.post} />
        </>
      )}
      {!data && <DetailedPostCardSkeleton />}
    </div>
  );
};
