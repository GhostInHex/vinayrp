"use client"

import {
  useEffect,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import Image from "next/image"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/ui/dialog"

import type { ProjectTourSlide } from "../../types/projects"

function subscribeReducedMotion(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
  preference.addEventListener("change", onChange)
  return () => preference.removeEventListener("change", onChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getServerReducedMotion() {
  return false
}

function ScreenshotFrame({
  slide,
  sizes,
  aspectClass = "aspect-video",
  original = false,
}: {
  slide: ProjectTourSlide
  sizes: string
  aspectClass?: string
  original?: boolean
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-line bg-muted",
        aspectClass
      )}
    >
      {slide.crop === "hero" ? (
        <div className="absolute inset-x-0 top-1/2 aspect-[1.9/1] -translate-y-1/2 overflow-hidden">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes={sizes}
            unoptimized={original}
            draggable={false}
            className="object-cover"
            style={{ objectPosition: slide.cropPosition ?? "top" }}
          />
        </div>
      ) : (
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes={sizes}
          unoptimized={original}
          draggable={false}
          className={cn("object-contain", !original && "p-2")}
        />
      )}
    </div>
  )
}

function ScreenshotViewer({ slide }: { slide: ProjectTourSlide }) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [zoom, setZoom] = useState(1)
  const imageHeight = slide.crop === "hero" ? slide.width / 1.9 : slide.height

  useEffect(() => {
    const element = viewportRef.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => {
      setViewport({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const fitScale = Math.min(
    viewport.width / slide.width,
    viewport.height / imageHeight,
    1
  )
  const width = Math.max(1, slide.width * fitScale * zoom)
  const height = Math.max(1, imageHeight * fitScale * zoom)

  return (
    <>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={zoom <= 1}
          onClick={() => setZoom((value) => Math.max(1, value / 2))}
          aria-label="Zoom out"
        >
          <ZoomOutIcon aria-hidden />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={zoom >= 8}
          onClick={() => setZoom((value) => Math.min(8, value * 2))}
          aria-label="Zoom in"
        >
          <ZoomInIcon aria-hidden />
        </Button>
        <Button variant="outline" onClick={() => setZoom(1)}>
          Fit to screen
        </Button>
        <span
          className="text-xs text-muted-foreground tabular-nums"
          role="status"
        >
          {Math.round(fitScale * zoom * 100)}%
        </span>
        <p className="w-full text-xs text-muted-foreground sm:ml-auto sm:w-auto">
          Zoom in, then scroll to read the details.
        </p>
      </div>
      <div
        ref={viewportRef}
        className="min-h-0 flex-1 touch-pan-x touch-pan-y touch-pinch-zoom overflow-auto overscroll-contain rounded-lg bg-muted focus-visible:outline-2 focus-visible:outline-ring"
        tabIndex={0}
        role="region"
        aria-label={`${slide.title} zoomable screenshot`}
      >
        <div
          className="grid min-h-full min-w-full place-items-center"
          style={{ width, height }}
        >
          <div style={{ width, height }}>
            <ScreenshotFrame
              slide={slide}
              sizes="100vw"
              aspectClass="h-full"
              original
            />
          </div>
        </div>
      </div>
    </>
  )
}

function SlideCaption({ slide }: { slide: ProjectTourSlide }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <h4 className="text-sm leading-snug font-medium">{slide.title}</h4>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {slide.description}
      </p>
    </div>
  )
}

export function ProjectTour({
  title,
  slides,
}: {
  title: string
  slides: ProjectTourSlide[]
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [, forceUpdate] = useReducer((state: number) => state + 1, 0)
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion
  )

  useEffect(() => {
    if (!api) return
    api.on("select", forceUpdate)
    api.on("reInit", forceUpdate)
    api.on("slidesInView", forceUpdate)

    return () => {
      api.off("select", forceUpdate)
      api.off("reInit", forceUpdate)
      api.off("slidesInView", forceUpdate)
    }
  }, [api, forceUpdate])

  if (slides.length === 0) return null

  const count = slides.length
  const selectedIndex = api?.selectedScrollSnap() ?? 0
  const snapCount = api?.scrollSnapList().length ?? count
  const inView = api?.slidesInView() ?? []
  const canScrollPrev = api?.canScrollPrev() ?? false
  const canScrollNext = api?.canScrollNext() ?? false
  const rangeStart =
    inView.length > 0
      ? Math.min(...inView) + 1
      : Math.min(selectedIndex + 1, count)
  const rangeEnd = inView.length > 0 ? Math.max(...inView) + 1 : rangeStart
  const progress = snapCount > 0 ? (selectedIndex + 1) / snapCount : 0

  return (
    <section
      className="mx-auto w-full max-w-lg min-w-0"
      aria-label={`${title} product tour`}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium">Product tour</p>
        <p className="text-xs text-muted-foreground md:hidden">
          Swipe to explore
        </p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          containScroll: "trimSnaps",
          inViewThreshold: 0.5,
          duration: prefersReducedMotion ? 0 : undefined,
        }}
        className="w-full"
        role="group"
        aria-label={`${title} screenshot tour`}
      >
        <CarouselContent className="-ml-2">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full pl-2">
              <div className="flex min-w-0 flex-col gap-2">
                <Dialog>
                  <DialogTrigger
                    className="group relative block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    aria-label={`View ${slide.title} screenshot enlarged`}
                  >
                    <ScreenshotFrame
                      slide={slide}
                      sizes="(min-width: 640px) 512px, 100vw"
                    />
                    <span className="absolute right-2 bottom-2 rounded-md bg-background p-2 text-foreground">
                      <ExpandIcon className="size-4" aria-hidden />
                    </span>
                  </DialogTrigger>
                  <DialogContent className="flex h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-none flex-col gap-3 overflow-hidden p-3 sm:max-w-none sm:p-5">
                    <DialogHeader className="shrink-0 pr-10">
                      <DialogTitle>{slide.title}</DialogTitle>
                      <DialogDescription>{slide.description}</DialogDescription>
                    </DialogHeader>
                    <ScreenshotViewer slide={slide} />
                  </DialogContent>
                </Dialog>
                <SlideCaption slide={slide} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pointer-events-none absolute inset-x-0 top-0 aspect-video">
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-auto absolute top-1/2 left-2 size-11 -translate-y-1/2 bg-background text-foreground shadow-sm hover:bg-muted dark:bg-background dark:hover:bg-muted"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ChevronLeftIcon aria-hidden />
            <span className="sr-only">Previous {title} screenshot</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-auto absolute top-1/2 right-2 size-11 -translate-y-1/2 bg-background text-foreground shadow-sm hover:bg-muted dark:bg-background dark:hover:bg-muted"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ChevronRightIcon aria-hidden />
            <span className="sr-only">Next {title} screenshot</span>
          </Button>
        </div>
      </Carousel>
      <div className="mt-3 flex items-center gap-3">
        <div
          className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-muted"
          role="presentation"
        >
          {prefersReducedMotion ? (
            <div
              className="h-full rounded-full bg-foreground/70"
              style={{ width: `${progress * 100}%` }}
            />
          ) : (
            <motion.div
              className="h-full origin-left rounded-full bg-foreground/70"
              initial={false}
              animate={{ transform: `scaleX(${progress})` }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          )}
        </div>
        <p className="text-xs text-muted-foreground tabular-nums" aria-hidden>
          {rangeStart === rangeEnd ? rangeStart : `${rangeStart}–${rangeEnd}`}{" "}
          of {count}
        </p>
        <p className="sr-only" role="status">
          {rangeStart === rangeEnd
            ? `Screenshot ${rangeStart}`
            : `Screenshots ${rangeStart} to ${rangeEnd}`}{" "}
          of {count}
        </p>
      </div>
    </section>
  )
}
