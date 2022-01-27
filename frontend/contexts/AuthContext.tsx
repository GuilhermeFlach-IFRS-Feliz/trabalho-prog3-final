import { createContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";
import axios from "../helpers/axios";

export const AuthContext = createContext({} as AuthContextValue);

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);

  function setUserInfo() {
    const { username, email } = parseCookies(undefined);
    //there is no need to get the userId token and verify it exists
    //because thats handled in getServerSideProps in SSR

    setUser({
      username,
      email,
    });
  }

  useEffect(() => {
    setUserInfo();
  }, []);

  //use this to submit the login form
  async function login(username: string, password: string) {
    try {
      await axios.post("/login", { username, password });
    } catch (error) {
      return false;
    }

    setUserInfo();
    return true;
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

interface User {
  username: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
}
