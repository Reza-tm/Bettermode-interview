import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Drawer = (props: Props) => {
  const { onClose, children, show } = props;

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            data-testid={"backdrop"}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            className={
              "fixed inset-0 z-20 overflow-hidden bg-background-backdrop"
            }
          />
          <motion.div
            transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            className={"fixed z-40"}
          >
            <div
              className={
                "relative z-40 h-screen min-w-80 space-y-4 bg-background px-3 py-4 text-content-on-background shadow-lg"
              }
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
