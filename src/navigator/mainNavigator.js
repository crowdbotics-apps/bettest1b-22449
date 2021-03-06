import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2169952Navigator from '../features/BlankScreen2169952/navigator';
import BlankScreen1169951Navigator from '../features/BlankScreen1169951/navigator';
import BlankScreen0169950Navigator from '../features/BlankScreen0169950/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2169952: { screen: BlankScreen2169952Navigator },
BlankScreen1169951: { screen: BlankScreen1169951Navigator },
BlankScreen0169950: { screen: BlankScreen0169950Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
