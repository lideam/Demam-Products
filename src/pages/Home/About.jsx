import Girl from "../../assets/about.png"

export const About = () => {
  return (
    <div className="bg-[#59403b] mt-[-40px] h-[600px] text-[#b1a9a8] flex flex-col-reverse md:flex-row justify-between font-playfair items-center">
      <div className=" p-4 md:p-32 w-screen md:w-[900px] flex flex-col gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">
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
      <img src={Girl} alt="" className="h-full w-56 self-end md:w-[500px]" />
    </div>
  );
}
