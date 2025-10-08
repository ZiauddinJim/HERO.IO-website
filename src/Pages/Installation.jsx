import Container from "../Components/Container";
import InstallationCard from "../Components/InstallationCard";

const Installation = () => {
    return (
        <Container>
            <div className="my-10">
                <div className="text-center">
                    <h1 className="font-bold text-3xl lg:text-5xl">Your Installed Apps</h1>
                    <p className="gray mt-5 mb-10">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex justify-between mb-8 mx-3 lg:mx-auto">
                    <p className="font-semibold text-2xl">(0) Apps Found</p>
                    <label className="from-control w-full max-w-xs">
                        <select className="select">
                            <option value='none'>Sort by Size</option>
                            <option value='price-asc'>Low-High</option>
                            <option value='price-desc'>High-Low</option>
                        </select>
                    </label>
                </div>
                <div className='space-y-7 mt-10'>
                    <InstallationCard />
                </div>
            </div>
        </Container>
    );
};

export default Installation;