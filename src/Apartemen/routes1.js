import Home from './Home';
import Home1 from './Home1';
import Details from './Details';

import SideMenu from './SideMenu/SideMenu';
import { DrawerNavigator } from 'react-navigation';

export default DrawerNavigator(
    {
        Home: {
            screen: Home
        },
        Home1: {
            screen: Home1
        },
        Details: {
            screen: Details
        },
     
    }, {
        initialRouteName: 'Home',
        contentComponent: SideMenu,
        drawerWidth: 300
    });
