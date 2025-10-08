import assets from '../assets/assets';

const InstallationCard = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mx-3 md:mx-auto p-2 rounded-lg shadow-sm">
            <div className="flex gap-3 justify-center md:justify-start">
                <img src={assets.logo} alt="" className="w-20 h-20" />
                <div>
                    <p className="text-xl font-medium mb-2">Title</p>
                    <div className="flex justify-start items-center gap-2">
                        <div className='text-green-500 py-1.5 px-2.5 rounded flex gap-2 justify-center items-center'>
                            <img className="h-3 w-3" src={assets.downloadIcon} alt="Download Icon" />Download </div>
                        <div className='text-orange-500 py-1.5 px-2.5 rounded flex gap-2 justify-center items-center'>
                            <img className="h-3 w-3" src={assets.ratingIcon} alt="Download Icon" /> Rating </div>
                        <div className="text-sm">120 MB</div>
                    </div>
                </div>
            </div>
            <div className="btn mt-5 bg-green animate-pulse text-white w-40 mx-auto md:mx-0 md:w-auto hover:scale-105 transition">Uninstall</div>
        </div>
    );
};

export default InstallationCard;