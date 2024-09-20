import { Logout } from "@icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@ui";

type Props = {
  onClose: () => void;
};

export const UserDropDown = (props: Props) => {
  const { onClose } = props;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 h-screen w-screen bg-background-backdrop"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        exit={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-0 top-12 min-w-48 rounded-lg border border-line bg-background"
      >
        <Link to={"/api/auth/logout"} reloadDocument>
          <Button
            variant={"transparent"}
            size={"full-width"}
            className="flex items-center gap-1"
          >
            <Logout />
            Log out
          </Button>
        </Link>
      </motion.div>
    </>
  );
};
