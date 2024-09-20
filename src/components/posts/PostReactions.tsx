import { POST_REACTIONS } from "@/constants/post";
import { cn } from "@/utils";
import { IconButton, Popover, Text } from "@ui";
import { useState } from "react";
import { useReaction } from "@/hooks/useReaction";
import { FragmentOf } from "gql.tada";
import { PostFragment } from "@/graphql/post/queries";
import { Heart } from "@icons";

type Props = {
  postId: string;
  reactionsData: FragmentOf<typeof PostFragment>["reactions"];
};

export const PostReactions = (props: Props) => {
  const { postId, reactionsData } = props;
  const [showReactions, setShowReactions] = useState(false);

  const {
    selectedReactions,
    handleSelectReaction,
    optimisticReactionsData,
    optimisticReactionsCount,
  } = useReaction({
    postId,
    reactionsData,
  });

  const firstSelectedReaction = optimisticReactionsData.find(
    (data) => data.reacted === true,
  )?.reaction;

  return (
    <div className={"mt-1 flex items-center gap-4"}>
      <Popover
        open={showReactions}
        onOpenChange={setShowReactions}
        placement={"top-start"}
        content={
          <div
            className={
              "flex w-fit items-center gap-1 rounded-full border border-line bg-surface p-2"
            }
          >
            {POST_REACTIONS.map(({ label, key }) => {
              const isSelected = selectedReactions.includes(key);
              return (
                <button
                  key={key}
                  type={"button"}
                  onClick={async () => {
                    setShowReactions(false);
                    await handleSelectReaction(key);
                  }}
                  className={cn(
                    "p-1.5 transition duration-300",
                    isSelected && "rounded-full bg-action-neutral-pressed",
                    !isSelected &&
                      "transform transition-transform hover:scale-125",
                  )}
                >
                  <div
                    className={
                      "flex h-6 w-6 shrink-0 items-center justify-center text-2xl"
                    }
                  >
                    {label}
                  </div>
                </button>
              );
            })}
          </div>
        }
      >
        <IconButton
          onClick={() => setShowReactions(true)}
          className={cn(
            firstSelectedReaction && "bg-action-neutral-pressed",
            !firstSelectedReaction &&
              "hover:bg-action-neutral-hovered active:bg-action-neutral-pressed",
          )}
          icon={
            <>
              {POST_REACTIONS.find(({ key }) => key === firstSelectedReaction)
                ?.label || <Heart />}
            </>
          }
        />
      </Popover>
      <div className={"flex items-center"}>
        {optimisticReactionsData?.map(({ reaction }) => (
          <div
            key={reaction}
            className={
              "-me-1.5 cursor-pointer rounded-full border-2 border-line bg-action-neutral-pressed px-1.5 ring-1 ring-surface"
            }
          >
            {POST_REACTIONS.find(({ key }) => key === reaction)?.label}
          </div>
        ))}
        <Text className={"ml-4 text-xs"}>
          {optimisticReactionsCount == 0 ? "" : optimisticReactionsCount}
        </Text>
      </div>
    </div>
  );
};
