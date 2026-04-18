import { useState } from "react"
import { ProductCard } from "./ProductCard"

type Card = {
  id: number
  title: string
  image: string
}

type CardCarouselProps = {
  cards: Card[]
  visibleCount?: number
}

export const Carousel = ({ cards, visibleCount = 3 }: CardCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const maxStep = cards.length - visibleCount

  const goTo = (n: number) => {
    setCurrent(Math.max(0, Math.min(n, maxStep)))
  }

  const cardWidth = 100 / visibleCount

  return (
    <div className="carousel-wrapper position-absolute left-0">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * cardWidth}%)` }}
        >
          {cards.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div className="carousel-nav d-flex justify-content-center align-center">
        <button onClick={() => goTo(current - 1)} disabled={current === 0}>&#8592;</button>
        {Array.from({ length: maxStep + 1 }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
        <button onClick={() => goTo(current + 1)} disabled={current === maxStep}>&#8594;</button>
      </div>
    </div>
  )
}