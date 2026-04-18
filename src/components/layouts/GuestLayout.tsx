export const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container d-flex justify-content-center align-center flex-column">
            {children}
        </div>
    );
};
