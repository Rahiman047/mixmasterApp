import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Food, Error, HomeLayout, Landing, NewsLetter } from "./index";

import { loader as LandingLoader } from "./Landing";

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
      { path: "food", element: <Food /> },
      { path: "newsletter", element: <NewsLetter /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
