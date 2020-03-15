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


    <Button
    title="Go to Image screen"
    onPress={()=>navigation.navigate('ImageScreen')}
    />
    <Button
    title="Go to the Counter Screen"
    onPress={()=>navigation.navigate('CounterScreen')}
    
    />
    <Button
    title="Go to the Color Screen"
    onPress={()=>navigation.navigate('ColorScreen')}
    
    />
    <Button
    title="Go to the Square Screen"
    onPress={()=>navigation.navigate('SquareScreen')}
    
    />
    <Button
    title="Go to the Square Screen with reducer"
    onPress={()=>navigation.navigate('SquareScreenWithReducer')}
    
    />
    <Button
    title="Go to the Square Screen with reducer, comunity"
    onPress={()=>navigation.navigate('ColorsComunityConvention')}
    
    />
    <Button
    title="Go to the counterscreen with reducer"
    onPress={()=>navigation.navigate('CounterScreenWithReducer')}
    
    />
      <Button
    title="Go to Text screen (input)"
    onPress={()=>navigation.navigate('TextScreen')}
    
    />
    
    <Button
    title="Go to password input"
    onPress={()=>navigation.navigate('PasswordInput')}
    />
    <Button
    title="Go to Box Object Model"
    onPress={()=>navigation.navigate('BoxScreen')}
    />
    <Button
    title="Go to Flex Box Model"
    onPress={()=>navigation.navigate('FlexBoxModel')}
    />
     <Button
    title="Go to Position Model"
    onPress={()=>navigation.navigate('PositionProperty')}
    />
     <Button
    title="Go to Excercise BoxScreen"
    onPress={()=>navigation.navigate('ExcerciseBoxScreen')}
    />
    





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