import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import TaskList from './components/TaskList/main';
import TaskDescription from './components/TaskDescription/main';
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


const InitializationStack = createStackNavigator(
  {
    Initialization
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    LoginRegistration: LoginRegistrationStack,
    Initialization: InitializationStack,
    Tasks: TaksStack
  }
));
