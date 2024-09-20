import { Globe } from "@icons";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = cva(["transition duration-200", "disabled:opacity-60"], {
  variants: {
    size: {
      "full-width": "w-full",
      fit: "w-fit",
    },
    variant: {
      primary:
        "leading-5 text-content flex justify-center text-sm bg-action-neutral  rounded-full p-2 border-line border " +
        "hover:bg-action-neutral-hovered active:bg-action-neutral-pressed",
      transparent:
        "text-left px-3 py-2 text-content-on-background hover:bg-background-hover rounded-md",
      text: "text-link hover:text-link-hovered",
    },
    active: {
      false: "",
      true: "bg-background-pressed text-content-on-background-pressed",
    },
  },
  defaultVariants: {
    size: "fit",
    variant: "primary",
    active: false,
  },
});

type Props = {
  children: ReactNode;
  isLoading?: boolean;
} & VariantProps<typeof buttonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  const { children, active, isLoading, className, size, variant, ...attrs } =
    props;
  return (
    <button
      {...attrs}
      className={buttonStyles({
        className,
        size,
        variant,
        active,
      })}
    >
      {isLoading ? (
        <Globe data-testid={"loading-icon"} className={"size-5 animate-spin"} />
      ) : (
        children
      )}
    </button>
  );
};
