import { currency } from "constants/currency";
import Select from "react-select";

export const CurrencySelect = () => {
  return (
    <Select
      options={currency}
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
