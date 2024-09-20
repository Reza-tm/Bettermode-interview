import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const iconButtonStyles = cva(
  [
    "grid h-10 w-10 place-content-center ",
    "transition duration-200",
    "disabled:opacity-60",
  ],
  {
    variants: {
      variant: {
        primary:
          "place-content-center overflow-hidden rounded-full border border-line" +
          "hover:bg-action-neutral-hovered bg-action-neutral",
        transparent: "text-link hover:text-link-hovered",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type Props = {
  icon: ReactNode;
} & VariantProps<typeof iconButtonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { icon, className, variant, ...attrs } = props;

  return (
    <button
      ref={ref}
      className={iconButtonStyles({
        className,
        variant,
      })}
      {...attrs}
    >
      {icon}
    </button>
  );
});
