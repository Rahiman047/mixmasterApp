import { useLoaderData, Link } from "react-router-dom";
import Wrapper from "./assets/wrappers/CocktailPage";
import axios from "axios";

const singleMealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`${singleMealUrl}${id}`);

  return { id, data: response.data };
};

const Cocktail = () => {
  const { data, id } = useLoaderData();

  const singleMeal = data.meals[0];

  console.log(singleMeal);

  const validIngredients = Object.keys(singleMeal)
    .filter(
      (key) =>
        key.startsWith("strIngredient") &&
        singleMeal[key] !== null &&
        singleMeal[key] !== ""
    )
    .map((key) => singleMeal[key]);

  const {
    strMeal: name,
    strMealThumb: img,
    strCategory: info,
    strArea: region,
    strInstructions: instructions,
    strYoutube: ytLink,
  } = singleMeal;

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={img} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Region: </span>
            {region}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : "."}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">Instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Instructions: </span>
            {instructions}
            <br />
            <span className="drink-data">Video Tutorial: </span>
            <a href={ytLink} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
