import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={"mt-16"}>
        <div
          className={
            "container relative mx-auto grid w-full grid-cols-1 pt-5 sm:px-4 lg:grid-cols-8 lg:gap-5"
          }
        >
          <Sidebar />
          <main className={"relative col-span-1 lg:col-span-6"}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
