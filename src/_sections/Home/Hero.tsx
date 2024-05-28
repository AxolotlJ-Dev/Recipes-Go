import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center bg-cover bg-center bg-[url('/plato1.jpeg')] lg:bg-none md:lg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8  bg-black bg-opacity-50 rounded-lg lg:rounded-none lg:bg-opacity-0">
          <h1 className="text-3xl md:text-5xl text-yellow-300 tracking-loose">
            Recipes GO
          </h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 hover:text-black hover:bg-yellow-300 hover:rounded-lg">
            Space : The Infinite Time of Flavor
          </h2>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            Explore your favorite foods and sign up now to show the world what a good chef you are.
          </p>
          <Link
            href="/Home"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Explore Now
          </Link>
        </div>
        <div className="p-8 sm:hidden md:hidden lg:block lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
            <img
              className="h-full hidden md:hidden sm:hidden lg:hidden xl:block"
              src="/plato1.jpeg"
              alt="Platillo"
            />

            <img
              className="h-full hidden md:hidden sm:hidden lg:block xl:block"
              src="/plato2.jpeg"
              alt="Platillo"
            />

            <img
              className="h-full hidden md:hidden sm:hidden lg:block xl:block"
              src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Platillo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
