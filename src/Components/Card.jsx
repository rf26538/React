import { CDN_URL } from "../utils/constants";

/**
 * We can destructure props like this
 * const Card = ({resName, cusine, rating, time}) => { return (<h4>{cusine}</h4>) }
 */

const styleCard = {
    backgroundColor: "#f0f0f0",
}

const Card = (props) => {
    const {resData} = props;
    /**
     * We are refactoring for good code 
     *  <h3>{resData.info.name}</h3> instead of this we have done this below
     * const { name } = resData?.info;
     * const Card = ({resName, cusine, rating, time}) => { return (<h4>{cusine}</h4>) }
     */
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
    const { deliveryTime } = resData?.info?.sla;

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                src={CDN_URL+cloudinaryImageId} alt="res-logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default Card;