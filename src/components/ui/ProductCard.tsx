type Card = {
    id: number
    title: string
    image: string
}

type ProductCardProps = {
    card: Card
}

export const ProductCard = ({ card }: ProductCardProps) => {
    return (
        <div style={{ background: "rgba(250, 250, 250, 1)" }} className="carousel-card">
            <h5>{card.title}</h5>
            <img src={card.image} alt={card.title} />
        </div>
    )
}