import placeholderImage from "./../../assets/svgs/placeholder.svg";
import { PlaceholderCard } from "@/components/shared/PlaceholderCard";

export const Introduction = () => {
  return (
    <PlaceholderCard className={"sm:px-8"}>
      <div className={"relative z-10 px-6 py-[3rem] sm:text-lg"}>
        <div className={"font-semibold"}>Hey tech wizard! 🚀👋</div>
        <h2 className={"mb-4 mt-1 text-2xl font-bold sm:text-3xl"}>
          Welcome to your tech community !
        </h2>
        <p>
          <span className={"font-bold"}>This is the Basic, </span>
          starter kit that provides pre-built spaces and customizable components
          to get you started quickly. Everything—content, layout, and
          components—is fully editable, and just for your jumpstart, so you can
          tailor it to your unique vision.
        </p>
        <p className={"mt-4 font-bold"}>
          Get started building your community from basic.
        </p>
      </div>
      <img
        className={"absolute inset-0 z-0 h-full w-full object-cover"}
        src={placeholderImage}
        alt={"introduction-image"}
      />
    </PlaceholderCard>
  );
};
