// let us make a list (Horizontal) with 3 rectangles
// the middle one must be int he middle and in second line
 import React from 'react';
 import {View, StyleSheet} from 'react-native';

 const ExcerciseBoxScreen  = ()=>{
     return(
         <View style={styles.mainView}>
             <View style= {styles.firstBox}></View>
             <View style= {styles.secondBox}></View>
             <View style= {styles.thirdBox}></View>
         </View>
     );
 }

 const styles = StyleSheet.create({
     mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        // justifyContent: "space-around" would effect start end end spacing too 
        height:200,
        borderColor:'black',
        borderWidth:1
     },
     firstBox: {
        width:100,
        height:100,
        backgroundColor: 'orange'
     },
     secondBox: {
        width:100,
        height:100,
        backgroundColor: 'green',
        //top: 100 // way #1
        //marginTop:100 // way #2
        alignSelf:"flex-end" // way #3

     },
     thirdBox: {
        width:100,
        height:100,
        backgroundColor: 'red',
       
     }

 });
 export default ExcerciseBoxScreen;