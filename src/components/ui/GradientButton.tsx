import { Link } from "react-router-dom"

export const GradientButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Link to={"/get-started"} className='text-center get-started-button d-flex justify-content-center align-center'>
            {children}
        </Link>
    )
}
