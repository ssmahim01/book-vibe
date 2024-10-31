const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-60">
            <h2 className="text-5xl font-semibold">Page not Found</h2>
            <p className="text-3xl text-gray-500 font-medium">Status: 404</p>
        </div>
    );
};

export default ErrorPage;