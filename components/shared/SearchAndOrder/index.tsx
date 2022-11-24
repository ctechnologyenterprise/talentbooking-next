import Select from "react-select";

export type Props = {
  searchHolder: string;
  searchLabel: string;
  options1: ListOption[];
  options2?: ListOption[];
  onInput(value: string): void;
  onSelect1(value: ListOption | null): void;
  onSelect2(value: ListOption | null): void;
};

export type ListOption = {
  label: string;
  value: string;
};

export const SearchAndOrder = ({
  searchHolder,
  searchLabel,
  options1,
  options2 = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ],
  onInput,
  onSelect1,
  onSelect2,
}: Props) => {
  return (
    <div>
      <h3 className="mb-4 ml-2 text-[#460465] text-2xl font-extralight">
        Search and Order
      </h3>
      <div className="flex w-full">
        <label
          htmlFor="Search"
          className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-[#dddddd]"
        >
          {searchLabel}
        </label>
        <input
          type="text"
          className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
          placeholder={searchHolder}
          onChange={(e) => onInput(e.target.value)}
        />
      </div>
      <div className="flex">
        <Select
          className="w-full"
          closeMenuOnSelect={false}
          options={options1}
          onChange={onSelect1}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "100%",
              borderRadius: 0,
              borderWidth: 0,
              borderLeftWidth: "1px",
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
        <Select
          className="w-full"
          closeMenuOnSelect={false}
          options={options2}
          defaultValue={options2[0]}
          onChange={onSelect2}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "100%",
              borderRadius: 0,
              borderWidth: 0,
              borderLeftWidth: "1px",
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
      </div>
    </div>
  );
};
