import { Link } from "react-router-dom"

export const GradientButton = ({ children, redirectionLink }: { children: React.ReactNode, redirectionLink: string }) => {
    return (
        <Link to={redirectionLink} className='text-center get-started-button d-flex justify-content-center align-center'>
            {children}
        </Link>
    )
}
