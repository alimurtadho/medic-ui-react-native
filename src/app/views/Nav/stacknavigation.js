import { StackNavigator } from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

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
  }
},
{
  initialRouteName: 'Screen1'
});