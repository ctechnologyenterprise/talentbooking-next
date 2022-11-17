import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeIcon from "../public/icons/HomeIcon";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

type headerProps = {
  toggleCollapse: boolean;
  handleSidebarToggle: MouseEventHandler<SVGSVGElement>;
};

const Header = ({ toggleCollapse, handleSidebarToggle }: headerProps) => {
  const headerWrapperClass = classNames(
    "p-2.5 bg-[#460465] border-[#300345] min-h-45 w-screen fixed right-0 flex justify-between items-center transition-all duration-300 ",
    {
      ["w-screen"]: !toggleCollapse,
      ["w-[89%]"]: toggleCollapse,
    }
  );
  return (
    <div className={headerWrapperClass}>
      <FontAwesomeIcon
        onClick={handleSidebarToggle}
        className="pl-2.5"
        icon={faBars}
        color="#fff"
        size="2x"
      />
      <div>
        <Image src="/el-logo.svg" alt="" width={120} height={120} />
      </div>
      <div>
        <p className="text-white">Adrew Wang</p>
      </div>
    </div>
  );
};

export default Header;
