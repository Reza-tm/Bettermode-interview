import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Badge = (props: Props) => {
  const { children } = props;

  return (
    <div
      className={
        "surface-neutral bg-surface-neutral w-fit rounded-md px-2.5 py-1 text-xs leading-4 text-content-subdued"
      }
    >
      {children}
    </div>
  );
};
