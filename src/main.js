import React from 'react';

import Routes from './routes';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'https://immense-wave-53840.herokuapp.com/graphql/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


export default class MainApp extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
