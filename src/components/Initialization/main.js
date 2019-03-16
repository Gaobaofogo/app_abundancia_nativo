import React from 'react';

import { View, Text } from 'react-native';

import LocalStorage from '../../DBInterface/LocalStorage';

class Initialization extends React.Component {
  constructor() {
    super();

    this.init();
  }

  async init() {
    try {
      const userName = await LocalStorage.getUserName();

      this.props.navigation.navigate(userName ? 'Tasks' : 'Compliance');
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <View>
        <Text>Olá mundo</Text>
      </View>
    );
  }
}

export default Initialization;
