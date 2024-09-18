export const About = () => {
  return (
    <div className="bg-sandyBeige mt-[-40px] h-[600px] flex flex-wrap justify-between font-playfair items-center">
      <div className="p-32 w-[900px] flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Discover our premium cosmetics and skincare products designed to
          enhance your natural beauty.
        </h1>
        <p>
          we are passionate about delivering high-quality cosmetics and skincare
          products designed to enhance your natural beauty. With a commitment to
          excellence, we meticulously craft each product to meet the highest
          standards of quality and effectiveness. Our mission is to provide you
          with premium solutions that help you feel confident and radiant every
          day. Join us on a journey to discover beauty with purpose and
          excellence.
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/10850675/pexels-photo-10850675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="h-full w-[600px]"
      />
    </div>
  );
}
