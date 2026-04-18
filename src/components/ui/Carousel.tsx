import { useRef, useEffect, useState } from "react"
import { useCarousel } from "../../hooks/useCarousel"
import { ProductCard } from "./ProductCard"
import contentJson from "../../data/content.json"

type Card = {
  id: number
  title: string
  image: string
}

type CardCarouselProps = {
  cards: Card[]
}

const REPEAT = 10

export const Carousel = ({ cards }: CardCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [noTransition, setNoTransition] = useState(false)

  const {
    current,
    trackIndex,
    visibleCount,
    goTo,
    goNext,
    goPrev,
    onTouchStart,
    onTouchEnd,
  } = useCarousel({
    total: cards.length,
    itemsPerView: contentJson.carousel.itemsPerView,
  })

  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.offsetWidth)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const gap = contentJson.carousel.gap
  const cardWidth = viewportWidth > 0
    ? (viewportWidth - gap * (visibleCount - 1)) / visibleCount
    : 0

  const trackCards = Array.from({ length: REPEAT }, () => cards).flat()
  const totalTrackLength = cards.length * REPEAT

  useEffect(() => {
    const buffer = cards.length * 2
    const mid = cards.length * Math.floor(REPEAT / 2)

    if (trackIndex >= totalTrackLength - buffer) {
      const equivalent = mid + (trackIndex % cards.length)
      setNoTransition(true)
      goTo(equivalent)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false))
      })
    }

    if (trackIndex < 0) {
      const equivalent = mid + ((trackIndex % cards.length + cards.length) % cards.length)
      setNoTransition(true)
      goTo(equivalent)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false))
      })
    }
  }, [trackIndex, cards.length, totalTrackLength, goTo])

  const translateX = trackIndex * (cardWidth + gap)

  return (
    <div
      className="carousel-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="carousel-viewport mb-5"
        ref={viewportRef}
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div
          className="carousel-track"
          style={{
            display: "flex",
            gap: `${gap}px`,
            transform: `translateX(-${translateX}px)`,
            transition: noTransition ? "none" : "transform 0.35s ease",
          }}
        >
          {trackCards.map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              style={{ minWidth: `${cardWidth}px`, flexShrink: 0 }}
            >
              <ProductCard card={card} />
            </div>
          ))}
        </div>
      </div>

      {contentJson.carousel.showArrows && (
        <div className="carousel-nav d-flex justify-content-center align-center">
          <button onClick={goPrev}>&#8592;</button>

          {cards.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}

          <button onClick={goNext}>&#8594;</button>
        </div>
      )}
    </div>
  )
}