import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    const someValue = "Helooo";
    const someValue2 = 10;
    //we cannot render javascript object!! 
    const someValue3 =<Text style={styles.text}>JSX in a variable</Text>; // good if we need rendering
    return (
        <View>
        <Text style={styles.text}>this is a Text text</Text>
        <Text style={styles.text}>{someValue}</Text>
        <Text style={styles.text}>{someValue2}</Text>
        {someValue3}
        </View>
    )

    // or without parantheses, the opening tag of root element must be on line 1.
    // return <View>
    //     <Text style={styles.text}>this is a Text text</Text>
    //     <Text style={styles.text}>{someValue}</Text>
    //     <Text style={styles.text}>{someValue2}</Text>
    //     {someValue3}
    //     </View>


    // multiline with parantheses or opening tag on same line, opening parantheses on the same line too

}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: 'red',
      backgroundColor:"blue",
      textAlign: 'center',
      padding: 3,
      marginBottom:1
      
    }
  });

export default ComponentsScreen;