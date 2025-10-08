import AppsCard from "../Components/AppsCard";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";

const Apps = () => {
    const { apps } = useApps()
    return (
        <Container>
            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-5xl mt-10">Trending Apps</h1>
                <p className="gray my-5">Explore All Trending Apps on the Market developed by us</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-3 lg:mx-auto">
                    {
                        apps.map(app => <AppsCard key={app.id} app={app} />)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Apps;