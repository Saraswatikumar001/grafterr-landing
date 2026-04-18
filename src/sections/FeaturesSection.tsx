import { Carousel } from "../components/ui/Carousel"

export const FeaturesSection = () => {
  const cards = [
    {
      id: 1,
      title: "Point of sale",
      image: "/images/point-of-sale-image.png"
    },
    {
      id: 1,
      title: "Point of sale",
      image: "/images/point-of-sale-image.png"
    },
    {
      id: 1,
      title: "Point of sale",
      image: "/images/point-of-sale-image.png"
    }
  ]
  return (
    <section className="feature-section-height">
      <div className="w-874px">
        <h2 className="text-center feature-section-heading">More ways Grafterr can help you grow your business</h2>
        <p className="text-center feature-section-description mb-5">An award-winning, end-to-end restaurant technology & payments platform, designed to streamline food service and automate complex venue operations</p>
      </div>

      <div className="carousel">
        <Carousel cards={cards} />
      </div>
    </section>
  )
}
