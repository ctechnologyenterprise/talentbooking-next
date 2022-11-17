"use client";

import classNames from "classnames";
import { useState } from "react";
import "../styles/globals.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <html>
      <head />
      <body>
        <Header
          toggleCollapse={toggleCollapse}
          handleSidebarToggle={handleSidebarToggle}
        />

        <div className="flex">
          <Sidebar toggleCollapse={toggleCollapse} />
          <div className="pt-12 flex">{children}</div>
        </div>
      </body>
    </html>
  );
}
