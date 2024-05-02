import Header from "../components/Header";
import { FoodDelAnimation } from "../components/FoodDelAnimation";
import FoodAnimation from "../animations/food-animation.json";
import SecurePaymentAnimation from "../animations/secure-payment.json";
import LightningFastAnimation from "../animations/lightning-fast.json";
import QualityAnimation from "../animations/quality.json";
import DiningAnimation from "../animations/dining-table.gif";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Header hideLinks={true} />
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-black">
              Welcome to <span className="text-gray-500">PlatterPulse</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We're not just serving food, we're serving memories. Get ready for
              a taste sensation.
            </p>
            <button
              onClick={() => loginWithRedirect()}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700"
            >
              <span>Let's Get Started</span>
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <FoodDelAnimation animation={FoodAnimation} />
          </div>
        </div>
      </section>

      <div className="mx-auto mb-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <FoodDelAnimation animation={SecurePaymentAnimation} />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Enjoy peace of mind with PlatterPulse's secured payment options,
              ensuring your transactions are as safe as they are delicious.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <FoodDelAnimation animation={LightningFastAnimation} />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Lightning Fast Delivery
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Experience lightning-fast delivery at PlatterPulse, where your
              order arrives before you can even say 'hungry'!
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <FoodDelAnimation animation={QualityAnimation} />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Quality Food
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Join us at PlatterPulse, where quality is never compromised, and
              every meal is a culinary delight.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              {/* <FoodDelAnimation animation={MemoryAnimation} /> */}
              <img src={DiningAnimation} alt="Your GIF" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Exceptional Dining
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Welcome to PlatterPulse, where satisfaction is always on the menu.
              Let us elevate your dining experience.
            </p>
          </div>
        </div>
      </div>

      <Footer hideLinks={true} />
    </>
  );
}
