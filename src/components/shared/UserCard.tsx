import { useQuery } from "@apollo/client";
import { GET_AUTH_MEMBER } from "@/graphql/member/queries";
import { Avatar, Text } from "@ui";

export const UserCard = () => {
  const { data } = useQuery(GET_AUTH_MEMBER);
  const profilePic = data?.authMember.profilePicture;

  return (
    <div
      className={
        "flex w-full flex-col gap-4 overflow-hidden bg-surface pb-5 sm:rounded-lg"
      }
    >
      <div
        className={
          "relative h-20 w-full bg-gradient-to-r from-pink-500 to-orange-500 pt-7"
        }
      >
        <Avatar
          className={"mx-auto h-24 w-24 border-4 border-surface"}
          src={profilePic?.__typename === "Image" ? profilePic.url : undefined}
        />
      </div>
      <Text className={"mx-auto mt-10 text-content-subdued"}>
        Have a great time 🚀
      </Text>
      <Text
        size={"headingXs"}
        className={"mx-auto text-content-subdued font-semibold"}
      >
        {data?.authMember.name}
      </Text>
    </div>
  );
};
