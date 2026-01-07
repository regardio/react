'use client';

import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  type KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type CarouselApi = EmblaCarouselType;

interface CarouselContextValue {
  api: CarouselApi | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel.Root />');
  }
  return context;
}

export interface CarouselRootProps extends HTMLAttributes<HTMLDivElement> {
  opts?: EmblaOptionsType;
  setApi?: (api: CarouselApi) => void;
  orientation?: 'horizontal' | 'vertical';
}

export const CarouselRoot = forwardRef<HTMLDivElement, CarouselRootProps>(
  ({ children, className, opts, orientation = 'horizontal', setApi, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    useEffect(() => {
      if (!emblaApi || !setApi) {
        return;
      }
      setApi(emblaApi);
    }, [emblaApi, setApi]);

    useEffect(() => {
      if (!emblaApi) {
        return;
      }

      onSelect(emblaApi);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);

      return () => {
        emblaApi?.off('select', onSelect);
      };
    }, [emblaApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          api: emblaApi,
          canScrollNext,
          canScrollPrev,
          scrollNext,
          scrollPrev,
        }}
      >
        <section
          aria-label="Carousel"
          aria-roledescription="carousel"
          className={className}
          onKeyDownCapture={handleKeyDown}
          ref={ref}
          {...props}
        >
          <div ref={emblaRef}>
            <div>{children}</div>
          </div>
        </section>
      </CarouselContext.Provider>
    );
  },
);
CarouselRoot.displayName = 'CarouselRoot';
