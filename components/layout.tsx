import clsxm from "@libs/clsxm";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ReactNode, useCallback, useRef, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Talent Booking" }: Props) {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const layoutWrapperClass = classNames(
    "fixed bg-white pt-[3rem] md:right-0 w-screen transition-all duration-300 z-10",
    {
      ["w-screen pl-[5rem]"]: !toggleCollapse,
      ["md:w-[calc(100%_-_215px)] bg-neutral-900/40"]: toggleCollapse,
    }
  );

  const handleSidebarToggle = useCallback(() => {
    setToggleCollapse((pre) => !pre);
  }, []);

  const handleClick = useCallback(async () => {
    if (document.hasFocus() && toggleCollapse === true) {
      setToggleCollapse((pre) => !pre);
    }
  }, [toggleCollapse]);
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content="Talent booking application." />
        <meta property="og:title" content="Talent booking application." />
        <meta property="og:description" content="Talent booking application." />
      </Head>

      <Header
        isCollapsed={toggleCollapse}
        onToggleCollapsed={handleSidebarToggle}
      />
      <Sidebar
        ref={ref}
        onClick={handleClick}
        isFocus={!toggleCollapse}
        isCollapsed={toggleCollapse}
      />

      <main className={clsxm(toggleCollapse ? "main" : "", layoutWrapperClass)}>
        {children}
      </main>
    </div>
  );
}

export default React.forwardRef(Layout);
