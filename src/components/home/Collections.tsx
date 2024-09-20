import { GET_COLLECTIONS } from "@/graphql/collection/queries";
import { SimpleError } from "@/components/shared/SimpleError";
import { Anchor, Text } from "@ui";
import { Posts } from "@/components/posts/Posts";
import { useQuery } from "@apollo/client";

export const Collections = () => {
  const { data, error } = useQuery(GET_COLLECTIONS, {
    variables: { limit: 3 },
  });

  if (error) return <SimpleError error={error} />;

  return (
    <div className={"space-y-5"}>
      {data?.collections.map(({ spaces }) =>
        spaces?.nodes?.map(({ id, name, relativeUrl }) => (
          <div key={id} className={"flex flex-col"}>
            <div className={"mb-5 flex items-center justify-between"}>
              <Text
                size={"headingXs"}
                className={
                  "px-4 font-medium text-content-on-background sm:px-0"
                }
              >
                {name}
              </Text>
              {relativeUrl && (
                <Anchor
                  className={"px-2 sm:px-0"}
                  to={relativeUrl}
                  text={"View All →"}
                />
              )}
            </div>
            <Posts spaceId={id} />
          </div>
        )),
      )}
    </div>
  );
};
