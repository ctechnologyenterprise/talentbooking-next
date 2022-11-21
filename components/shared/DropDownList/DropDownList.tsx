import ChevronDownIcon from "@public/svgs/ChevronDownIcon";
import classNames from "classnames";
import clsx from "clsx";
import useVisible from "hooks/useVisible";
import styles from "./DropDownList.module.css";

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
  const toggleMenu = useVisible(false);

  const handleClick = (item: DropdownListOption) => {
    onSelect(item);
    toggleMenu.hide();
  };

  const wrapperItems = classNames(
    "flex py-3 items-center justify-center w-[100%] h-[46px] cursor-pointer focus:outline-none",
    {
      ["bg-[#460465]"]: !toggleMenu.visible,
      ["focus:bg-[#300345]"]: toggleMenu.visible,
    }
  );

  return (
    <div className={clsx(styles.base, className)}>
      <button className={clsx(wrapperItems)} onClick={toggleMenu.toggle}>
        <div className={clsx("px-4", styles.label)}>Adrew Wang</div>
        <div className={clsx("pr-4", styles.icon)}>
          <ChevronDownIcon />
        </div>
      </button>

      {toggleMenu.visible && (
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
