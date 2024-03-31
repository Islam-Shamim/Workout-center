import { useState } from "react";
import Route from "../Route/Route";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Cards = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '*', name: 'Not Found' }
    ];

    const [open,setOpen] = useState(false)

    return (
        <div>
            <div className="md:hidden" onClick={() =>setOpen(!open)}>
                {
                    open === true ? <AiOutlineMenuUnfold />: <AiOutlineMenu />
                }
                
            </div>
            <div className=" p-4 md:bg-gray-200 rounded-lg">
                <div className={`md:flex justify-between static ${open ?"":"hidden"}`}>
                    {/*duration-1000 absolute ${open ?"top-16":"top-60"}` */}
                    {
                        routes.map(route => <Route key={route.id} route={route}></Route>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;