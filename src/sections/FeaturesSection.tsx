import { Carousel } from "../components/ui/Carousel"

export const FeaturesSection = () => {
  const cards = [
    {
      id: 1,
      title: "Point of sale",
      description: "Manage orders and payments from one interface.",
      image: <img src="/pos.png" alt="POS" />
    },
    {
      id: 2,
      title: "Self-service",
      description: "Let customers order via kiosk.",
      image: <img src="/kiosk.png" alt="Kiosk" />
    },
  ]
  return (
    <section className="feature-section-height">
      <h2 className="text-center feature-section-heading">More ways Grafterr can help you grow your business</h2>
      <p className="text-center feature-section-description">An award-winning, end-to-end restaurant technology & payments platform, designed to streamline food service and automate complex venue operations</p>

      <Carousel cards={cards} visibleCount={3} />
    </section>
  )
}
