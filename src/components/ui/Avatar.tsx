import { ImgHTMLAttributes } from "react";
import { cn } from "@/utils";
import { User as DefaultUserIcon } from "@icons";

type Props = {
  src?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = (props: Props) => {
  const { src, alt, className, ...attrs } = props;

  return (
    <div
      className={cn(
        "grid h-10 w-10 place-content-center overflow-hidden rounded-full border-line",
        !src && "border",
        className,
      )}
    >
      {src ? (
        <img
          className={"aspect-square h-full w-full"}
          src={src}
          alt={alt}
          {...attrs}
        />
      ) : (
        <div>
          <DefaultUserIcon
            data-testid={"default-user-icon"}
            className={"fill-content-on-background"}
          />
        </div>
      )}
    </div>
  );
};

Avatar.displayName = "avatar";
