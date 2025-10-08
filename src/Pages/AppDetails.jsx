import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import Container from "../Components/Container";
import assets from "../assets/assets";
import { formatter } from "../Util/Util";
import Charts from "../Components/Charts";


const AppDetails = () => {
    const { id } = useParams()
    const { apps } = useApps()
    const appDetails = apps.find(app => app.id === Number(id)) || {}
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = appDetails

    const dataDetails = [
        { id: 1, image: assets.downloadIcon, digit: formatter.format(downloads) },
        { id: 2, image: assets.ratingIcon, digit: ratingAvg },
        { id: 3, image: assets.reviewIcon, digit: formatter.format(reviews) },
    ]
    return (
        <Container>
            <div className="my-20">
                <div className="flex flex-col lg:flex-row gap-10 mx-3 lg:mx-auto items-center  border-b-2 border-gray-300 pb-10">
                    <figure className="">
                        <img src={image} alt={title} className="rounded-2xl h-52 w-52 lg:h-72 lg:w-72 shadow-2xl" />
                    </figure>
                    <div className="flex-1">
                        <p className="font-bold text-3xl">{title}</p>
                        <p className="gray mt-3 pb-5 border-b-2 border-gray-300">Developed by <span className="gradient bg-clip-text text-transparent font-semibold">{companyName}</span></p>
                        <div className="mt-5 flex flex-wrap justify-items-start gap-6 lg:gap-20">
                            {dataDetails.map(d => {
                                return (<div key={d.id}>
                                    <img src={d.image} alt="" />
                                    <p className="gray my-2">Downloads</p>
                                    <p className="font-bold lg:font-extrabold text-2xl lg:text-4xl">{d.digit} </p>
                                </div>
                                )
                            })}
                        </div>
                        <div className="btn mt-5 bg-green animate-pulse text-white">Install Now ({size} MB)</div>
                    </div>
                </div>
                <Charts ratings={ratings} />
                <div className="mt-5 mb-16 border-t-2 border-gray-300">
                    <p className='text-2xl font-semibold my-5'>Description</p>
                    <p className="gray">{description}</p>
                </div>
            </div>
        </Container>
    );
};

export default AppDetails;