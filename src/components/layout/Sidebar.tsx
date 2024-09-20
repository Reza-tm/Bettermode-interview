import { MenuContent } from "@/components/layout/MenuContent";

export const Sidebar = () => {
  return (
    <aside className={"sticky top-20 col-span-2 hidden h-fit flex-col lg:flex"}>
      <MenuContent />
    </aside>
  );
};
