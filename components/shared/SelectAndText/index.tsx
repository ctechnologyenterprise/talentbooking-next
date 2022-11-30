import clsxm from "@libs/clsxm";
import Select from "react-select";

type SelectAndTextProps = {
  selectName: string;
  options?: string[];
  required?: boolean;
};

const SelectAndText = ({
  selectName,
  options,
  required,
}: SelectAndTextProps) => {
  return (
    <div className="flex">
      <div className="w-[40%] h-3">
        <label
          className={clsxm(
            "text-[14px] h-full text-[#999] flex py-2 pl-5 border border-[#dddddd] border-b-0 pb-8"
          )}
        >
          {selectName}
          {required && (
            <div className="text-[red] text-2xl ml-1 font-thin">*</div>
          )}
        </label>
      </div>
      <div className="w-[60%] border-0">
        <Select
          className="w-full"
          options={options}
          placeholder=""
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: 0,
              width: "100%",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderColor: "none",
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

export default SelectAndText;
