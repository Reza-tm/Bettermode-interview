import { Text } from "@/components/ui/Text";
import { cn } from "@/utils";
import { forwardRef, InputHTMLAttributes } from "react";

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, error, className, ...attrs } = props;
  return (
    <div className={"flex flex-col gap-2"}>
      {label && <Text className={"text-content-on-background"}>{label}</Text>}
      <input
        ref={ref}
        className={cn(
          "w-full appearance-none rounded-md border border-line bg-transparent px-3 py-2 text-content-on-background",
          "focus-within:ring-action-primary ring-focused ring-offset-0 focus-within:border-action-neutral focus-within:ring-1 focus:outline-none",
          "transition duration-200",
          error && "border-red-500 ring-red-500",
          className,
        )}
        {...attrs}
      />
      {error && <Text className={"text-xs text-red-500"}>{error}</Text>}
    </div>
  );
});
