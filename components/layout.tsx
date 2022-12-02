import clsxm from "@libs/clsxm";
import classNames from "classnames";
import useVisible from "hooks/useVisible";
import Head from "next/head";
import { ReactNode, useCallback } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
  handleLogout: (e: any) => void;
};

function Layout({ children, title = "Talent Booking", handleLogout }: Props) {
  const sidebar = useVisible(false);
  const mainContainer = classNames(
    "bg-white pt-[3rem] md:right-0 w-screen transition-all duration-300 z-10 mb-[100px]",
    {
      ["w-screen"]: !sidebar.visible,
      ["fixed md:w-[calc(100%_-_140px)] bg-neutral-900/40"]: sidebar.visible,
    }
  );

  const onToggle = useCallback(async () => {
    if (document.hasFocus() && sidebar.visible) {
      sidebar.toggle();
    }
  }, [sidebar]);

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
          isCollapsed={sidebar.visible}
          onToggleSidebar={sidebar.toggle}
          handleLogout={handleLogout}
        />

        <Sidebar
          onClick={onToggle}
          isFocus={!sidebar.visible}
          isCollapsed={sidebar.visible}
        />
      </div>

      <main
        className={clsxm(mainContainer, {
          ["main"]: sidebar.visible,
        })}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
