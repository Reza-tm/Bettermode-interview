import useEmblaCarousel from "embla-carousel-react";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { IconButton } from "@/components/ui/IconButton.tsx";
import { ChevronLeft, ChevronRight } from "@icons";
import { cn } from "@/utils";

type Props = {
  items?: ReactElement[];
};

export const Carousel = (props: Props) => {
  const { items = [] } = props;
  const [hasNextButton, setHasNextButton] = useState(false);
  const [hasPrevButton, setHasPrevButton] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    inViewThreshold: 0.3,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const emblaOnSelectHandler = useCallback(() => {
    if (emblaApi) {
      setHasPrevButton(emblaApi.canScrollPrev());
      setHasNextButton(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", emblaOnSelectHandler);
    emblaOnSelectHandler();

    return () => {
      emblaApi.off("select", emblaOnSelectHandler);
    };
  }, [emblaApi, emblaOnSelectHandler]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className={"flex h-auto snap-x items-stretch"}>
          {items.map((item, idx) => (
            <div
              className={cn(
                "flex min-w-0 shrink-0 grow-0 snap-start",
                idx !== items.length - 1 && "mr-4",
              )}
              key={item?.key || idx}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {hasNextButton && (
        <div className={"absolute right-0 top-0 flex h-full items-center px-2"}>
          <IconButton
            icon={<ChevronRight className={"size-4 text-content"} />}
            onClick={scrollNext}
          />
        </div>
      )}
      {hasPrevButton && (
        <div className={"absolute left-0 top-0 flex h-full items-center px-2"}>
          <div>
            <IconButton
              icon={<ChevronLeft className={"size-4 text-content"} />}
              onClick={scrollPrev}
            />
          </div>
        </div>
      )}
    </div>
  );
};
