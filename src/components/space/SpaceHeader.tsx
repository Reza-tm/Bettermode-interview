import { Text } from "@ui";
import { Cpu } from "@icons";

type Props = {
  name: string;
  description: string;
};

export const SpaceHeader = (props: Props) => {
  const { name, description } = props;
  return (
    <div
      className={
        "flex items-center gap-3 px-3 pb-3 text-content-on-background sm:pl-0"
      }
    >
      <Cpu
        className={"size-16 h-16 w-16 shrink-0 stroke-content-on-background"}
      />
      <div className={"flex flex-col space-y-2"}>
        <Text size={"headingLg"}>{name}</Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
};
