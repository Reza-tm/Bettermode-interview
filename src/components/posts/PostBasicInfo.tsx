import { Avatar, Text } from "@ui";
import { FragmentOf } from "gql.tada";
import { MemberFragment } from "@/graphql/member/queries";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  url: string;
  owner?: FragmentOf<typeof MemberFragment> | null;
  description: string;
};

export const PostBasicInfo = (props: Props) => {
  const { owner, description, title, url } = props;

  return (
    <div className={"flex flex-1 flex-col gap-4"}>
      <div className={"flex items-center gap-4"}>
        <Avatar
          src={
            owner?.profilePicture?.__typename === "Image"
              ? owner.profilePicture.url
              : undefined
          }
        />
        <div className={"mb-1 flex flex-col"}>
          <Text className={"font-bold"}>{owner?.name}</Text>
          <Text className={"text-xs"}>{description}</Text>
        </div>
      </div>
      <Text size={"heading2xl"} className={"font-medium"}>
        <Link to={url} className={"mb-4"}>
          {title}
        </Link>
      </Text>
    </div>
  );
};
