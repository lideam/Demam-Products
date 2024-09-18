import img from "../../assets/store.png";

export const Header = () => {
  return (
    <div
      className="w-full h-96 bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
};
