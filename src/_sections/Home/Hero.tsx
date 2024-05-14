export default function Hero() {
  return (
    <section className=" h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl text-yellow-300 tracking-loose">
            Recipes GO
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 hover:text-black hover:bg-yellow-300">
            Space : The Timeless Infinity
          </h2>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            Explore your favourite events and register now to showcase your
            talent and win exciting prizes.
          </p>
          <a
            href="#"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Explore Now
          </a>
        </div>
        <div className="p-8 sm:hidden md:hidden lg:block lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
            <img
              className="h-full w-full hidden md:hidden sm:hidden lg:hidden xl:block"
              src="/plato1.jpeg"
              alt="Platillo"
            />

            <img
              className="h-full w-full hidden md:hidden sm:hidden lg:block xl:block"
              src="/plato2.jpeg"
              alt="Platillo"
            />

            <img
              className="h-full w-full h-full w-full hidden md:hidden sm:hidden lg:block xl:block"
              src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Platillo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
