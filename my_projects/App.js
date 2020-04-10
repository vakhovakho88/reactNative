import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PhotoAlbum from './src/screens/PhotoAlbum';
import MainScreen from './src/screens/MainScreen';
import Test from './src/screens/Test';

const navigator = createStackNavigator(
  {
    PhotoAlbum,
    MainScreen,
    Test
  },
  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: {
      title: "Photo Album"
    }
  }
);

export default createAppContainer(navigator);
