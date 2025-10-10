import { Link } from "react-router";
import assets from "../assets/assets";

const Error404 = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center my-20">
            <img src={assets.error404} alt="Error 404" className='w-60 h-60' />
            <p className="text-4xl font-semibold mt-3">Oops, page not found!</p>
            <p className="gray mt-2 mb-4">The page you are looking for is not available.</p>
            <Link to={'/'} className="btn gradient text-white px-5">Go Back!</Link>
        </div>
    );
};

export default Error404;