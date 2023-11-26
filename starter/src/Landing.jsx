import { useLoaderData } from "react-router-dom";
import axios from "axios";

const getFoodURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${getFoodURL}${searchTerm}`);
  return { meals: response.data.meals, searchTerm };
};

const Landing = () => {
  const { meals, searchTerm } = useLoaderData();
  console.log(meals);
  return <div>Landing</div>;
};

export default Landing;
