const MainLayout = ({children, className = ''}: {children: React.ReactNode; className?: string}) => {
    return (
        <div className={`max-w-[1268px] mx-auto px-5 ${className}`}>
            {children}
        </div>
    );
};

export default MainLayout;