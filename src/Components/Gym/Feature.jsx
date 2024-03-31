import { FaRegCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="my-1 flex items-center"><span className="bg-green-400 rounded-full mr-2"><FaRegCheckCircle /></span>{feature}</p>
        </div>
    );
};

export default Feature;