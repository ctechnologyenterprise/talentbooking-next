import clsxm from "@libs/clsxm";
import Select from "react-select";

export type Props = {
  placeholder?: string;
  selectLabel: string;
  onSelect(value: any): void;
  options: ListOption[];
  icon?: boolean;
  classNameContainer?: string;
  classNameLabel?: string;
  classNameSelect?: string;
};

export type ListOption = {
  label: string;
  value: string;
};

export const SelectForm = ({
  placeholder,
  selectLabel,
  onSelect,
  options,
  icon,
  classNameContainer,
  classNameLabel,
  classNameSelect,
}: Props) => {
  return (
    <div
      className={clsxm(
        "relative flex border-[1px] text-[#999] items-center border-[#dddd] border-solid ",
        classNameContainer
      )}
    >
      <label className={clsxm("w-2/5 pl-3 text-base flex", classNameLabel)}>
        {selectLabel}{" "}
        {icon && <div className="text-[red] ml-1 font-thin">*</div>}
      </label>
      <Select
        placeholder={placeholder}
        className={clsxm("w-3/5", classNameSelect)}
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
