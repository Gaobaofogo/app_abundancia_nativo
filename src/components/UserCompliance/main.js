import React from 'react';

import { TextInput, View, StyleSheet, Text, Button } from 'react-native';

import LocalStorage from '../../DBInterface/LocalStorage';

class UserCompliance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  async buttonPress() {
    const { name } = this.state;
    const { navigate } =  this.props.navigation;

    try {
      await LocalStorage.saveUserName(name);
      navigate('Tasks', { userName: name });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Bem vindos aos 21 dias de meditanção. Digite como gostaria de ser chamado
        </Text>
        <TextInput onChangeText={name => this.setState({ name })} style={styles.boxInput} />
        <Button
          onPress={() => this.buttonPress()}
          title='Começar minha jornada'
          color='black'
          style={styles.button}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxInput: {
    backgroundColor: 'white',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    width: '80%',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    width: '80%',
  }
});

export default UserCompliance;
