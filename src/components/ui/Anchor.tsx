import { Link } from "react-router-dom";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

type Props = {
  to: string;
  text: string;
} & HTMLAttributes<HTMLElement>;

export const Anchor = (props: Props) => {
  const { to, text, className, ...attrs } = props;
  return (
    <Link
      to={to}
      className={cn(
        "text-link hover:text-link-hovered ring-link mx-2 max-w-[10rem] shrink-0 cursor-pointer truncate transition duration-200 focus:outline-none focus-visible:ring sm:mx-0",
        className,
      )}
      {...attrs}
    >
      {text}
    </Link>
  );
};
