import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import Ideas from "../components/ideas";
import Router from "next/router";
import { AuthContext } from "../contexts/AuthContext";
import {
  WelcomeHeader,
  LogoutButton,
} from "../components/styled/Header.styled";
import {
  Container,
  IdeasContainer,
} from "../components/styled/Sections.styled";
import { ideaSorting } from "../helpers/ideas";

const Home: NextPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [sorting, setSorting] = useState<ideaSorting>(ideaSorting.latest);

  // function for logging the user out
  async function endSession() {
    const response = await logout();

    if (response === true) location.reload();
  }

  return (
    <Container>
      <Head>
        <title>Ideas</title>
        <meta name="description" content="gamer ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeHeader>
        Logado como {user?.username} ({user?.email}){" "}
        <LogoutButton onClick={endSession}>Sair</LogoutButton>
      </WelcomeHeader>
      <IdeasContainer>
        <Ideas sorting={sorting}></Ideas>
      </IdeasContainer>
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
