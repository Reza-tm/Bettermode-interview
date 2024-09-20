import { useMutation } from "@apollo/client";
import { ADD_REACTION, REMOVE_REACTION } from "@/graphql/post/mutations";
import { useState } from "react";
import { FragmentOf } from "gql.tada";
import { PostFragment } from "@/graphql/post/queries";

type Args = {
  postId: string;
  reactionsData: FragmentOf<typeof PostFragment>["reactions"];
};

export const useReaction = (args: Args) => {
  const { postId, reactionsData } = args;

  const [optimisticReactionsData, setOptimisticReactionsData] = useState(
    reactionsData || [],
  );

  const [selectedReactions, setSelectedReactions] = useState<string[]>(
    () =>
      reactionsData
        ?.filter((reaction) => reaction.reacted)
        .map((reaction) => reaction.reaction) || [],
  );

  const [addReaction, { loading: addReactionLoading }] =
    useMutation(ADD_REACTION);

  const [removeReaction, { loading: removeReactionLoading }] =
    useMutation(REMOVE_REACTION);

  const updateOptimisticAddReactions = (reactionKey: string) => {
    const currentReactionsData = [...optimisticReactionsData];
    const selectedReactionIndex = currentReactionsData.findIndex(
      (reactionData) => reactionData.reaction === reactionKey,
    );
    if (selectedReactionIndex >= 0) {
      currentReactionsData[selectedReactionIndex] = {
        reacted: true,
        reaction: reactionKey,
        count: currentReactionsData[selectedReactionIndex].count + 1,
      };
    } else {
      currentReactionsData.push({
        reacted: true,
        reaction: reactionKey,
        count: 1,
      });
    }

    setOptimisticReactionsData(currentReactionsData);
  };

  const updateOptimisticRemoveReactions = (reactionKey: string) => {
    const currentReactionsData = [...optimisticReactionsData];
    const selectedReactionIndex = currentReactionsData.findIndex(
      (reactionData) => reactionData.reaction === reactionKey,
    );
    if (selectedReactionIndex === -1) return;
    const selectedReaction = currentReactionsData[selectedReactionIndex];

    // If current user is the only person who react , We remove this reaction type from reactions
    if (selectedReaction.count === 1) {
      currentReactionsData.splice(selectedReactionIndex, 1);
    }

    if (selectedReaction.count > 1) {
      currentReactionsData[selectedReactionIndex] = {
        reacted: false,
        count: currentReactionsData[selectedReactionIndex].count - 1,
        reaction: reactionKey,
      };
    }

    setOptimisticReactionsData(currentReactionsData);
  };

  const handleSelectReaction = async (reactionKey: string) => {
    const prevSelectedReactions = selectedReactions;
    const prevOptimisticReactionsData = optimisticReactionsData;
    let hasError = false;

    try {
      if (selectedReactions.includes(reactionKey)) {
        const filteredArray = selectedReactions.filter(
          (reaction) => reaction !== reactionKey,
        );
        setSelectedReactions(filteredArray);
        updateOptimisticRemoveReactions(reactionKey);
        const { data } = await removeReaction({
          variables: {
            reaction: reactionKey,
            postId,
          },
        });
        if (!data || data.removeReaction.status === "failed") hasError = true;
      } else {
        setSelectedReactions((p) => [...p, reactionKey]);
        updateOptimisticAddReactions(reactionKey);
        const { data } = await addReaction({
          variables: {
            input: {
              reaction: reactionKey,
              overrideSingleChoiceReactions: false,
            },
            postId,
          },
        });
        if (!data || data.addReaction.status === "failed") hasError = true;
      }
    } catch {
      hasError = true;
    }

    if (hasError) {
      setSelectedReactions(prevSelectedReactions);
      setOptimisticReactionsData(prevOptimisticReactionsData);
    }
  };

  return {
    handleSelectReaction,
    selectedReactions,
    isLoading: addReactionLoading || removeReactionLoading,
    optimisticReactionsData,
    optimisticReactionsCount: optimisticReactionsData.reduce(
      (acc, curr) => curr.count + acc,
      0,
    ),
  };
};
