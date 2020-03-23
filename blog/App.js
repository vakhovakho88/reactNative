import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
// for our navigation wrapping we need it 
import React from 'react';

import {Provider} from './src/context/BlogContext';

const navigator = createStackNavigator({
  IndexScreen:IndexScreen,
  ShowScreen,
  CreateScreen,
  EditScreen,
},
{
initialRouteName: 'IndexScreen',
defaultNavigationOptions: {
  title: 'blogs'
}
});



//#1
// export default createAppContainer(navigator);
// instead we make 
const App = createAppContainer(navigator);

//context #4
// The Blogprovider creates a value given tpo a context
export default () => {
  return <Provider> 
          <App /> 
        </Provider>
}