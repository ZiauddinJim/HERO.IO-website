import { PropagateLoader } from "react-spinners";
import assets from "../assets/assets";


const Spinner = () => {
    return (
        <div className="flex justify-center items-center my-20">
            <PropagateLoader />
            <img src={assets.logo} alt="" />
        </div>
    );
};

export default Spinner;