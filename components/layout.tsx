import clsxm from "@libs/clsxm";
import classNames from "classnames";
import useVisible from "hooks/useVisible";
import Head from "next/head";
import React, { ReactNode, useCallback, useRef } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Talent Booking" }: Props) {
  const toggleSidebar = useVisible(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const layoutWrapperClass = classNames(
    " bg-white pt-[3rem] md:right-0 w-screen transition-all duration-300 z-10",
    {
      ["w-screen pl-[5rem]"]: !toggleSidebar.visible,
      ["fixed  md:w-[calc(100%_-_215px)] bg-neutral-900/40"]: toggleSidebar.visible,
    }
  );

  const handleClick = useCallback(async () => {
    if (document.hasFocus() && toggleSidebar.visible) {
      toggleSidebar.toggle();
    }
  }, [toggleSidebar]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content="Talent booking application." />
        <meta property="og:title" content="Talent booking application." />
        <meta property="og:description" content="Talent booking application." />
      </Head>

      <div>
        <Header
          isCollapsed={toggleSidebar.visible}
          onToggleCollapsed={toggleSidebar.toggle}
        />

        <Sidebar
          ref={ref}
          onClick={handleClick}
          isFocus={!toggleSidebar.visible}
          isCollapsed={toggleSidebar.visible}
        />
      </div>

      <main className={clsxm(toggleSidebar.visible ? "main" : "", layoutWrapperClass)}>
        {children}
      </main>
    </div>
  );
}

export default React.forwardRef(Layout);
