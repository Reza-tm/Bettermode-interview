import { ImgHTMLAttributes, useState } from "react";
import { cn } from "@/utils";

type Props = {
  src: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = (props: Props) => {
  const { src, alt, className, ...attrs } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={"h-10 w-10 overflow-hidden rounded-full"}>
      <img
        className={cn("aspect-square h-full w-full", className)}
        src={src}
        alt={alt}
        {...attrs}
      />
    </div>
  );
};

Avatar.displayName = "avatar";
