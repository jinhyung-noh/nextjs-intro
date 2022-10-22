import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
};

export default App;
