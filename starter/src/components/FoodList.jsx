import Wrapper from "../assets/wrappers/CocktailList";
import FoodCard from "./FoodCard";

const FoodList = ({ meals }) => {
  if (!meals) {
    return <h4 style={{ textAlign: center }}>No Matching Meals Found....</h4>;
  }

  const formattedMeals = meals.map((eachMeal) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = eachMeal;
    return {
      id: idMeal,
      name: strMeal,
      img: strMealThumb,
      info: strCategory,
      region: strArea,
    };
  });

  return (
    <Wrapper>
      {formattedMeals.map((item) => {
        return <FoodCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default FoodList;
