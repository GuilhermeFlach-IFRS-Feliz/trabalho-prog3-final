import type { AppProps } from "next/app";
import { AuthContextProvider } from "../contexts/AuthContext";
import { GlobalStyles } from "../components/styled/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <>
        <GlobalStyles></GlobalStyles>
        <Component {...pageProps} />
      </>
    </AuthContextProvider>
  );
}

export default MyApp;
