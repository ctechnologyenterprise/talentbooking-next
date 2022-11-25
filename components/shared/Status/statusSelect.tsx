import classNames from "classnames";
import { useState } from "react";
import Select from "react-select";

export type ListOption = {
  label: string;
  value: string;
};

export const StatusSelect = () => {
  const options = [
    { value: "enabled", label: "Enabled" },
    { value: "disabled", label: "Disabled" },
  ];

  const [status, setStatus] = useState<string>("enabled");

  let a = true;
  return (
    <div className="mt-20 base:w-full lg:w-96">
      <div className="flex">
        <div
          className={classNames("w-2/5 flex justify-center text-white mr-0.5", {
            ["bg-[#8ac748]"]: status === "enabled",
            ["bg-[red]"]: status === "disabled",
          })}
        >
          <div className="mt-2">Status</div>
        </div>
        <Select
          className="lg:w-full w-3/5 bg-[#8ac748] text-white"
          options={options}
          defaultValue={options[0]}
          onChange={(val) => val && setStatus(val.value)}
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
              backgroundColor: status === "enabled" ? "#8ac748" : "red",
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
