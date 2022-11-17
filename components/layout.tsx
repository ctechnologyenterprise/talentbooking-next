import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Talent Booking" }: Props) {
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

      <header>
        <div className="bg-gray-800">
          <nav className="max-w-3xl px-6 mx-auto h-12 flex items-center">
            <Link
              href="/"
              className="no-underline hover:underline text-white hover:text-yellow-400"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl px-6 mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
