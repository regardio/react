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
import { cn } from '../utils/cn';

export type CarouselApi = EmblaCarouselType;

interface CarouselContextValue {
  api: CarouselApi | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  opts?: EmblaOptionsType;
  setApi?: (api: CarouselApi) => void;
  orientation?: 'horizontal' | 'vertical';
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
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
          className={cn('relative', className)}
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
Carousel.displayName = 'Carousel';

const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('flex', className)}
        ref={ref}
        {...props}
      />
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label'?: string;
}

const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    return (
      // biome-ignore lint/a11y/useSemanticElements: False positive
      <div
        aria-roledescription="slide"
        className={cn('min-w-0 shrink-0 grow-0', className)}
        ref={ref}
        role="group"
        {...props}
      />
    );
  },
);
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { canScrollPrev, scrollPrev } = useCarousel();

    return (
      <button
        className={cn('disabled:opacity-50', className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { canScrollNext, scrollNext } = useCarousel();

    return (
      <button
        className={cn('disabled:opacity-50', className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);
CarouselNext.displayName = 'CarouselNext';

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel };
