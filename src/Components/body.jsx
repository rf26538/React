import Card from "./Card";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    // let listOfRestaurants = [
    //     {
    //         "info": {
    //             "id": "576290",
    //             "name": "Chinese Wok",
    //             "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //             "locality": "Indirapuram",
    //             "areaName": "Ghaziabad",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Chinese",
    //                 "Asian",
    //                 "Tibetan",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.3,
    //             "parentId": "61955",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "1.1K+",
    //             "sla": {
    //                 "deliveryTime": 43,
    //                 "lastMileTravel": 3,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "40-45 mins",
    //                 "lastMileTravelString": "3.0 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "90170",
    //             "name": "Burger King",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/1d6a4dbe-8836-4bad-9733-ccf51912067a_90170.jpg",
    //             "locality": "H Block",
    //             "areaName": "Sector 63",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Burgers",
    //                 "American"
    //             ],
    //             "avgRating": 4.4,
    //             "parentId": "166",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "31K+",
    //             "sla": {
    //                 "deliveryTime": 28,
    //                 "lastMileTravel": 2,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "2.0 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
    //         }
    //     }
    // ];

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    useEffect(() => {
        console.log("useEffect cllaed");
    }, [])

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                const filterdList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setListOfRestaurant(filterdList);
                    console.log(filterdList);
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
                {
                     /**
                     * Componets need to have unique id every time 
                     *  Do not use index as key
                     */

                     listOfRestaurants.map((restaurant, index) => {
                       return <Card key={restaurant.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
}

export default Body;