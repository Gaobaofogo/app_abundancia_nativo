import React from 'react';

import { View, Text, ActivityIndicator, StatusBar, Alert, AsyncStorage } from 'react-native';


class Initialization extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
      const token = JSON.stringify(await AsyncStorage.getItem('id_token'));

      if (token === 'null') {
        this.props.navigation.navigate('LoginRegistration');
      } else {
        this.props.navigation.navigate('Tasks');
      }
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

export default Initialization;
