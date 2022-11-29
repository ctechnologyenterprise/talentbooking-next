import Select from "react-select";

export type ListOption = {
  label: string;
  value: string;
};

export const AccountSelect = () => {
  const options = [
    { value: "Root", label: "Root" },
    { value: "A", label: "A" },
  ];

  return (
    <div className="relative flex border-[1px] font-light text-[14px] text-[#999] items-center border-[#dddd] border-solid mt-5">
      <div className="px-3 w-2/5">Account Type</div>
      <Select
        placeholder="Select..."
        className="w-full"
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: "100%",
            borderRadius: 0,
            borderWidth: 0,
            borderLeftWidth: "1px",
            "&:hover": {
              borderLeftColor: "#ddd",
            },
            backgroundColor: state.isFocused ? "#f7f2fa" : "",
            borderLeftColor: "#ddd",
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
    </div>
  );
};
