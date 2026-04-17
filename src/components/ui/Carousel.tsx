import { useState } from "react"

type Card = {
  id: number
  title: string
  description: string
  image: React.ReactNode
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
    <div className="carousel-wrapper">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * cardWidth}%)` }}
        >
          {cards.map((card) => (
            <div
              className="carousel-card"
              key={card.id}
              style={{ minWidth: `calc(${cardWidth}% - 12px)` }}
            >
              <div className="card-image">{card.image}</div>
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
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