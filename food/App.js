import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen
    
  },
  {
    //initialRouteName: "Home",
    //initialRouteName: "FirstApp",
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
);

export default createAppContainer(navigator);
