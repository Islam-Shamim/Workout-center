import Feature from "./Feature";

const Member = ({member}) => {
    const {name,price,features} = member;
    //console.log(features)
    return (
        <div className="flex flex-col bg-green-400 m-4 p-4 rounded-lg text-center">
            <p className="my-2"><span className="text-7xl">{price}</span><span className="text-xl">/month</span></p>
            <h3 className="my-4 text-2xl font-bold">{name}</h3>
            <p className="ml-6 flex-grow">
                {
                    features.map((feature,idx) =><Feature key={idx} feature={feature}></Feature>)
                }
            </p>
            <button className="w-full bg-blue-200 rounded py-2 hover:bg-blue-400">Buy Now</button>
        </div>
    );
};

export default Member;