import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import Banner from '../Components/Banner';
import Container from '../Components/Container';
import useApps from '../Hooks/useApps';

const Home = () => {
    const { apps, } = useApps()
    const homeApps = apps.slice(0, 8)
    return (
        <div>
            <Banner />
            <Container>
                <div className="text-center mb-20">
                    <h1 className="font-bold text-3xl lg:text-5xl mt-10">Trending Apps</h1>
                    <p className="gray my-5">Explore All Trending Apps on the Market developed by us</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-3 lg:mx-auto">
                        {
                            homeApps.map(app => <AppsCard key={app.id} app={app} />)
                        }
                    </div>
                    <Link to={'apps'} className="btn gradient text-white  mt-10 px-5">Show All</Link>
                </div>
            </Container>
        </div>
    );
};

export default Home;