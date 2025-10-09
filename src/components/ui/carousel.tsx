import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

interface CarouselContextType {
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

const CarouselContext = React.createContext<CarouselContextType | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className = "", autoPlay = false, autoPlayInterval = 3000 }, ref) => {
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(true)
    const carouselRef = React.useRef<HTMLDivElement>(null)

    const scrollPrev = React.useCallback(() => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.clientWidth
        carouselRef.current.scrollBy({ left: -scrollWidth, behavior: "smooth" })
      }
    }, [])

    const scrollNext = React.useCallback(() => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.clientWidth
        carouselRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" })
      }
    }, [])

    const checkScrollability = React.useCallback(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        setCanScrollPrev(scrollLeft > 0)
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth)
      }
    }, [])

    React.useEffect(() => {
      const carousel = carouselRef.current
      if (carousel) {
        carousel.addEventListener("scroll", checkScrollability)
        checkScrollability()
        return () => carousel.removeEventListener("scroll", checkScrollability)
      }
    }, [checkScrollability])

    React.useEffect(() => {
      if (autoPlay) {
        const interval = setInterval(() => {
          if (canScrollNext) {
            scrollNext()
          } else {
            // Reset to beginning
            if (carouselRef.current) {
              carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
            }
          }
        }, autoPlayInterval)

        return () => clearInterval(interval)
      }
    }, [autoPlay, autoPlayInterval, canScrollNext, scrollNext])

    return (
      <CarouselContext.Provider
        value={{
          canScrollPrev,
          canScrollNext,
          scrollPrev,
          scrollNext,
        }}
      >
        <div ref={ref} className={`relative ${className}`}>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex ${className}`} {...props} />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex-shrink-0 ${className}`} {...props} />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className = "", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      ref={ref}
      className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-4 w-4 mx-auto" />
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className = "", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      ref={ref}
      className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4 mx-auto" />
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselProps,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}