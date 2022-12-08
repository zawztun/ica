import Layout from "../Layout";
import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import client from "../utils/apollo";


function MyApp({ Component, pageProps }) {
  return (
   
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
   
  );
}

export default MyApp;
