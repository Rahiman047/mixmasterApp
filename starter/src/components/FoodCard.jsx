import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const FoodCard = ({ id, name, img, info, region }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={img} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{region}</h5>
        <p>{info}</p>
        <Link to={`/food/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

export default FoodCard;
