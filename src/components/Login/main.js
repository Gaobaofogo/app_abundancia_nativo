import React, { Component, Fragment } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.goToCreateAccount = this.goToCreateAccount.bind(this);
  }

  goToCreateAccount() {
    const { navigate } = this.props.navigation;

    navigate('Registration');
  }

  render() {
    return (
      <View>
        <Text>Sou a tela de login</Text>
        <Button
            onPress={() => this.goToCreateAccount()}
            title='Cadastrar'
            color='black'
          />
      </View>
    );
  }
}

export default Login;
