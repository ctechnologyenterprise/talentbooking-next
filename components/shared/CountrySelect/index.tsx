import { useEffect, useState } from "react";
import Select from "react-select";

export const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      options={countries}
      className="w-3/5"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: "100%",
          height: "42px",
          borderRadius: 0,
          borderWidth: 0,
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          "&:hover": {
            borderLeftColor: "#ddd",
          },
          backgroundColor: state.isFocused ? "#f7f2fa" : "",
          borderLeftColor: "#ddd",
          borderBottomColor: "#ddd",
          boxShadow: state.isFocused
            ? "inset 0 0 8px rgb(70 4 101 / 10%)"
            : "0 0 15px rgb(0 0 0 / 5%) inset",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          "&:hover": {
            backgroundColor: "#460465",
            color: "#ffff",
          },
          color: "#000",
          backgroundColor: "#ffff",
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};
