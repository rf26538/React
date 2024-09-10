import Card from "./Card";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import {API_URL} from "../utils/constants";
import Shimmer from "./Shimmer";

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

    // const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [listOfFilterdRestaurants, setlistOfFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState();

    /**
     * if no dependency array use effed will called after every render
     *  if dependency array is empty [] use effect will be called initial render only
     *  if we have something as depency array [something] when the dependency array is called
     */
    useEffect(() => {
        console.log("use Effect called");
        fetchData();
        // setListOfRestaurant(resList);
        // setlistOfFilterdRestaurants(resList);
    }, [])

    const fetchData = async () => {
         /**
         * We need to enable corrs policy to use the third party APIs
         */
        const data = await fetch(API_URL);
        const json = await data.json();
        /**
         * We can set the APIs data like below
         * Why we are using optinal chaing ? read about it
         * We can use the json object like this also json.data.cards[2].data.data.cards
        */
        const resList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
        setListOfRestaurant(resList);
        setlistOfFilterdRestaurants(resList);
        // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    console.log("renderd called");

    if(listOfRestaurants.length === 0) {
        /**
         * return <h3>Loading....</h3>
         * Using a sppiner is not a good way use insted of it --Shimmer UI--.
         */
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    {/**
                     * Reconceliation is happening here
                     * by re-rending when a little change is happening
                     */
                     }
                   <input type="text" placeholder="search" value={searchText} onChange={(e) => {
                       setSearchText(e.target.value);
                   }}></input>
                   <button onClick={() => {
                        console.log(searchText);
                        const filterdRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setlistOfFilterdRestaurants(filterdRestaurants);
                   }}>Search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick={() => {
                    const filterdList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setlistOfFilterdRestaurants(filterdList);
                    console.log(filterdList); 
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
                {
                     /**
                     * Componets need to have unique id every time 
                     *  Do not use index as key
                     */

                     listOfFilterdRestaurants.map((restaurant, index) => {
                       return <Card key={restaurant.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
}

export default Body;