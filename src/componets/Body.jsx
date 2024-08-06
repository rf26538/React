import Card from "./Card";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurentLists, setRestaurentLists] = useState([]);
    // const [restaurentLists, setRestaurentLists] = useState(resList);

    useEffect(() => {
        // fetchData();
        setRestaurentLists(resList);
    } , []);

    // const fetchData = async () => {
    //     const listReataurant = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );

    //     const json = await data.json();

    //     setRestaurentLists(json.data.crads[2].data.data.cards);

    // Optional Chaining (instead of causing an error if a reference is nullish (null or undefined))
    //     setRestaurentLists(json?.data?.crads[2]?.data?.data?.cards);
    // }

    // Conditional rendaring
    if(restaurentLists.length === 0) {
        return <Shimmer/>
    }

    // USe ternary oprator to Shimmer or Show data
    // return restaurentLists.length === 0 ? (<Shimmer />) : ( <div></div>)
    return (
        <div className="body">
            <div className="search">Search</div>
            <button className="filter-btn" 
            onClick={() => {
                const filterdList = restaurentLists.filter(
                    (res) => res.info.avgRating > 4.0
                );
                setRestaurentLists(filterdList)
            }}
            >Top rated resturants</button>
            <div className="res-container">
                {
                    restaurentLists.map( function (resturent, index) {
                        return <Card key={resturent.info.id} resData={resturent}/>
                   })
                }
            </div>
        </div>
    );
}

export default Body;