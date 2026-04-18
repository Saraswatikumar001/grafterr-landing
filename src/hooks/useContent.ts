import { useState, useEffect, useCallback } from "react"
import { fetchHeroContent, fetchFeaturesContent } from "../services/api"
import type content from "../data/content.json"

type HeroContent = typeof content.hero
type FeaturesContent = typeof content.featuresSection

type ContentState<T> = {
    data: T | null
    loading: boolean
    error: string | null
}

export const useHeroContent = () => {
    const [state, setState] = useState<ContentState<HeroContent>>({
        data: null,
        loading: true,
        error: null,
    })

    const fetch = useCallback(async () => {
        setState({ data: null, loading: true, error: null })
        try {
            const data = await fetchHeroContent()
            setState({ data, loading: false, error: null })
        } catch (err) {
            setState({ data: null, loading: false, error: "Failed to load hero content." })
        }
    }, [])

    useEffect(() => {
        fetch()
    }, [fetch])

    return { ...state, retry: fetch }
}

export const useFeaturesContent = () => {
    const [state, setState] = useState<ContentState<FeaturesContent>>({
        data: null,
        loading: true,
        error: null,
    })

    const fetch = useCallback(async () => {
        setState({ data: null, loading: true, error: null })
        try {
            const data = await fetchFeaturesContent()
            setState({ data, loading: false, error: null })
        } catch (err) {
            setState({ data: null, loading: false, error: "Failed to load features content." })
        }
    }, [])

    useEffect(() => {
        fetch()
    }, [fetch])

    return { ...state, retry: fetch }
}