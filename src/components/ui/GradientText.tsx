export const GradientText = ({ children, classNames }: { children: React.ReactNode; classNames?: string }) => {
    return (
        <h2 className={classNames}>
            {children}
        </h2>
    )
}