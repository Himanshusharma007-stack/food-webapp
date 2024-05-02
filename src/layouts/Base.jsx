import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import LandingPage from "./pages/Landing.jsx";
import LandingPage from "../pages/Landing";

export default function Base() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <LandingPage />
  );
}
