import { Introduction } from "@/components/home/Introduction";
import { Collections } from "@/components/home/Collections";

export const HomePage = () => {
  return (
    <div
      className={
        "flex w-full flex-col space-y-7 px-0 pb-5 sm:space-y-8 sm:px-0 lg:space-y-10"
      }
    >
      <Introduction />
      <Collections />
    </div>
  );
};
