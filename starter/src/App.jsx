import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Food, Error, HomeLayout, Landing, NewsLetter } from "./index";

import { loader as LandingLoader } from "./Landing";
import { loader as SingleMealLoader } from "./Food";
import { action as newLetterAction } from "./NewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
      },
      { path: "food/:id", element: <Food />, loader: SingleMealLoader },
      { path: "newsletter", element: <NewsLetter />, action: newLetterAction },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
