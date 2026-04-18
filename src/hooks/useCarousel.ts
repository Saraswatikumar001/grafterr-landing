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
    const [current, setCurrent] = useState(0)
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint)
    const touchStartX = useRef<number | null>(null)

    const visibleCount = itemsPerView[breakpoint]
    const maxStep = Math.max(0, total - visibleCount)

    const goTo = useCallback((n: number) => {
        setCurrent(prev => Math.max(0, Math.min(n, maxStep)))
    }, [maxStep])

    const goNext = useCallback(() => goTo(current + 1), [current, goTo])
    const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

    // clamp current if visibleCount changes on resize
    useEffect(() => {
        setCurrent(prev => Math.min(prev, maxStep))
    }, [maxStep])

    // track breakpoint on resize
    useEffect(() => {
        const handleResize = () => setBreakpoint(getBreakpoint())
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // touch events
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
        visibleCount,
        goTo,
        goNext,
        goPrev,
        canGoNext: current < maxStep,
        canGoPrev: current > 0,
        onTouchStart,
        onTouchEnd,
    }
}