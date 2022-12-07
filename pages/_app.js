import Layout from "../Layout";
import "../styles/globals.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";
// import client from "../utils/apollo";
// import { loadStaticPaths } from "next/dist/server/dev/static-paths-worker";

function MyApp({ Component, pageProps }) {
  return (
   
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
  );
}

export default MyApp;
