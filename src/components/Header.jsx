import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartArr = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="sticky top-0 z-50 mb-3 bg-white grid grid-cols-3 md:flex md:justify-between md:items-center h-16 font-medium px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <button className="flex items-center hover:scale-110 duration-300">
              <img
                src="../src/assets/header/bw-food-icon.png"
                className="h-10 w-10 transition-all"
                alt="PlatterPulse Logo"
              />
              <span className="transition-all">PlatterPulse</span>
            </button>
          </Link>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex md:flex-grow md:gap-8 md:justify-center">
          <li className="hover:scale-110 duration-300">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-500" : ""
              }
            >
              <button>Home</button>
            </NavLink>
          </li>
          <li className="hover:scale-110 duration-300">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-500" : ""
              }
            >
              <button>About</button>
            </NavLink>
          </li>
          <li className="hover:scale-110 duration-300">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isActive ? "text-red-500" : ""
              }
            >
              <button>Contact us</button>
            </NavLink>
          </li>
        </ul>

        {/* Cart */}
        <div className="flex justify-end md:ml-auto hover:scale-110 duration-300">
          <Link to={cartArr?.length ? "/checkout" : ""}>
            <button className="relative">
              <img
                src="../src/assets/header/cart.png"
                className="h-10 w-10"
                alt="Shopping Cart"
              />
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
        </div>
      </div>
    </>
  );
}
