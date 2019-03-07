import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { View, Text, ScrollView } from 'react-native';

import YouTube from 'react-native-youtube';

import ApiKey from '../../../api-key';


class TaskDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskId: props.navigation.getParam('taskId', 'default'), 
    };
  }

  static navigationOptions = {
    title: 'Tarefa'
  };

  render() {
    const { taskId } = this.state;

    const QUERY = gql`
    {
      tasks(id: ${taskId}) {
        id
        title
        body
        video
      }
    }
    `;

    return(
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return (<View><Text>Fetching</Text></View>);
          if (error) return (<View><Text>Error - {error}</Text></View>);
          
          const task = data.tasks[0];

          return (
            <ScrollView>
              <Text>{task.body}</Text>
              <YouTube
                videoId={task.video}   // The YouTube video ID
                play={true}             // control playback of video with true/false
                fullscreen={true}       // control whether the video should play in fullscreen or inline
                loop={true}             // control whether the video should loop when ended
                apiKey={ApiKey}
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}

                style={{ alignSelf: 'stretch', height: 300 }}
              />
            </ScrollView>
          )
        }}
      </Query>
    );
  }
}

export default TaskDescription;
