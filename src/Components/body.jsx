import Card from "./Card";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                     /**
                     * Componets need to have unique id every time 
                     *  Do not use index as key
                     */

                    resList.map((restaurant, index) => {
                       return <Card key={restaurant.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
}

export default Body;