import type { AppProps } from "next/app";
import { AuthContextProvider } from "../contexts/AuthContext";
import { GlobalStyles } from "../components/styled/GlobalStyles";
import { MainHeader } from "../components/styled/Header.styled"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <>
        <GlobalStyles></GlobalStyles>
        <MainHeader>Lidea</MainHeader>
        <Component {...pageProps} />
      </>
    </AuthContextProvider>
  );
}

export default MyApp;
