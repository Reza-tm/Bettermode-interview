import { IconButton } from "@ui";
import { Moon, Sun } from "@icons";
import { useTheme } from "@/hooks/useTheme";

export const ThemeSwitch = () => {
  const { toggleTheme, currTheme } = useTheme();

  return (
    <IconButton
      className={"bg-topbar"}
      onClick={() => toggleTheme()}
      icon={
        currTheme === "light" ? (
          <Moon className={"text-content-on-background"} />
        ) : (
          <Sun className={"text-content-on-background"} />
        )
      }
    />
  );
};
