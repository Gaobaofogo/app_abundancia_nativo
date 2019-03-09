import React, { Component, Fragment } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { ApolloConsumer } from 'react-apollo';

import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';

import deviceStorage from '../../services/deviceStorage';


const POST_MUTATION = gql`
  mutation Register($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      tokenAuth(username: $username, password: $password) {
        token
      }
    }
  }
`;

const testPost = gql`
  mutation Register($username: String!, $password: String!){
    createUser(username: $username, password: $password) {
      user {
        id
        username
      }
    }
  }
`;

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: 'Cadastro'
  };

  render() {
    return (
        <View>
          <TextInput onChangeText={username => this.setState({ username })} />
          <TextInput onChangeText={password => this.setState({ password })} />

          <Mutation
          mutation={testPost}
          variables={{ username: this.state.username, password: this.state.password }}
          update={(store, { data }) => {
            Alert.alert('Resultado do servidor', data.createUser.user['username']);
          }}>
            {postMutation => (
              <Button
                onPress={postMutation}
                title="Cadastrar"
                color="black"/>
            )}
          </Mutation>
        </View>
    );
  }
}

export default Registration;
