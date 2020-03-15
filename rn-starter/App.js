import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import MyFirstApp from "./src/screens/1_Excercise";
import FlatList from "./src/screens/2_SimpleFlatList";
import TestComp from "./src/screens/TestComponent";
import ExcerciseList from './src/screens/3_Excercise';
import ImageScreen from './src/screens/4_ImageScreen';
import CounterScreen from './src/screens/5_CounterScreen';
import ColorScreen from './src/screens/6_ColorScreen';
import SquareScreen from './src/screens/7_SquareScreen';
import SquareScreenWithReducer from './src/screens/8_SquareScreenWithReducer';
import ColorsComunityConvention from './src/screens/9_ColorsComunityConvention';
import CounterScreenWithReducer from './src/screens/10_Excercise_Counter_With_Reducers';
import TextScreen from './src/screens/11_TextScreen';
import PasswordInput from './src/screens/12_PasswordInput';
import BoxScreen from './src/screens/13_BoxScreen';
import FlexBoxModel from './src/screens/14_FlexBoxModel';
import PositionProperty from './src/screens/15_PositionProperty';
import ExcerciseBoxScreen from './src/screens/16_ExcerciseBoxScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FirstApp: MyFirstApp,
    FlatList: FlatList,
    TestComp: TestComp,
    ExcerciseList: ExcerciseList,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen:ColorScreen,
    SquareScreen:SquareScreen,
    SquareScreenWithReducer:SquareScreenWithReducer,
    ColorsComunityConvention: ColorsComunityConvention,
    CounterScreenWithReducer: CounterScreenWithReducer,
    TextScreen: TextScreen,
    PasswordInput: PasswordInput,
    BoxScreen: BoxScreen,
    FlexBoxModel: FlexBoxModel,
    PositionProperty:PositionProperty,
    ExcerciseBoxScreen: ExcerciseBoxScreen
    
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
