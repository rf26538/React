import { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + "restaurantId=425&submitAction=ENTER")
        const json = await data.json();

        const menuInfo = json?.data?.cards[2]?.card?.card?.info;
        console.log(menuInfo);
        setResInfo(menuInfo);  
    }

    // const {name, cuisines, cloudinaryImageId, costForTwoMessage, totalRatingsString} = resInfo;
    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.cuisines.join(", ")}</h2>
            <h2>{resInfo.costForTwoMessage}</h2>
            <h2>{resInfo.totalRatingsString}</h2>
            <ul>
                {resInfo}
                <li></li>
                <li></li>
                <li>Pizaa</li>
                <li>coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;