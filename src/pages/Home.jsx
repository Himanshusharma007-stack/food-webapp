export default function Home() {
  return (
    <>
      <div class="relative">
        <img
          src="../src/assets/home/Carousel.jpeg"
          class="h-screen w-screen"
          alt="Carousel Image"
        />
        <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 transition-opacity duration-1000 animate-fade-in">
          <h1 class="text-4xl font-bold mb-2">Elevate Your Dining Experience</h1>
          <p class="text-lg">Without Stepping Out</p>
        </div>
      </div>
    </>
  );
}
