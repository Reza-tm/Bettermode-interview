import { SpaceHeader } from "@/components/space/SpaceHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SPACE } from "@/graphql/space/queries";
import { SimpleError } from "@/components/shared/SimpleError";
import { SpacePosts } from "@/components/space/SpacePosts";
import { UserCard } from "@/components/shared/UserCard";
import { PlaceholderCard } from "@/components/shared/PlaceholderCard";
import { Text } from "@ui";
import { SpaceHeaderSkeleton } from "@/components/space/SpaceHeaderSkeleton";

type Params = {
  spaceSlug: string;
};

export const SpacePage = () => {
  const { spaceSlug } = useParams<Params>();

  const { data, error, loading } = useQuery(GET_SPACE, {
    variables: {
      path: spaceSlug,
    },
  });

  if (error) return <SimpleError />;

  return (
    <div>
      {loading && <SpaceHeaderSkeleton />}
      {!loading && data?.space && (
        <SpaceHeader
          name={data.space.name}
          description={data.space.description || ""}
        />
      )}
      <div className={"mt-2 grid grid-cols-3 gap-x-5"}>
        <div className={"col-span-3 flex flex-col md:col-span-2"}>
          <SpacePosts spaceId={data?.space.id} />
        </div>
        <div className={"col-span-3 md:col-span-1"}>
          <div className={"flex flex-col gap-4"}>
            <UserCard />
            <PlaceholderCard
              className={
                "flex flex-col items-center justify-center gap-4 p-5 py-10 text-center"
              }
            >
              <Text size={"headingLg"}>🤺</Text>
              <Text size={"headingXs"} className={"font-semibold"}>
                Make it yours
              </Text>
              <Text>
                This banner is ready for your touch. Customize with a few
                clicks.
              </Text>
            </PlaceholderCard>
          </div>
        </div>
      </div>
    </div>
  );
};
