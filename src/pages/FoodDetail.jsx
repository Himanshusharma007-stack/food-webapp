import { useLocation } from "react-router-dom";
import { getFoodItemByCategory } from "../utils/getFooditemsByCategory";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";

export default function FoodDetail() {
  let { state } = useLocation();
  const dispatch = useDispatch();
  const cartArr = useSelector((state) => state.cart.items);

  const [foodItems, setFoodItems] = useState([]);

  function addToCartClicked(item) {
    dispatch(addToCart(item));
  }
  function removeFromCartClicked(item) {
    dispatch(removeFromCart(item));
  }

  useEffect(() => {
    setFoodItems(getFoodItemByCategory(state.category.id));
  }, []);
  
  useEffect(() => {
    if (foodItems.length) {
      let arr = [];
      for (let i = 0; i < foodItems.length; i++) {
        const element = foodItems[i];
        let cartItemWithSameid = cartArr.find(
          (cartFooditem) => cartFooditem.id == element.id
        );
        if (cartItemWithSameid) {
          console.log("inside if === ", cartItemWithSameid);
          arr.push(cartItemWithSameid);
        } else {
          console.log("inside else === ", cartItemWithSameid);
          arr.push(element);
        }
      }
      setFoodItems(arr);
    }
  }, [cartArr, foodItems]);

  // useEffect(() => console.log("fooditem ---- ", foodItems), [foodItems]);

  return (
    <>
      <div>
        <div>
          <h1 className="text-5xl font-bold flex justify-center">
            {state.category.name}
          </h1>
          <p className="flex justify-center text-lg mt-2">
            {state.category.description}
          </p>
        </div>
        {foodItems.map((elem) => {
          return (
            <div className="mx-24 bg-gray-200 rounded-lg my-8 " key={elem.id}>
              <div className="w-full h-40 grid grid-cols-6 gap-4 p-3">
                <div className="col-span-5 flex flex-col flex-wrap justify-center">
                  <h1 className="font-bold text-xl">{elem.name}</h1>
                  <p className="mt-2">{elem.description}</p>

                  {!elem.count ? (
                    <button
                      className="bg-black text-white mt-4 rounded-xl py-2 hover:scale-105 duration-300 w-40 ml-1"
                      onClick={() => addToCartClicked(elem)}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div>
                      <button
                        className="bg-black text-white mt-4 rounded-xl py-2 hover:scale-105 duration-300 w-16 ml-1"
                        onClick={() => removeFromCartClicked(elem)}
                      >
                        -
                      </button>
                      &nbsp; {elem.count} &nbsp;
                      <button
                        className="bg-black text-white mt-4 rounded-xl py-2 hover:scale-105 duration-300 w-16 ml-1"
                        onClick={() => addToCartClicked(elem)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>

                <div className="pa-2 flex justify-center items-center">
                  <img
                    src={elem.imageUrl}
                    className="rounded-lg object-cover h-32 w-40"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
