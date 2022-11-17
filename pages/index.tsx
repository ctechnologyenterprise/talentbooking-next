import Head from "next/head";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talent Booking</title>
        <meta name="description" content="Talent booking application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold">Welcome to Talent Booking!</h1>
      </main>
    </div>
  );
}
