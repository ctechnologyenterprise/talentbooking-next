import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

function AuthLayout({ children, title = "Talent Booking" }: Props) {
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
      <main>{children}</main>
    </div>
  );
}

export default React.forwardRef(AuthLayout);
