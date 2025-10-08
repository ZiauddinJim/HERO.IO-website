import assets from "../assets/assets";
import { formatter } from "../Util/Util";
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app
    return (
        <Link to={`/apps/${id}`}>
            <div className="card bg-base-100 shadow-sm overflow-hidden hover:scale-102 transition hover:shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-xl object-cover h-64" />
                </figure>
                <div className="card-body p-4 items-centers">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <div className='bg-green-100 text-green-500 py-1.5 px-2.5 rounded flex gap-2 justify-center items-center'>
                            <img className="h-3 w-3" src={assets.downloadIcon} alt="Download Icon" /> {formatter.format(downloads)}</div>
                        <div className='bg-orange-100 text-orange-500 py-1.5 px-2.5 rounded flex gap-2 justify-center items-center'>
                            <img className="h-3 w-3" src={assets.ratingIcon} alt="Download Icon" /> {ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppsCard;