import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-3 md:flex md:justify-between md:items-center h-16 font-medium px-4">
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
        <div className="flex justify-end md:ml-auto">
          <button>
            <img
              src="../src/assets/header/cart.png"
              className="h-10 w-10 hover:scale-110 duration-300"
              alt="Shopping Cart"
            />
          </button>
        </div>
      </div>
    </>
  );
}
