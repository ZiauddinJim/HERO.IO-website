import { PropagateLoader } from "react-spinners";
import assets from "../assets/assets";


const Spinner = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-">
            <PropagateLoader color="#632ee3" />
            <img src={assets.logo} alt="" className="h-30 w-30 mx-auto opacity-70 mt-10" />
        </div>
    );
};

export default Spinner;