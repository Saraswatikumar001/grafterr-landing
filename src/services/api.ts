import content from "../data/content.json"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const randomDelay = () => delay(Math.floor(Math.random() * 500) + 1000)

export const fetchHeroContent = async () => {
    try {
        await randomDelay()
        return content.hero
    } catch (error) {
        throw new Error(`Failed to load hero content: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
}

export const fetchFeaturesContent = async () => {
    try {
        await randomDelay()
        return content.featuresSection
    } catch (error) {
        throw new Error(`Failed to load features content: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
}