import React from "react";
import clsx from "clsx";
import useComponentVisible from "hooks/useComponentVisible";
import ChevronDownIcon from "@public/svgs/ChevronDownIcon";
import styles from "./DropDownList.module.css";
import classNames from "classnames";

export type DropdownListProps = {
  className?: string;
  options: DropdownListOption[];
  onSelect(value: DropdownListOption): void;
};

export type DropdownListOption = {
  label: string;
  value?: any;
};

export const DropdownList = ({
  className,
  options,
  onSelect,
}: DropdownListProps) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleClick = (item: DropdownListOption) => {
    onSelect(item);
    setIsComponentVisible(false);
  };

  const wrapperItems = classNames(
    "flex py-3 items-center justify-center w-[100%] h-[46px] cursor-pointer focus:outline-none",
    {
      ["bg-[#460465]"]: !isComponentVisible,
      ["focus:bg-[#300345]"]: isComponentVisible,
    }
  );

  return (
    <div className={clsx(styles.base, className)}>
      <button
        className={clsx(wrapperItems)}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <div className={clsx("px-4", styles.label)}>Adrew Wang</div>
        <div className={clsx("pr-4", styles.icon)}>
          <ChevronDownIcon />
        </div>
      </button>
      {isComponentVisible && (
        <div className={styles.content}>
          {options.map((item: DropdownListOption, index) => {
            return (
              <div
                className="block py-[3px] px-[20px] clear-both font-normal"
                key={index}
                onClick={() => handleClick(item)}
              >
                {item?.value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
