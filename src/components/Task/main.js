import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native'; 


const Task = ({ title }) => (
  <View style={styles.boxTask}>
    <Text style={styles.title}>{title}</Text>
    <Button
          onPress={() => {}}
          title='Iniciar'
          color='black'
          style={styles.button}
        />
  </View>
);

const styles = StyleSheet.create({
  boxTask: {
    width: '85%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 3,
    marginBottom: 15
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default Task;
