import categories from "../../db/categories.json";

export default function Home() {
  return (
    <>
      <div class="relative">
        <img
          src="../src/assets/home/Carousel.jpeg"
          class="h-96 w-screen object-cover"
          alt="Carousel Image"
        />
        <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 transition-opacity duration-1000 animate-fade-in">
          <h1 class="text-4xl font-bold mb-2">
            Elevate Your Dining Experience
          </h1>
          <p class="text-lg">Without Stepping Out</p>
        </div>
      </div>

      <div className="my-8">
        <h1 className="text-center font-bold text-3xl">Select a category</h1>
        <div className="flex flex-wrap justify-center mb-10 mt-4">
          {categories.map((category) => (
            <div className="h-60 w-64 rounded-lg mt-5 mx-4 hover:scale-105 duration-300">
              <div className="rounded-lg">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="object-cover h-44 w-64 rounded-lg"
                />
              </div>

              <div>
                <h4 className="text-center text-xl font-semibold">
                  {category.name}
                </h4>
                <p className="text-center truncate mx-2">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
