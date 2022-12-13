import styles from "../styles/About.module.scss";
import Footer from "@/layout/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <h2>About page</h2>
      <div className={styles.highlightscss}>About Page</div>
      <button className="btn btn-success">Primary</button>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
