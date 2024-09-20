import { ReactNode, useState } from "react";
import {
  autoPlacement,
  autoUpdate,
  FloatingPortal,
  offset,
  useClick,
  useDismiss,
  useFloating,
  UseFloatingOptions,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";

type Props = {
  children: ReactNode;
  content: ReactNode;
} & UseFloatingOptions;

export const Popover = (props: Props) => {
  const { children, content, ...floatingOptions } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    ...floatingOptions,
    transform: true,
    middleware: [
      autoPlacement({
        allowedPlacements: [floatingOptions.placement || "top"],
      }),
      offset({ mainAxis: 8 }),
      ...(floatingOptions.middleware ? floatingOptions.middleware : []),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isMounted && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...transitionStyles }}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
