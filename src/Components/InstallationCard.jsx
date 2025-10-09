import assets from '../assets/assets';
import { formatter } from '../Util/Util';

const InstallationCard = ({ installation, handleRemove }) => {

    return (
        <div>
            {
                installation.map(i => {
                    const { image, title, downloads, ratingAvg, size, id } = i
                    return (
                        <div key={id} className="flex flex-col md:flex-row justify-between mx-3 md:mx-auto p-2 rounded-lg shadow-sm mb-5">
                            <div className="flex gap-3 justify-center md:justify-start">
                                <img src={image} alt="" className="w-20 h-20 rounded-lg" />
                                <div>
                                    <p className="text-xl font-medium mb-2">{title}</p>
                                    <div className="flex justify-start items-center gap-3">
                                        <div className='text-green-500 rounded flex gap-1 justify-center items-center'>
                                            <img className="h-3 w-3" src={assets.downloadIcon} alt="Download Icon" />{formatter.format(downloads)} </div>
                                        <div className='text-orange-500 rounded flex gap-2 justify-center items-center'>
                                            <img className="h-3 w-3" src={assets.ratingIcon} alt="Download Icon" /> {ratingAvg} </div>
                                        <div className="text-sm">{size} MB</div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => handleRemove(id)} className="btn mt-5 bg-green animate-pulse text-white w-40 
                            mx-auto md:mx-0 md:w-auto hover:scale-105 transition">Uninstall</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default InstallationCard;