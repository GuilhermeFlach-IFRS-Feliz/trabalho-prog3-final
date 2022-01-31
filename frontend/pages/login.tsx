import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login: NextPage = () => {
  const { login, createAccount } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isCreatingNewAccount, setIsCreatingNewAccount] = useState(false);
  const [error, setError] = useState("");

  async function submit() {
    //create account
    if (isCreatingNewAccount) {
      const response = await createAccount(username, email, password);
      if (typeof response === "string") {
        //api returned an error
        setError(response);
        return;
      }

      // === true just in case response is a weird error object that evaluates to true
      if (response === true) Router.push("/");
      else setError("Não foi possível criar sua conta");
      return;
    }

    //log the user in
    const success = await login(username, password);
    if (success) Router.push("/");
    else setError("Login inválido!");
  }

  return (
    <div>
      <Head>
        <title>Ideas - Login</title>
        <meta name="description" content="gamer ideas login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isCreatingNewAccount && (
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
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
      <button onClick={() => setIsCreatingNewAccount(!isCreatingNewAccount)}>
        {isCreatingNewAccount
          ? "Fazer login em uma conta existente"
          : "Criar uma conta em vez disso"}
      </button>
      {error}
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
