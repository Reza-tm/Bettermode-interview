import { ThemeSwitch } from "./ThemeSwitch";
import { GET_AUTH_MEMBER } from "@/graphql/member/queries";
import { useQuery } from "@apollo/client";
import { Bars3, Close, Terminal } from "@icons";
import { Avatar, Drawer, IconButton, Text } from "@ui";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserDropDown } from "./UserDropDown";
import { MenuContent } from "./MenuContent";

export const Header = () => {
  const { data } = useQuery(GET_AUTH_MEMBER);
  const profilePic = data?.authMember.profilePicture;
  const [showDrawer, setShowDrawer] = useState(false);
  const [showUserDropDown, setShowUserDropDown] = useState(false);

  return (
    <header className={"fixed top-0 z-30 w-full"}>
      <Drawer show={showDrawer} onClose={() => setShowDrawer(false)}>
        <IconButton
          className={"mb-6"}
          onClick={() => setShowDrawer(false)}
          variant={"transparent"}
          icon={<Close className={"size-8 text-content-on-background"} />}
        />
        <MenuContent />
      </Drawer>
      <div className={"relative h-16 w-full shadow-xl"}>
        <div
          className={
            "container mx-auto flex h-full w-full items-center justify-between gap-x-2 px-4 sm:gap-x-8"
          }
        >
          <div className={"z-10 flex items-center gap-2"}>
            <Bars3
              onClick={() => setShowDrawer(true)}
              className={
                "size-9 cursor-pointer fill-content-on-background lg:hidden"
              }
            />
            <Link className={"z-10 flex items-center gap-2"} to={"/"}>
              <Terminal className={"size-9 fill-content-on-background"} />
              <Text
                className={
                  "hidden font-semibold text-content-on-background sm:block"
                }
              >
                BetterTech
              </Text>
            </Link>
          </div>
          <div className={"relative z-10 flex items-center gap-4"}>
            <ThemeSwitch />
            <Avatar
              className="cursor-pointer"
              onClick={() => setShowUserDropDown(true)}
              src={
                profilePic?.__typename === "Image" ? profilePic.url : undefined
              }
            />
            <AnimatePresence>
              {showUserDropDown && (
                <UserDropDown onClose={() => setShowUserDropDown(false)} />
              )}
            </AnimatePresence>
          </div>
        </div>
        <div
          className={
            "absolute inset-0 backdrop-blur-sm backdrop-saturate-[180%] backdrop-filter before:absolute before:inset-0 before:bg-topbar before:opacity-80"
          }
        />
      </div>
    </header>
  );
};
