import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../assets/header/cart.png";
import foodIcon from "../assets/header/bw-food-icon.png";
import LoginButton from "./LoginBtn";
import LogoutButton from "./LogoutBtn";
import { useAuth0 } from "@auth0/auth0-react";
import AvatarDropdown from "./Avatar";

export default function Header(props) {
  const cartArr = useSelector((state) => state.cart.items);
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className="sticky top-0 z-50 mb-3 bg-white grid grid-cols-3 md:flex md:justify-between md:items-center h-16 font-medium px-4">
        {/* Logo */}
        <div className="flex items-center">
          {props.hideLinks ? (
            <>
              <img
                src={foodIcon}
                className="h-10 w-10 transition-all"
                alt="PlatterPulse Logo"
              />
              <span className="transition-all">PlatterPulse</span>
            </>
          ) : (
            <Link to="/food-webapp/">
              <button className="flex items-center hover:scale-110 duration-300">
                <img
                  src={foodIcon}
                  className="h-10 w-10 transition-all"
                  alt="PlatterPulse Logo"
                />
                <span className="transition-all">PlatterPulse</span>
              </button>
            </Link>
          )}
        </div>
        

        {/* Navigation */}
        <ul className="hidden md:flex md:flex-grow md:gap-8 md:justify-center">
          {!props.hideLinks && (<>
          <li className="hover:scale-110 duration-300">
            <NavLink
              to="/food-webapp/"
              className={({ isActive, isPending }) =>
                currentPath === "/food-webapp/" ? "text-red-500" : ""
              }
            >
              <button>Home</button>
            </NavLink>
          </li>
          <li className="hover:scale-110 duration-300">
            <NavLink
              to="/food-webapp/about"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-500" : ""
              }
            >
              <button>About</button>
            </NavLink>
          </li>
          <li className="hover:scale-110 duration-300">
            <NavLink
              to="/food-webapp/contactus"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-500" : ""
              }
            >
              <button>Contact us</button>
            </NavLink>
          </li>
          </>)}
        </ul>

        {/* Cart */}
        {!props.hideLinks && <AvatarDropdown />}

       {!props.hideLinks && ( <div className="flex justify-end md:ml-auto hover:scale-110 duration-300">
          <Link to={cartArr?.length ? "/food-webapp/checkout" : ""}>
            <button className="relative">
              <img src={CartIcon} className="h-10 w-10" alt="Shopping Cart" />
              {cartArr?.length > 0 && (
                <>
                  <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium"></span>
                  <span className="absolute top-0 right-0 -mt-2 -mr-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium">
                    {cartArr?.length}
                  </span>
                </>
              )}
            </button>
          </Link>
        </div>)}
      </div>
    </>
  );
}
