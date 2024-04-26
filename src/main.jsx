import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Base from "./layouts/Base.jsx";
import About from "./pages/About.jsx";
import FoodDetail from "./pages/FoodDetail.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Checkout from "./pages/Checkout.jsx";
import Teams from "./pages/Team.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "food-detail/:id",
        element: <FoodDetail />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
