import clsxm from "@libs/clsxm";
import classNames from "classnames";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "enabled", label: "Enabled" },
  { value: "disabled", label: "Disabled" },
];

const NCStatus = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
  {
    value: "confirmed",
    label: "Confirmed",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
  {
    label: "Withdraw",
    value: "withdraw",
  },
];

export type StatusSelectProps = {
  isNewContract?: boolean;
  className?: string;
  classNameLabel?: string;
};

export const StatusSelect = ({
  isNewContract,
  className,
  classNameLabel,
}: StatusSelectProps) => {
  const [status, setStatus] = useState<string>(
    isNewContract ? "pending" : "enabled"
  );

  const checkBg = (text: string) => {
    switch (text) {
      case "enabled":
        return "#8ac748";
      case "confirmed":
        return "#8ac748";
      case "disabled":
        return "#df4141";
      case "cancelled":
        return "#df4141";
      case "pending":
        return "#4899c7";
      case "rejected":
        return "#f0ad4e";
      case "withdraw":
        return "#ebdb57";
      default:
        return "#4899c7";
    }
  };

  return (
    <div className={clsxm("mt-20 base:w-full lg:w-[310px]", className)}>
      <div className="flex">
        <div
          className={clsxm(
            "w-2/5 flex justify-center text-white mr-0.5",
            {
              ["bg-[#df4141]"]: status == "cancelled" || status == "disabled",
              ["bg-[#8ac748]"]: status == "enabled" || status == "confirmed",
              ["bg-[#4899c7]"]: status === "pending",
              ["bg-[#f0ad4e]"]: status === "rejected",
              ["bg-[#ebdb57]"]: status === "withdraw",
            },
            classNameLabel
          )}
        >
          <p className={clsxm("mt-2")}>Status</p>
        </div>
        <Select
          className="lg:w-full w-3/5 bg-[#8ac748] text-white"
          options={isNewContract ? NCStatus : options}
          defaultValue={isNewContract ? NCStatus[0] : options[0]}
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
              backgroundColor: checkBg(status),
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
