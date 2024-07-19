import Card from "./Card";
import resList from "../utils/mockdata";

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

export default Body;