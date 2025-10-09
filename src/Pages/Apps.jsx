import { Search } from "lucide-react";
import AppsCard from "../Components/AppsCard";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import { useState } from "react";
import ErrorSearch from "./ErrorSearch";
import Spinner from "../Components/Spinner";

const Apps = () => {
    const [search, setSearch] = useState('')
    const { apps, } = useApps()
    const term = search.trim().toLowerCase()
    const searchApps = term
        ? apps.filter(product => product.title.toLowerCase().includes(term))
        : apps

    return (
        <Container>
            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-5xl mt-20">Our All Applications</h1>
                <p className="gray mt-5 mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className="flex justify-between mb-8">
                    <p className="font-semibold md:text-xl lg:text-2xl">({searchApps.length}) Apps Found</p>
                    <label className="input">
                        <Search className="h-4 gray" />
                        <input onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            required
                            placeholder="Search"
                            value={search} />
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-3 lg:mx-auto">
                    {
                        (searchApps.length) ? searchApps.map(app => <AppsCard key={app.id} app={app} />)
                            : <ErrorSearch />
                    }
                </div>
            </div>
        </Container>
    );
};

export default Apps;