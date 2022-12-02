import Layout from "@components/layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";
import "../styles/styles.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const [value, setValue] = useSessionStorage("token", 0);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // Watchers
  useEffect(() => {
    if (value === 0) {
      redirectToLogin();
    } else {
      setIsLogin(true);
    }
  }, [value]);

  function redirectToLogin() {
    Router.push("/auth/login");
  }

  function handleLogout(e: any) {
    setIsLogin(false);
    setValue(0);
    redirectToLogin();
  }

  return (
    <React.Fragment>
      {isLogin ? (
        <Layout handleLogout={handleLogout}>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </React.Fragment>
  );
}
