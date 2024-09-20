import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/utils";

type Theme = "dark" | "light";

export const useTheme = () => {
  const [currTheme, setCurrTheme] = useState<Theme | null>();

  useEffect(() => {
    const initialTheme = (getCookie("x-theme") as Theme) || "dark";
    setCurrTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = currTheme === "dark" ? "light" : "dark";
    setCurrTheme(nextTheme);
    setCookie("x-theme", nextTheme);
    document.body.classList.add(nextTheme);
    if (currTheme) {
      document.body.classList.remove(currTheme);
    }
  };

  return { toggleTheme, currTheme };
};
