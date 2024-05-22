export function About() {
  return (
    // <section className="h-screen flex justify-center items-center">
    <section className="container mx-auto px-4">
      {/* <p className="text-4xl font-extrabold text-center  hover:text-[#FDE047] ">
        Sobre Nosotros
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center justify-center items-center my-10 ">
        <div>
          <p className="font-semibold ">
            En <span className="text-[#FDE047]">Recipes Go</span>, soñamos con
            un mundo donde cada persona, sin importar su nivel de habilidad en
            la cocina, pueda disfrutar del placer de crear y compartir comidas
            deliciosas. Nuestra visión es ser la plataforma de referencia
            mundial para recetas en línea, inspirando a millones a explorar la
            diversidad culinaria y a descubrir el chef que llevan dentro.
            Queremos fomentar una comunidad global de amantes de la cocina,
            uniendo culturas y generaciones a través del poder de la comida.
          </p>
        </div>
        <div>
          <img src="search.svg" alt="Team" className="w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img
            src="food.svg"
            alt=""
            className="hidden md:block w-full h-auto"
          />
        </div>
        <div>
          <p className="font-semibold ">
            En <span className="text-[#FDE047]">Recipes Go</span>, nuestra
            misión es hacer que la cocina sea accesible, emocionante y
            gratificante para todos. Ofrecemos una amplia variedad de recetas
            cuidadosamente seleccionadas, desde platos tradicionales hasta
            innovaciones culinarias, para satisfacer todos los gustos y
            necesidades dietéticas. Nos comprometemos a proporcionar
            instrucciones claras, consejos prácticos y videos tutoriales para
            garantizar que cada usuario pueda cocinar con confianza y
            creatividad. Fomentamos una comunidad inclusiva donde los usuarios
            pueden compartir sus experiencias, aprender unos de otros y crecer
            juntos en su amor por la cocina.
          </p>
        </div>
      </div>
      <hr className=" col-span-2 my-7" />
      <div className=" col-span-2  text-lg md:text-xl lg:text-2xl xl:text-2xl text-center justify-center items-center my-10">
        <p className="font-semibold ">
          En <span className="text-[#FDE047]">Recipes Go</span>, nuestra misión
          es hacer que la cocina sea accesible, emocionante y gratificante para
          todos. Ofrecemos una amplia variedad de recetas cuidadosamente
          seleccionadas, desde platos tradicionales hasta innovaciones
          culinarias, para satisfacer todos los gustos y necesidades dietéticas.
          Nos comprometemos a proporcionar instrucciones claras, consejos
          prácticos y videos tutoriales para garantizar que cada usuario pueda
          cocinar con confianza y creatividad. Fomentamos una comunidad
          inclusiva donde los usuarios pueden compartir sus experiencias,
          aprender unos de otros y crecer juntos en su amor por la cocina.
        </p>
      </div>
    </section>
  );
}
