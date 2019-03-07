import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import TaskList from './components/TaskList/main';
import TaskDescription from './components/TaskDescription/main';
import UserCompliance from './components/UserCompliance/main';
import Initialization from './components/Initialization/main';
import Login from './components/Login/main';
import Registration from './components/Registration/Registration';

const LoginRegistrationStack = createStackNavigator(
  {
    Login,
    Registration
  }
);

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
    LoginRegistration: LoginRegistrationStack,
    Initialization: InitializationStack,
    Compliance: UserComplianceStack,
    Tasks: TaksStack
  }
));
