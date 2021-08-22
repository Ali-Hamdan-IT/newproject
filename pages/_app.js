import "../styles/globals.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>FitSport</title>
          <meta name="gymclub" content="build your body" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>FitSport</title>
        <meta name="gymclub" content="build your body" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
