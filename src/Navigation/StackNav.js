import { StackNavigator } from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

import Antre from '../Medik/Antre';
import Doctorprf from '../Medik/Doctorprf';
import Login from '../Medik/Login';
import Nearby from '../Medik/Nearby';
import profile1 from '../Medik/profile1';
import Schedule from '../Medik/Schedule';
import screen from '../Medik/screen';
import SignUpß from '../Medik/SignUp';

export default StackHome = StackNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Here is screen 1 !'
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      title: 'Screen 2'
    })
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: () => ({
      title: 'Screen 3'
    })
  },
  screen: {
    screen: screen,
    navigationOptions: () => ({
      title: 'screen'
    })
  }
},
{
  initialRouteName: 'screen'
});