import React from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag';

import { View, Text, Button, StyleSheet } from 'react-native';

import TaskExibition from '../TaskExibition/main';

const QUERY = gql`
{
  tasks {
    id
    title
  }
}
`;

class TaskList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };

    this.selectTask = this.selectTask.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Bem vindo aos 21 dias'
    }
  };

  selectTask(id, title) {
    const { navigate } = this.props.navigation;

    navigate('TaskDescription', { taskId: id, title });
  }

  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return (<View><Text>Fetching</Text></View>);
          if (error) return (<View><Text>Error</Text></View>);

          const tasksToRender = data.tasks;

          return (
            <View style={styles.container}>
              {tasksToRender.map(task =>
                (
                  <TaskExibition
                    title={task.title}
                    key={task.id}
                    changePage={() => this.selectTask(task.id, task.title)}
                  />
                )
              )}
            </View>
          )
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskList;
