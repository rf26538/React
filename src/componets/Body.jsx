import Card from "./Card";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () => {

    /**
     * State veriable - Super power varible -> Hooks
     * Normal Js utility functions
     * Two most importent Hooks we use Most of the time we use these two importent Hook
     * We will use these Hooks lot of times
     * useState() - Superpowerfull state variable
     * useEffect()
     * */

    const [restaurentLists, setRestaurentLists] = useState(resList);

    /** 
     * Normal js variable 
     * With this varible the list is not Changes accordingly that why we need State Hooks
     * */ 

    // let restaurentListsJs =[
    //     {
    //         "info": {
    //             "id": "234875",
    //             "name": "Adil Hotel",
    //             "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    //             "locality": "Rautha Wada",
    //             "areaName": "Chhindwara Locality",
    //             "costForTwo": "₹150 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Biryani",
    //                 "Tandoor"
    //             ],
    //             "avgRating": 4.4,
    //             "parentId": "27123",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "500+",
    //             "sla": {
    //                 "deliveryTime": 39,
    //                 "lastMileTravel": 10.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "35-40 mins",
    //                 "lastMileTravelString": "10.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-07-19 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹150 OFF",
    //                 "subHeader": "ABOVE ₹349",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "orderabilityCommunication": {
    //                 "title": {},
    //                 "subTitle": {},
    //                 "message": {},
    //                 "customIcon": {}
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {},
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "--"
    //                 }
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
    //             "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
    //         },
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
    //             "text": "RESTAURANT_MENU",
    //             "type": "WEBLINK"
    //         },
    //         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // ];
    
    return (
        <div className="body">
            <div className="search">Search</div>
            <button className="filter-btn" 
            onClick={() => {
                const filterdList = restaurentLists.filter(
                    (res) => res.info.avgRating > 4.0
                );
                // console.log(restaurentLists)
                setRestaurentLists(filterdList)
            }}
            >Top rated resturants</button>
            <div className="res-container">
                {
                    /** 
                     * Loop over the array for creating the data dynamically 
                     *  Why we provide key to the component(needs to have unique id) Becouse it helps to resolve re-render issue only appen new data only to it
                     * Help for optimization and impact performance
                     * Never use index as the keys --Bad practice
                     * if dont have uniqueId then use index
                     * Map return Array
                    **/
                    restaurentLists.map( function (resturent, index) {
                        return <Card key={resturent.info.id} resData={resturent}/>
                   })
                }
            </div>
        </div>
    );
}

export default Body;