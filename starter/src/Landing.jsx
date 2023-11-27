import { useLoaderData } from "react-router-dom";
import axios from "axios";
import FoodList from "./components/FoodList";
import SearchForm from "./components/SearchForm";

const getFoodURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const response = await axios.get(`${getFoodURL}${searchTerm}`);
  return { meals: response.data.meals, searchTerm };
};

const Landing = () => {
  const { meals, searchTerm } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <FoodList meals={meals} />
    </>
  );
};

export default Landing;
