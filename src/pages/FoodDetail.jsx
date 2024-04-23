import { useLocation } from "react-router-dom";
import { getFoodItemByCategory } from "../utils/getFooditemsByCategory";

export default function FoodDetail() {
  let { state } = useLocation();

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
        {getFoodItemByCategory(state.category.id).map((elem) => {
          return (
            <>
              <div className="mx-24 bg-gray-200 rounded-lg my-8 ">
                <div className="w-full h-40 grid grid-cols-6 gap-4 p-3">
                  <div className="col-span-5 flex flex-col flex-wrap justify-center">
                    <h1 className="font-bold text-xl">{elem.name}</h1>
                    <p className="mt-2">{elem.description}</p>

                    <button className="bg-black text-white mt-4 rounded-xl py-2 hover:scale-105 duration-300 w-40 ml-1">
                      Add to cart
                    </button>
                  </div>

                  <div className="pa-2 flex justify-center items-center">
                    <img
                      src={elem.imageUrl}
                      className="rounded-lg object-cover h-32 w-40"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
