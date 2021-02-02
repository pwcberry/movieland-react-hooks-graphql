import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";
import { API_URL } from "../constants.js";

console.log("API_URL: '%s'", API_URL);

const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:4001/graphql" }),
    cache: new InMemoryCache(),
});

export default client;
