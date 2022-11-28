import Select from "react-select";

export type Props = {
  selectLabel: string;
  onSelect(value: any): void;
  options: ListOption[];
  icon?: boolean;
};

export type ListOption = {
  label: string;
  value: string;
};

export const SelectForm = ({ selectLabel, onSelect, options, icon }: Props) => {
  return (
    <div className="relative flex border-[1px] text-[#999] items-center border-[#dddd] border-solid ">
      <label className="w-2/5 pl-3 text-base flex">
        {selectLabel}{" "}
        {icon && <div className="text-[red] text-2xl ml-1 font-thin">*</div>}
      </label>
      <Select
        className="w-3/5"
        options={options}
        onChange={onSelect}
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