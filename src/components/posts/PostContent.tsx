import { useMemo, useState } from "react";
import { cn } from "@/utils";
import { FragmentOf } from "gql.tada";
import { PostFragment } from "@/graphql/post/queries";
import { useExpandableElement } from "@/hooks/useExpandableElement";
import { Button } from "@ui";

type Props = {
  fields: FragmentOf<typeof PostFragment>["fields"];
};

export const PostContent = (props: Props) => {
  const { fields } = props;
  const [showMore, setShowMore] = useState(false);

  const { ref, isExpandable } = useExpandableElement<HTMLDivElement>({
    maxHeight: 432,
  });

  const htmlContent = useMemo(() => {
    const content = fields?.find((field) => field.key === "content")?.value;
    if (content && content !== "null") {
      const contentWithoutExtraQuotes = content.replace(/^"|"$/g, ""); // Removes the first and last double quote
      return contentWithoutExtraQuotes.replace(/\\"/g, '"'); // removes extra backslash;
    }
  }, [fields]);

  return (
    <>
      <div
        className={cn("relative overflow-hidden", !showMore && "max-h-[27rem]")}
      >
        {htmlContent && (
          <div
            ref={ref}
            className={"prose max-w-full"}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
        {!showMore && isExpandable && (
          <div
            className={
              "absolute bottom-0 left-0 h-12 w-full bg-gradient-to-b from-transparent to-surface"
            }
          />
        )}
      </div>
      {isExpandable && (
        <Button
          variant={"text"}
          type={"button"}
          className={"mb-4 mt-2"}
          onClick={() => setShowMore((showMore) => !showMore)}
        >
          {showMore ? "See less" : "See more"}
        </Button>
      )}
    </>
  );
};
