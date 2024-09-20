import { PostBasicInfo } from "@/components/posts/PostBasicInfo";
import { PostFragment } from "@/graphql/post/queries";
import { timeAgo } from "@/utils";
import { Comment, Heart } from "@icons";
import { Text } from "@ui";
import { FragmentOf } from "gql.tada";
import { useNavigate } from "react-router-dom";

type Props = FragmentOf<typeof PostFragment>;

export const SimplePostCard = (props: Props) => {
  const {
    title,
    textContent,
    relativeUrl,
    reactionsCount,
    totalRepliesCount,
    publishedAt,
    owner,
    space,
  } = props;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(relativeUrl!)}
      className={
        "flex w-[398px] flex-1 cursor-pointer flex-col gap-4 bg-surface px-4 py-5 text-content-subdued sm:rounded-xl"
      }
    >
      <PostBasicInfo
        url={relativeUrl!}
        title={title || ""}
        owner={owner?.member}
        description={`${timeAgo(publishedAt as string)} . Posted in ${space?.name}`}
      />
      <div className={"flex-1"}>
        <Text className={"line-clamp-5"}>{textContent}</Text>
      </div>
      <div className={"flex gap-4"}>
        <div className={"flex items-center gap-2"}>
          <Heart className={"size-4"} />
          <Text className={"text-xs"}>{reactionsCount}</Text>
        </div>
        <div className={"flex items-center gap-1"}>
          <Comment className={"size-4"} />
          <Text className={"text-xs"}>{totalRepliesCount}</Text>
        </div>
      </div>
    </div>
  );
};
