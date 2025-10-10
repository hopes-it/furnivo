import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";

// named export if many are export, import like { router, routes }
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
// ]);

// default export if only one export, import like = import router from ''
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/wish-list",
        element: <WishList />,
      },
    ],
  },
  // {
  //   path: "",
  //   element: <ErrorPage></ErrorPage>,
  // },
]);

export default router;
