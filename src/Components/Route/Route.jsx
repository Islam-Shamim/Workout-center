const Route = ({route}) => {
    const {name,path} = route;
    return (
        <ul className="hover:bg-red-800 rounded p-2">
            <a href={path}>{name}</a>
        </ul>
    );
};

export default Route;