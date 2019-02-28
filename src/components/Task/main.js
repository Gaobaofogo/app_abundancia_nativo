import React from 'react';

import { View, Text } from 'react-native'; 


const Task = ({ title, body }) => (
  <View>
    <Text>{title} - {body}</Text>
  </View>
);


export default Task;
