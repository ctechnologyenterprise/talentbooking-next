import Select from "react-select";

export type ListOption = {
  label: string;
  value: string;
};

export const StatusSelect = () => {
  const options2 = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];
  return (
    <div className="mt-20 base:w-full lg:w-96">
      <div className="flex">
        <div className="bg-[#8ac748] w-40 flex justify-center text-white mr-0.5">
          <div className="mt-2">Status</div>
        </div>
        <Select
          className="w-full bg-[#8ac748] text-white"
          closeMenuOnSelect={false}
          options={options2}
          defaultValue={options2[0]}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              textColor: "white",
              width: "100%",
              height: "43px",
              borderRadius: 0,
              borderWidth: 0,
              borderLeftWidth: "1px",
              borderBottomWidth: "1px",
              "&:hover": {
                borderLeftColor: "#ddd",
              },
              backgroundColor: state.isFocused ? "#8ac748" : "",
              borderLeftColor: "#ddd",
              borderBottomColor: "#ddd",
              boxShadow: state.isFocused
                ? "inset 0 0 8px rgb(70 4 101 / 10%)"
                : "0 0 15px rgb(0 0 0 / 5%) inset",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              "&:hover": {
                backgroundColor: "#8ac748",
                color: "#ffff",
              },
              color: "#000",
              backgroundColor: "#ffff",
            }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              color: "#fff",
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
};
