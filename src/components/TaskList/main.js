import React from 'react';

import { Query } from 'react-apollo'
import gql from 'graphql-tag';

import { View, Text, Button } from 'react-native';

import Task from '../Task/main';

import LocalStorage from '../../DBInterface/LocalStorage';

const QUERY = gql`
{
  tasks {
    id
    title
    body
  }
}
`;

class TaskList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Bem vindo aos 21 dias'
    }
  };

  render() {
    const linksToRender = [
      {
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]

    return (
      <Query query={QUERY}>
        {(meuObj) => linksToRender.map(asd => {
          console.log('------------------------------');
          console.log('Meu objeto estranho', meuObj);
          console.log('------------------------------');

          return (
            <Text>kk</Text>
          );
        })}
      </Query>
    );
  }
}

export default TaskList;
