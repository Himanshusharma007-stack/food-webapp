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
import { Auth0Provider } from "@auth0/auth0-react";
import LandingPage from "./pages/Landing.jsx";

const router = createBrowserRouter([
  {
    path: "/food-webapp/homepage",
    element: <LandingPage />,
  },
  {
    path: "/food-webapp/",
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
  <Auth0Provider
    domain={
      import.meta.env.VITE_AUTH_DOMAIN || "dev-xehmosrod5wqrpnk.us.auth0.com"
    }
    clientId={
      import.meta.env.VITE_AUTH_CLIENTID || "lPKaDSHQN0JKfeoVT44wckEk8qDnbxjG"
    }
    authorizationParams={{
      redirect_uri:
        import.meta.env.VITE_AUTH_LOGIN_URL ||
        "https://himanshusharma007-stack.github.io/food-webapp/",
    }}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Auth0Provider>
);
