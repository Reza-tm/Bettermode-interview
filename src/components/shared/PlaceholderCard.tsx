import placeholderImage from "@/assets/svgs/placeholder.svg";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const PlaceholderCard = (props: Props) => {
  const { children, className, ...attrs } = props;
  return (
    <div
      className={cn(
        "relative overflow-hidden sm:rounded-md sm:shadow-lg",
        className,
      )}
      {...attrs}
    >
      {children}
      <img
        className={"absolute inset-0 -z-10 h-full w-full object-cover"}
        src={placeholderImage}
        alt={"introduction-image"}
      />
    </div>
  );
};
