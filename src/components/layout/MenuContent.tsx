import { GET_COLLECTIONS } from "@/graphql/collection/queries";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "@apollo/client";
import { Home, Moon, Sun } from "@icons";
import { Button, Text } from "@ui";
import { NavLink } from "react-router-dom";

export const MenuContent = () => {
  const { data } = useQuery(GET_COLLECTIONS, {
    variables: { limit: 3 },
  });
  const { currTheme, toggleTheme } = useTheme();
  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <NavLink to={"/"}>
          {({ isActive }) => (
            <Button
              active={isActive}
              variant={"transparent"}
              size={"full-width"}
              className={"flex items-center gap-2 lg:mb-4"}
            >
              <Home className={"size-5"} />
              Home
            </Button>
          )}
        </NavLink>
        <Button
          onClick={toggleTheme}
          variant={"transparent"}
          size={"full-width"}
          className={"flex items-center gap-2 lg:hidden"}
        >
          {currTheme === "light" ? (
            <Moon className={"text-content-on-background"} />
          ) : (
            <Sun className={"text-content-on-background"} />
          )}
          {currTheme === "light" ? "Light mode" : "Dark mode"}
        </Button>
      </div>
      {data?.collections.map(({ name, id, spaces }) => (
        <div className={"flex flex-col gap-1"} key={id}>
          <Text
            className={"mb-1 text-sm font-semibold text-content-on-background"}
          >
            {name}
          </Text>
          {spaces?.nodes?.map(({ id, name, relativeUrl }) => {
            return (
              <NavLink end to={relativeUrl!} key={id}>
                {({ isActive }) => (
                  <Button
                    active={isActive}
                    size={"full-width"}
                    variant={"transparent"}
                  >
                    {name}
                  </Button>
                )}
              </NavLink>
            );
          })}
        </div>
      ))}
    </>
  );
};
