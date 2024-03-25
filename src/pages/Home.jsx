import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;