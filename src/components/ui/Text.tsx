import { HTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const textStyles = cva("", {
  variants: {
    size: {
      heading2xl: "text-heading-2xl",
      headingXl: "text-heading-xl",
      headingLg: "text-heading-lg font-semibold",
      headingMd: "text-heading-md",
      headingSm: "text-heading-sm",
      headingXs: "text-heading-xs",
      heading2xs: "text-heading-2xs",
    },
  },
});

type Props = {
  children: ReactNode;
  size?: VariantProps<typeof textStyles>["size"];
  as?: "h1" | "h2" | "span" | "p";
} & HTMLAttributes<HTMLDivElement>;

export const Text = (props: Props) => {
  const { as, children, className, size, ...attrs } = props;
  const Comp = as || "span";

  return (
    <Comp className={textStyles({ className, size })} {...attrs}>
      {children}
    </Comp>
  );
};
