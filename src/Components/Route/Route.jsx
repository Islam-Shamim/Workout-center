const Route = ({route}) => {
    const {name,path} = route;
    return (
        <ul className="my-2">
            <a className="hover:bg-red-800 hover:text-white rounded px-2 py-1" href={path}>{name}</a>
        </ul>
    );
};

export default Route;