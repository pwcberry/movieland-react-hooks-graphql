import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./services/graphql";
import { ROOT_DOM } from "./constants";
import App from "./App";

// const client = new ApolloClient({
//     link: new HttpLink({ uri: `http://localhost:4001/graphql` }),
//     cache: new InMemoryCache(),
// });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById(ROOT_DOM)
);
