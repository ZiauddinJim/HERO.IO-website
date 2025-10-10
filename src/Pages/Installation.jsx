import { useEffect, useState } from "react";
import Container from "../Components/Container";
import InstallationCard from "../Components/InstallationCard";
import ErrorInstall from "../Error/ErrorInstall";
import { Bounce, toast } from "react-toastify";
import Spinner from "../Components/Spinner";

const Installation = () => {
    const [installation, setInstallation] = useState([])
    const [sort, setSort] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('install'))
        saveData && setInstallation(saveData)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])
    if (loading) return <Spinner />
    if (!installation.length) return <ErrorInstall />

    const handleRemove = (id) => {
        const removeData = JSON.parse(localStorage.getItem('install'))
        let updateData = removeData.filter(p => p.id !== id)
        setInstallation(updateData)
        localStorage.setItem('install', JSON.stringify(updateData))
        toast.success(`App is Uninstall!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    const sortItem = (() => {
        if (sort === ('price-asc')) {
            return [...installation].sort((a, b) => a.downloads - b.downloads)
        }
        else if (sort === ('price-desc')) {
            return [...installation].sort((a, b) => b.downloads - a.downloads)
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
                            <option value='none'>Sort by Download</option>
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