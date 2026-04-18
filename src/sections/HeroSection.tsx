import { useHeroContent } from "../hooks/useContent"
import { GradientText } from "../components/ui/GradientText"
import { GradientButton } from "../components/ui/GradientButton"
import { Skeleton } from "../components/ui/Skeleton"
import '../styles/variables.css'

export const HeroSection = () => {
    const { data, loading, error, retry } = useHeroContent()
    console.log(data);
    if (error) {
        return (
            <section className="hero hero--error">
                <p className="error-message">{error}</p>
                <button className="retry-btn" onClick={retry}>Retry</button>
            </section>
        )
    }

    if (loading) {
        return (
            <main className="height-387px d-flex justify-content-center align-center w-874px mx-auto">
                <div className='d-flex justify-content-center align-center' style={{ flexDirection: "column", width: "100%", alignItems: "center", gap: "16px" }}>
                    <Skeleton height="3.5rem" width="55%" borderRadius="8px" />
                    <Skeleton height="3.5rem" width="70%" borderRadius="8px" />
                    <Skeleton height="1.2rem" width="80%" borderRadius="6px" />
                    <Skeleton height="1.2rem" width="65%" borderRadius="6px" />
                    <Skeleton height="48px" width="160px" borderRadius="24px" />
                </div>
            </main>
        )
    }

    return (
        <main className="height-387px d-flex justify-content-center align-center w-874px mx-auto">
            <div className='d-flex justify-content-center align-center' style={{ flexDirection: "column" }}>
                <h2 className='heading-text text-center my-0'>{data!.headlinePrefix}</h2>
                <GradientText classNames="heading-text text-center my-0 gradienttext-color" children={data!.headlineGradient} />
                <h5
                    className='subheading-text text-center'
                    dangerouslySetInnerHTML={{ __html: data!.subheadline }}
                />
                <GradientButton redirectionLink={data!.cta.primary.href} children={data!.cta.primary.label} />
            </div>
        </main>
    )
}
