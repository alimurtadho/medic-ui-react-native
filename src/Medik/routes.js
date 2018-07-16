import profile1 from './profile1';
import Doctorprf from './Doctorprf';
import Nearby from './Nearby';
import Login from './Login';
import screen from './screen';
import Schedule from './Schedule';
import Antre from './Antre';
import SignUp from './SignUp';
import alert from './alert';
import SideMenu from './SideMenu/SideMenu';
import { DrawerNavigator } from 'react-navigation';

export default DrawerNavigator(
    {
        profile1: {
            screen: profile1
        },
        Doctorprf: {
            screen: Doctorprf
        },
        Nearby: {
            screen: Nearby
        },
        Login: {
            screen: Login
        },
        screen: {
            screen: screen
        },
        Schedule: {
            screen: Schedule
        },
        Antre: {
            screen: Antre
        },
        SignUp: {
            screen: SignUp
        },
        alert : {
            screen: alert
        },

    }, {
        initialRouteName:'screen',
        contentComponent: SideMenu,
        drawerWidth: 300
    });
