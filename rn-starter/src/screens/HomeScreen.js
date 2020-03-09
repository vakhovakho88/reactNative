import React from "react";
import { Text, StyleSheet,View,Button, TouchableOpacity } from "react-native";



//destructuring hier, without it we should write props, and for
// onpress we should say: ()=>props.navigation.navigate('FirstApp')
const HomeScreen = ( {navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hi there, this is Home Screen</Text>
    <Button
    title="Go to Components Demo"
    onPress={()=>navigation.navigate('FirstApp')}
    />
   
    <TouchableOpacity onPress={()=>navigation.navigate('ExcerciseList')}>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
  )
};
// also possible: <Text style={{fontSize:30}}>Hi there there</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


// no js Object
// yes array 
// jsx as variable => for conditionally 