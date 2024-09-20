import { FragmentOf } from "gql.tada";
import { PostFragment } from "@/graphql/post/queries";
import { PostBasicInfo } from "@/components/posts/PostBasicInfo";
import { timeAgo } from "@/utils";
import { PostReactions } from "@/components/posts/PostReactions";
import { PostContent } from "@/components/posts/PostContent";

type Props = FragmentOf<typeof PostFragment>;

export const DetailedPostCard = (props: Props) => {
  const { id, title, owner, publishedAt, fields, reactions, relativeUrl } =
    props;

  return (
    <div
      className={
        "gap-4 bg-surface px-4 py-5 text-content-subdued sm:rounded-lg sm:shadow-md"
      }
    >
      <PostBasicInfo
        url={relativeUrl!}
        title={title || ""}
        owner={owner?.member}
        description={timeAgo(publishedAt as string)}
      />
      <PostContent fields={fields} />
      <PostReactions postId={id} reactionsData={reactions} />
    </div>
  );
};
