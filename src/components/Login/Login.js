import React, { Component, Fragment } from 'react';
import { View, Text, Button, TextInput, Alert, AsyncStorage } from 'react-native';

import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';

import deviceStorage from '../../services/deviceStorage';


const POST_LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: 'Login'
  };

  render() {
    return (
      <View>
        <TextInput onChangeText={username => this.setState({ username })} />
        <TextInput onChangeText={password => this.setState({ password })} />

        <Mutation
        mutation={POST_LOGIN}
        variables={{ username: this.state.username, password: this.state.password }}
        update={async (store, { data }) => {
          deviceStorage.saveItem('id_token', data.tokenAuth.token);
          this.props.navigation.navigate('Tasks');
        }}>
          {loginMutation => (
            <Button
              onPress={loginMutation}
              title='Login'
              color='black' />
          )}
        </Mutation>
        <Button
            onPress={() => this.props.navigation.navigate('Registration')}
            title='Cadastrar'
            color='black'
          />
      </View>
    );
  }
}

export default Login;
