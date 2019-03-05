import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native'; 


class TaskExibition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, changePage } = this.props;

    return (
    <View style={styles.boxTask}>
      <Text style={styles.title}>{title}</Text>
      <Button
            onPress={() => changePage()}
            title='Entrar na tarefa'
            color='black'
            style={styles.button}
          />
    </View>
    );
  }
};

// const TaskExibition = ({ title, changePage }) => (
//   <View style={styles.boxTask}>
//     <Text style={styles.title}>{title}</Text>
//     <Button
//           onPress={() => changePage()}
//           title='Iniciar'
//           color='black'
//           style={styles.button}
//         />
//   </View>
// );

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

export default TaskExibition;
