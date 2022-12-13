import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "styles/layout.css";
import Head from "next/head";
import '../components/Navbar.css'
import Navbar from '../components/Navbar'

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome YouTube channel" />
      </Head>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
