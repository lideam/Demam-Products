export const Header = () => {
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Unleash Your Inner Glamour
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Discover the latest trends in beauty, skincare, and fashion at
                Bella Cosmo Shop. Our curated collection of top-tier products is
                designed to empower and inspire. Whether you're looking for the
                perfect makeup, a rejuvenating skincare routine, or stylish
                accessories, we've got you covered. Elevate your beauty game and
                embrace the confidence that comes with looking and feeling your
                best.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src="https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-40 w-full object-cover sm:h-56 md:h-[450px]"
            />

            <img
              alt=""
              src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-40 w-full object-cover sm:h-56 md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
