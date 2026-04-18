import { GradientButton } from '../components/ui/GradientButton'
import { GradientText } from '../components/ui/GradientText'
import '../styles/variables.css'
export const HeroSection = () => {
    return (
        <main className="height-387px d-flex justify-content-center align-center w-874px mx-auto">
            <div className='d-flex justify-content-center align-center' style={{ flexDirection: "column" }}>
                <h2 className='heading-text text-center my-0'>Looking for a new</h2>
                <GradientText classNames="heading-text text-center my-0 gradienttext-color" children="technology provider?" />
                <h5 className='subheading-text text-center'>Explore our <strong>success stories</strong> to see how businesses like yours have transformed with Grafterr's technology.</h5>
                <GradientButton children="Learn more" />
            </div>
        </main>
    )
}
