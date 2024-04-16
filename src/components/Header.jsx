export default function Header() {
  return (
    <>
      <div className="grid grid-cols-3 h-16 items-center font-medium px-4">
        <div>
          <button className="flex items-center hover:scale-110 duration-300">
            <img
              src="../src/assets/header/bw-food-icon.png"
              className="h-10 w-10 transition-all"
            />
            <span className="transition-all">
              PlatterPulse
            </span>
          </button>
        </div>

        <ul className="flex gap-8 justify-center">
          <li className="hover:scale-110 duration-300">
            <button>Home</button>
          </li>
          <li className="hover:scale-110 duration-300">
            <button>About</button>
          </li>
          <li className="hover:scale-110 duration-300">
            <button>Contact us</button>
          </li>
        </ul>

        <div className="flex justify-end mx-4">
          <button>
            <img
              src="../src/assets/header/cart.png"
              className="h-10 w-10 hover:scale-110 duration-300"
            />
          </button>
        </div>
      </div>
    </>
  );
}
