import React, { Component, Fragment } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';

const POST_MUTATION = gql`
  mutation {
    createUser($username: !String, $password: !String) {
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

    this.registerUser = this.registerUser.bind(this);
  }

  registerUser() {
    const { username, password } = this.state;
  }

  render() {
    const { username, password } = this.state;

    return (
        <View>
          <TextInput onChangeText={username => this.setState({ username })} />
          <TextInput onChangeText={password => this.setState({ password })} />
          <Mutation mutation={POST_MUTATION} variables={{ username, password }}>
            {postMutation => (
              <Button
                onClick={postMutation}
                title='Cadastrar'
                color='black'
              />
            )}
          </Mutation>
        </View>
    );
  }
}

export default Registration;
