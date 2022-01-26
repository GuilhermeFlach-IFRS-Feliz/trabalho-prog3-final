import type { NextPage } from "next";
import Head from "next/head";
import Ideas from "../components/ideas";
import styles from "../styles/Home.module.css";
import Idea from "../types/Idea";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ideas</title>
        <meta name="description" content="gamer ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Ideas></Ideas>
      </main>
    </div>
  );
};

export default Home;
