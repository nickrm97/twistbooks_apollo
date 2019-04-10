import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Apollo stuff
import ApolloClient from "apollo-boost";
import { Query, ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://api.twistbooks.com/graphql"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <header className="App-header">
            <div className="App-logo">
              <h2>My first Apollo app 🚀</h2>
            </div>
          </header>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
