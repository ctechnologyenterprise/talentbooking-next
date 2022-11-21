import React, { MouseEventHandler, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import clsxm from "@libs/clsxm";
import styles from "@styles/Home.module.css";
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
        <div className="md:px-[15px] pl-[10px]">
          <FontAwesomeIcon
            onClick={onToggleCollapsed}
            className="md:pl-2.5"
            icon={faBars}
            color="#fff"
            size="2x"
          />
        </div>

        <a className="block float-none leading-5 bg-[#460465] align-middle absolute left-[50%] ml-[-44px]">
          <Image src="/el-logo.svg" alt="logo" width={106} height={25} />
        </a>
        <div className="absolute right-0">
          <DropdownList
            isHeader
            onSelect={handleSelect}
            options={listItemDropDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
