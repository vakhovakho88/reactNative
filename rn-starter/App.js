import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import MyFirstApp from "./src/screens/1_Excercise";
import FlatList from "./src/screens/2_SimpleFlatList";
import TestComp from "./src/screens/TestComponent";
import ExcerciseList from './src/screens/3_Excercise';
import ImageScreen from './src/screens/4_ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FirstApp: MyFirstApp,
    FlatList: FlatList,
    TestComp: TestComp,
    ExcerciseList: ExcerciseList,
    ImageScreen: ImageScreen
   
  },
  {
    //initialRouteName: "Home",
    //initialRouteName: "FirstApp",
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
