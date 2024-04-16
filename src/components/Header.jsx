export default function Header() {
  return (
    <>
      <div className="grid grid-cols-3 h-16 items-center font-medium px-4">
        <div>
          <button className="flex items-center">
            <img
              src="../src/assets/header/bw-food-icon.png"
              className="h-10 w-10 transition-all"
            />
            <span className="transition-all hover:font-semibold">
              PlatterPulse
            </span>
          </button>
        </div>

        <ul className="flex gap-8 justify-center">
          <li className="hover:font-semibold">
            <button>Home</button>
          </li>
          <li className="hover:font-semibold">
            <button>About</button>
          </li>
          <li className="hover:font-semibold">
            <button>Contact us</button>
          </li>
        </ul>

        <div className="flex justify-end mx-4">
          <button>
            <img
              src="../src/assets/header/cart.png"
              className="h-10 w-10 hover:h-11 hover:w-11"
            />
          </button>
        </div>
      </div>
    </>
  );
}
