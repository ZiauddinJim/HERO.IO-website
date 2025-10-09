import { Search } from "lucide-react";
import AppsCard from "../Components/AppsCard";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import { useEffect, useState } from "react";
import ErrorSearch from "./ErrorSearch";
import Spinner from "../Components/Spinner";

const Apps = () => {
    const [search, setSearch] = useState('')
    // const term = search.trim().toLowerCase()
    const [term, setTerm] = useState('')
    const { apps, loading, setLoading } = useApps()

    useEffect(() => {
        if (search === '') {
            setTerm('')
            return
        }
        setLoading(true)
        const timer = setTimeout(() => {
            setTerm(search.trim().toLowerCase())
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [search, setLoading])

    const searchApps = term
        ? apps.filter(product => product.title.toLowerCase().includes(term))
        : apps;

    // const handleSearch = (e) => {
    //     setLoading(true)
    //     setSearch(e.target.value)
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 500);
    // }

    // if (loading) return <Spinner />

    return (
        <Container>
            <div className="text-center mb-20 mx-3 lg:mx-auto">
                <h1 className="font-bold text-3xl lg:text-5xl mt-20">Our All Applications</h1>
                <p className="gray mt-5 mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className="flex justify-between mb-8">
                    <p className="font-semibold md:text-xl lg:text-2xl">({searchApps.length}) Apps Found</p>
                    <label className="input">
                        <Search className="h-4 gray" />
                        <input
                            type="search"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="outline-none"
                        />
                    </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-3 lg:mx-auto">
                    {loading
                        ? <div className="col-span-4"><Spinner /></div>
                        : searchApps.length ?
                            searchApps.map(app => <AppsCard key={app.id} app={app} />)
                            : <ErrorSearch />
                    }
                </div>
            </div>
        </Container>
    );
};

export default Apps;