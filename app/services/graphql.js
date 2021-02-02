import { InMemoryCache, ApolloClient } from "@apollo/client";
import { API_URL } from "../constants.js";

const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
