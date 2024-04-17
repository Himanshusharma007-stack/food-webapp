import { FoodDelAnimation } from "../components/FoodDelAnimation";
import FastDelivery from "../animations/fastDelivery.json";
import Delicious from "../animations/delicious.json";
import HappyCustomer from "../animations/happyCustomer.json";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-14 mb-8 mx-4 md:mx-10">
        <div>
          <FoodDelAnimation height="60vh" />
        </div>
        <div className="my-auto">
          <h1 className="text-4xl	mb-6">Why you choose us?</h1>
          <p>
            Choose us for an unparalleled culinary experience delivered right to
            your doorstep. With our commitment to quality ingredients, diverse
            menu options, and seamless ordering process, we're dedicated to
            satisfying your cravings every time. Discover convenience without
            compromising on flavor – trust us to make your dining experience
            exceptional.
          </p>
          <ul>
            <li className="my-2">
              <strong>Quality Ingredients:</strong> We source only the freshest
              and finest ingredients for our dishes, ensuring every bite is a
              delight.
            </li>
            <li className="my-2">
              <strong>Diverse Menu Options:</strong> From savory classics to
              innovative creations, our extensive menu offers something for
              every palate and craving.
            </li>
            <li className="my-2">
              <strong>Seamless Ordering Process:</strong> With our user-friendly
              website, ordering your favorite meals is quick, easy, and
              hassle-free.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between mx-4 md:mx-10 my-6 md:my-12">
        <div class="flex-grow text-center md:w-1/3 mx-4 md:mx-10 px-6 md:px-12 border border-slate rounded-lg md:h-80 py-4">
          <FoodDelAnimation height="16vh" animation={FastDelivery} />
          <div class="mt-4 md:mt-3">
            <h1 class="text-lg md:text-2xl">Quick Delivery</h1>
            <p class="mt-2">
              Enjoy quick and reliable delivery services, bringing delicious
              meals straight to your doorstep, so you can dine in the comfort of
              your home.
            </p>
          </div>
        </div>

        <div class="flex-grow text-center md:w-1/3 mx-4 md:mx-10 px-6 md:px-12 border border-slate rounded-lg md:h-80 py-4 mt-6 md:mt-0">
          <FoodDelAnimation height="16vh" animation={Delicious} />
          <div class="mt-4 md:mt-3">
            <h1 class="text-lg md:text-2xl">Exceptional Taste</h1>
            <p class="mt-2">
              Our commitment to culinary excellence ensures that each dish is
              expertly crafted to deliver an unforgettable taste experience.
            </p>
          </div>
        </div>

        <div class="flex-grow text-center md:w-1/3 mx-4 md:mx-10 px-6 md:px-12 border border-slate rounded-lg md:h-80 py-4 mt-6 md:mt-0">
          <FoodDelAnimation height="16vh" animation={HappyCustomer} />
          <div class="mt-4 md:mt-3">
            <h1 class="text-lg md:text-2xl">Customer Satisfaction</h1>
            <p class="mt-2">
              We prioritize your satisfaction above all else, striving to exceed
              your expectations with every order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
