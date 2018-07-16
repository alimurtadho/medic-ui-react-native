import { DrawerNavigator, StackNavigator } from 'react-navigation';
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

const StackScreen1 = StackNavigator({
  profile1: {
    screen: profile1,
    navigationOptions: () => ({
      title: 'Here is screen 1 !',
      headerTintColor: 'white',
      headerStyle: {
      
      }
    })
  }
});

const StackScreen2 = StackNavigator({
  Doctorprf: {
    screen: Doctorprf,
    navigationOptions: () => ({
      title: 'Here is screen 2 !',
     
    })
  }
});
const StackScreen3 = StackNavigator({
  Screen3: {
    screen: Screen3,
    navigationOptions: () => ({
      title: 'Here is screen 2 !',
     
    })
  }
});

export default Drawer = DrawerNavigator({
  Screen1: {
    screen: StackScreen1
  },
  Doctorprf: {
    screen: StackScreen2
  },
  Screen3: {
    screen: StackScreen3
  }
}, {

  });