import { Skeleton } from "@/components/ui/Skeleton";

export const SpaceHeaderSkeleton = () => {
  return (
    <div className={"flex items-center gap-3 px-3 pb-3 sm:pl-0"}>
      <Skeleton className={"h-16 w-16 shrink-0"} />
      <div className={"flex flex-col space-y-2"}>
        <Skeleton className={"w-24"} />
        <Skeleton className={"w-48"} />
      </div>
    </div>
  );
};
