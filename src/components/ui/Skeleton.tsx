type SkeletonProps = {
    width?: string
    height?: string
    borderRadius?: string
    className?: string
}

export const Skeleton = ({
    width = "100%",
    height = "1rem",
    borderRadius = "8px",
    className = "",
}: SkeletonProps) => (
    <div
        className={`skeleton ${className}`}
        style={{ width, height, borderRadius }}
    />
)