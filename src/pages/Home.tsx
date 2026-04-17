import { GuestLayout } from "../components/layouts/GuestLayout"
import { FeaturesSection } from "../sections/FeaturesSection"
import { HeroSection } from "../sections/HeroSection"

export const Home = () => {
    return (
        <GuestLayout>
            <HeroSection />
            <FeaturesSection />
        </GuestLayout>
    )
}
