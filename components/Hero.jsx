import SearchProperties from "./SearchProperties";

const Hero = () => {
  return (
    <section className="py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center border-gray-300 border-b-2 pb-8">
        <div className="text-center">
          <h1 className="text-4xl font-extraboldsm:text-5xl md:text-6xl">
            Find The Perfect Rental
          </h1>
          <p className="my-4 text-xl">
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <SearchProperties />
      </div>
    </section>
  );
};

export default Hero;
