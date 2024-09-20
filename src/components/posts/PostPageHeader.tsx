import { Button, IconButton } from "@ui";
import { ArrowLeft } from "@icons";
import { Link } from "react-router-dom";

type Props = {
  spaceName: string;
  spaceUrl: string;
};

export const PostPageHeader = (props: Props) => {
  const { spaceUrl, spaceName } = props;
  return (
    <div
      className={
        "-mt-5 flex items-center gap-2 bg-surface px-4 py-5 sm:mt-0 sm:rounded-lg"
      }
    >
      <Link to={spaceUrl}>
        <IconButton
          className={
            "border-none bg-transparent hover:bg-action-neutral-hovered"
          }
          icon={<ArrowLeft className={"size-4 text-content-on-background"} />}
        />
      </Link>
      <Link to={spaceUrl}>
        <Button className={"border-none bg-transparent px-4"}>
          {spaceName}
        </Button>
      </Link>
    </div>
  );
};
