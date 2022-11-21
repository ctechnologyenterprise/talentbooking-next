import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsxm from "@libs/clsxm";
import styles from "@styles/Home.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useCallback } from "react";
import { DropdownList } from "./shared/DropDownList/DropDownList";

type headerProps = {
  isCollapsed: boolean;
  onToggleCollapsed: MouseEventHandler<SVGSVGElement>;
};

const listItemDropDown = [
  {
    label: "Logout",
    value: "Logout",
  },
];

const Header = ({ isCollapsed, onToggleCollapsed }: headerProps) => {
  const headerWrapperClass = classNames(
    "fixed flex py-[8px] float-none right-0 w-screen items-center bg-[#460465] border-[#300345] transition-all duration-300 z-[100]",
    {
      ["w-screen"]: !isCollapsed,
      ["md:w-[calc(100%_-_215px)]"]: isCollapsed,
    }
  );

  const handleSelect = useCallback(() => {
    console.log("signout");
  }, []);

  return (
    <div>
      <div className={clsxm(styles.wrapperItems, headerWrapperClass)}>
        <div className="px-[15px]">
          <FontAwesomeIcon
            onClick={onToggleCollapsed}
            className="pl-2.5"
            icon={faBars}
            color="#fff"
            size="2x"
          />
        </div>

        <Link
          href="/"
          className="block float-none leading-5 bg-[#460465] align-middle absolute left-[40%] py-[10px]"
        >
          <Image src="/el-logo.svg" alt="logo" width={200} height={2} />
        </Link>

        <div className="absolute right-0">
          <DropdownList onSelect={handleSelect} options={listItemDropDown} />
        </div>
      </div>
    </div>
  );
};

export default Header;
