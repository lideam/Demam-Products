import Select from "react-select";

export const Products = () => {
  const options = [
    { value: "all", label: "All" },
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
  ];

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: "#A0522D", // clayBrown color
      padding: "10px",
      textAlign: "center",
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? "rgba(0, 0, 0, 0.1)" : "transparent",
      color: "#000",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
    }),
  };

  return (
    <div className="my-8 font-playfair">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl">Our Products</h1>
        <Select
          options={options}
          styles={customStyles}
          defaultValue={options[0]}
          isSearchable={false}
        />
      </div>
    </div>
  );
};
