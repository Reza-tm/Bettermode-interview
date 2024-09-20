import { useQuery } from "@apollo/client";
import { GET_POST } from "@/graphql/post/queries";
import { DetailedPostCard } from "@/components/posts/DetailedPostCard";
import { useNavigate, useParams } from "react-router-dom";
import { DetailedPostCardSkeleton } from "@/components/posts/DetailedPostCardSkeleton";
import { SimpleError } from "@/components/shared/SimpleError";

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
    <div className={"pb-5"}>
      {!data && <DetailedPostCardSkeleton />}
      {data && <DetailedPostCard {...data.post} />}
    </div>
  );
};
