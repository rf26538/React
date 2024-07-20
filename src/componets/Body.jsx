import Card from "./Card";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurentLists, setRestaurentLists] = useState(resList);

    useEffect(() => {
        console.log("Use effect called");
    } , []);

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