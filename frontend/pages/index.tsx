import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext } from "react";
import Ideas from "../components/ideas";
import { Container } from "../components/styled/Container.styled";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Head>
        <title>Ideas</title>
        <meta name="description" content="gamer ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*    HEADER?     */}

      <Container>
        <p>Olá {user?.username}</p>
        <Ideas></Ideas>
      </Container>

      {/*    FOOTER?     */}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
