import { CDN_URL } from "../utils/constents";
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
            src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{"Ratings "+avgRating}</h4>
            <h4>{"delivery Time : "+sla.deliveryTime}</h4>
        </div>
    );
}

export default Card;