import { useEffect, useState } from "react";
import Container from "../Components/Container";
import InstallationCard from "../Components/InstallationCard";
import ErrorInstall from "./ErrorInstall";

const Installation = () => {
    const [installation, setInstallation] = useState([])
    const [sort, setSort] = useState([])

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('install'))
        saveData && setInstallation(saveData)
    }, [])

    if (!installation.length) return <ErrorInstall />

    const handleRemove = (id) => {
        const removeData = JSON.parse(localStorage.getItem('install'))
        let updateData = removeData.filter(p => p.id !== id)
        setInstallation(updateData)
        localStorage.setItem('install', JSON.stringify(updateData))
    }

    const sortItem = (() => {
        if (sort === ('price-asc')) {
            return [...installation].sort((a, b) => a.size - b.size)
        }
        else if (sort === ('price-desc')) {
            return [...installation].sort((a, b) => b.size - a.size)
        } else return installation;
    })();
    return (
        <Container>
            <div className="my-10">
                <div className="text-center">
                    <h1 className="font-bold text-3xl lg:text-5xl">Your Installed Apps</h1>
                    <p className="gray mt-5 mb-10">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex justify-between mb-8 mx-3 lg:mx-auto">
                    <p className="font-semibold text-2xl">({sortItem.length}) Apps Found</p>

                    <label className="from-control w-full max-w-xs">
                        <select className="select" value={sort} onChange={e => setSort(e.target.value)}>
                            <option value='none'>Sort by Size</option>
                            <option value='price-asc'>Low-High</option>
                            <option value='price-desc'>High-Low</option>
                        </select>
                    </label>
                </div>
                <InstallationCard handleRemove={handleRemove} installation={sortItem} />
            </div>
        </Container>
    );
};

export default Installation;