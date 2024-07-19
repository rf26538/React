import React  from "react";
import ReactDOM from "react-dom/client";

const Header  = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="#">login</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
    );
}

const Card = (props) => {
    // console.log(props);

    // Destructuring
    const {resData } = props;

    // optional chaining
    const {
        cloudinaryImageId,
        name,
        avgRating,
        sla,
        cuisines
    } = resData?.info; //Optional chaining whith '?' => resData?.info

    return (
        <div className="res-card" >
            <img
            className="res-logo" 
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{"Ratings"+avgRating}</h4>
            <h4>{"delivery Time : "+sla.deliveryTime}</h4>
        </div>
    );
}

const resList = [
    {
        "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
            "locality": "Rautha Wada",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Tandoor"
            ],
            "avgRating": 4.4,
            "parentId": "27123",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 10.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "10.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "618037",
            "name": "Jai Ganesh Bhojnalaya",
            "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
            "locality": "Railway Colony",
            "areaName": "Bus stand",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Indian",
                "Chinese"
            ],
            "avgRating": 3.7,
            "veg": true,
            "parentId": "368432",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 11,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "11.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/jai-ganesh-bhojnalaya-railway-colony-bus-stand-chhindwara-618037",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "658210",
            "name": "The Fusion Lounge",
            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            "locality": "Triloki nagar",
            "areaName": "Railway Station",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "395453",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 9.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "9.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-fusion-lounge-triloki-nagar-railway-station-chhindwara-658210",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "196341",
            "name": "Rangla Panjab",
            "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
            "locality": "Shankaracharya Nagar",
            "areaName": "Prasia Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "166894",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 13.6,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "13.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 23:40:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rangla-panjab-shankaracharya-nagar-prasia-road-chhindwara-196341",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "150586",
            "name": "Accord International",
            "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
            "locality": "Parasia Road",
            "areaName": "Vishnu Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Continental",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "26828",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 14.3,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "14.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹45"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/accord-international-parasia-road-vishnu-nagar-chhindwara-150586",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "213358",
            "name": "Apni Rasoi Family Dhaba",
            "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
            "locality": "Vishnu Nagar",
            "areaName": "Parasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Indian",
                "South Indian",
                "Chinese"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "35024",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 13.9,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "13.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-chhindwara-213358",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "151649",
            "name": "Hotel Sai Nath & Sai Restaurant",
            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
            "locality": "railway station",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "101802",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 10,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "10.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "FREE ITEM"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-chhindwara-151649",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "151648",
            "name": "Mr. Gurung Momo & Chinese Corner",
            "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
            "locality": "Teacher's Colony",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "140255",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 11.8,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "11.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-07-19 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "ABOVE ₹1500",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-34784ad9-e539-4f2c-ab44-4f66c5cd9054"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-chhindwara-151648",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    /** 
                     * Loop over the array for creating the data dynamically 
                     *  Why we provide key to the component(needs to have unique id) Becouse it helps to resolve        re-render issue only appen new data only to it
                     * Help for optimization and impact performance
                     * Never use index as the keys --Bad practice
                     * if dont have uniqueId then use index
                     * Map return Array
                    **/
                    resList.map( function (resturent, index) {
                        return <Card key={resturent.info.id} resData={resturent}/>
                   })
                }
            </div>
        </div>
    );
}

const Footer  = () => {

}

const AppLayout = () => {
    return (
        <>
           {<Header />}
           {<Body />}
           {<Footer /> }
        </>
    );
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)