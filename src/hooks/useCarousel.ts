import { useState, useCallback, useEffect, useRef } from "react"

type Breakpoint = "mobile" | "tablet" | "desktop"

type UseCarouselProps = {
    total: number
    itemsPerView: Record<Breakpoint, number>
}

const getBreakpoint = (): Breakpoint => {
    if (window.innerWidth <= 640) return "mobile"
    if (window.innerWidth <= 1024) return "tablet"
    return "desktop"
}

export const useCarousel = ({ total, itemsPerView }: UseCarouselProps) => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint)
    const visibleCount = itemsPerView[breakpoint]

    const [trackIndex, setTrackIndex] = useState(0)
    const [current, setCurrent] = useState(0)

    const touchStartX = useRef<number | null>(null)

    const goTo = useCallback((realIndex: number) => {
        const wrapped = ((realIndex % total) + total) % total
        setCurrent(wrapped)
        setTrackIndex(realIndex)
    }, [total])

    const goNext = useCallback(() => goTo(trackIndex + 1), [trackIndex, goTo])
    const goPrev = useCallback(() => goTo(trackIndex - 1), [trackIndex, goTo])

    useEffect(() => {
        const handleResize = () => setBreakpoint(getBreakpoint())
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }, [])

    const onTouchEnd = useCallback((e: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
        touchStartX.current = null
    }, [goNext, goPrev])

    return {
        current,
        trackIndex,
        visibleCount,
        goTo,
        goNext,
        goPrev,
        onTouchStart,
        onTouchEnd,
    }
}