import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Idea from "../types/Idea";

const Home: NextPage = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    async function a() {
      const result = await fetch("http://localhost:3001/ideas/latest/").then(
        (r) => r.json()
      );
      setIdeas(result);
    }
    a();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ideas</title>
        <meta name="description" content="gamer ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {ideas.length &&
          ideas.map((idea) => (
            <>
              <p>{idea.title}</p>
              <p>{idea.text}</p>
            </>
          ))}
      </main>
    </div>
  );
};

export default Home;
