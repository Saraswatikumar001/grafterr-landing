import { Carousel } from "../components/ui/Carousel"
import { Skeleton } from "../components/ui/Skeleton"
import { useFeaturesContent } from "../hooks/useContent"

export const FeaturesSection = () => {
  const { data, loading, error, retry } = useFeaturesContent()

  if (error) {
    return (
      <section className="feature-section-height d-flex justify-content-center align-center flex-column">
        <p className="error-message">{error}</p>
        <button className="retry-btn" onClick={retry}>Retry</button>
      </section>
    )
  }

  if (loading) {
    return (
      <section className="feature-section-height d-flex justify-content-center align-center flex-column">
        <div className="w-874px d-flex flex-column align-center" style={{ gap: "16px", alignItems: "center" }}>
          <Skeleton height="2.5rem" width="80%" borderRadius="8px" />
          <Skeleton height="2.5rem" width="60%" borderRadius="8px" />
          <Skeleton height="1rem" width="90%" borderRadius="6px" />
          <Skeleton height="1rem" width="75%" borderRadius="6px" />
        </div>
        <div className="carousel" style={{ display: "flex", gap: "35px", marginTop: "2rem" }}>
          {[1, 2, 3].map(i => (
            <Skeleton key={i} height="708px" width="589px" borderRadius="18px" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="feature-section-height d-flex justify-content-center align-center flex-column fade-in">
      <div className="w-874px">
        <h2 className="text-center feature-section-heading">{data!.title}</h2>
        <p
          className="text-center feature-section-description mb-5"
          dangerouslySetInnerHTML={{ __html: data!.subtitle }}
        />
      </div>

      <div className="carousel">
        <Carousel cards={data!.products} />
      </div>
    </section>
  )
}