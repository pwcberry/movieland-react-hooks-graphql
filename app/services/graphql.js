import { InMemoryCache, ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { API_URL } from "../constants.js";

export default new ApolloClient({
    link: ApolloLink.from([new HttpLink({ _uri: `${API_URL}/graphql` })]),
    cache: new InMemoryCache(),
});
