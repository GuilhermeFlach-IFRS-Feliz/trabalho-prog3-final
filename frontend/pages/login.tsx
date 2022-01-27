import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login: NextPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const success = await login(username, password);
    if (success) Router.push("/");
  }

  return (
    <div>
      <Head>
        <title>Ideas - Login</title>
        <meta name="description" content="gamer ideas login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Login</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
