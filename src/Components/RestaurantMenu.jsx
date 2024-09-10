import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect(() => {

    }, []);

    const fetchMenu = async () => {
        const data = fetch("")
    }

   return <div className="menu">
            <h1>Name of restaurant</h1>
            <h2>Menu</h2>

            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Pizaa</li>
                <li>coke</li>
            </ul>
        </div>
}

export default RestaurantMenu;