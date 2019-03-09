import React from 'react';

import { View, Text } from 'react-native';


class Initialization extends React.Component {
  constructor() {
    super();

    this.init();
  }

  init() {
    this.props.navigation.navigate(userName ? 'Tasks' : 'Compliance');
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
