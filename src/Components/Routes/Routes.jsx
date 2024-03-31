import Route from "../Route/Route";
import { FiMenu } from "react-icons/fi";
const Cards = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '*', name: 'Not Found' }
    ];

    return (
        <div>
            <h2 className="md:hidden ml-4"><FiMenu /></h2>
            <div className="bg-gray-200 p-4 rounded-lg">
                <div className="md:flex justify-between">
                    {
                        routes.map(route => <Route key={route.id} route={route}></Route>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;