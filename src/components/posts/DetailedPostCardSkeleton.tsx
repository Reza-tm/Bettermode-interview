import { Skeleton } from "@/components/ui/Skeleton";

export const DetailedPostCardSkeleton = () => {
  return (
    <div
      className={
        "flex min-w-[398px] flex-1 shrink-0 flex-col gap-4 bg-surface px-4 py-5 sm:rounded-xl"
      }
    >
      <div className={"mb-2 flex items-center gap-4"}>
        <Skeleton type={"circle"} />
        <div className={"mb-1 flex h-full flex-col justify-around gap-1"}>
          <Skeleton className={"h-2 w-12"} />
          <Skeleton className={"h-2 w-24"} />
        </div>
      </div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <div className={"mt-4 flex gap-2"}>
        <Skeleton className={"h-3 w-12"} />
        <Skeleton className={"h-3 w-12"} />
      </div>
    </div>
  );
};
