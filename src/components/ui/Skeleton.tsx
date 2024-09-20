import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const skeletonStyles = cva(["animate-pulse bg-gray-200"], {
  variants: {
    type: {
      text: "h-4 w-full rounded-md",
      circle: "rounded-full h-10 !w-10",
    },
  },
  defaultVariants: {
    type: "text",
  },
});

type Props = VariantProps<typeof skeletonStyles> &
  HTMLAttributes<HTMLDivElement>;

export const Skeleton = (props: Props) => {
  return (
    <div
      data-testid={"skeleton"}
      {...props}
      className={cn(
        skeletonStyles({
          type: props.type,
        }),
        props.className,
      )}
    />
  );
};
