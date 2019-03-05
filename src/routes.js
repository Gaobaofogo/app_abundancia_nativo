import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import TaskList from './components/TaskList/main';
import TaskDescription from './components/TaskDescription/main';
import UserCompliance from './components/UserCompliance/main';
import Initialization from './components/Initialization/main';

const TaksStack = createStackNavigator(
  {
    TaskList,
    TaskDescription
  }
);

const UserComplianceStack = createStackNavigator(
  {
    UserCompliance
  }
);

const InitializationStack = createStackNavigator(
  {
    Initialization
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    Initialization: InitializationStack,
    Compliance: UserComplianceStack,
    Tasks: TaksStack
  }
));
