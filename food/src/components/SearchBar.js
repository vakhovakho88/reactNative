import React from 'react';
import {View,StyleSheet, TextInput} from 'react-native';

// container, icon, input

// icon library
import {Feather} from '@expo/vector-icons';
// every library for icons has own name property and this decides wich icon do we want.



const SearchBar = ({term,onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
            value={term}  
            placeholder="Search..."
            style={styles.inputStyle}
            onChangeText = {newTerm=> onTermChange(newTerm)}
            onEndEditing = {onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </View>
    );
}
// onChangeText = {newTerm=> onTermChange(newTerm)}
// it could be too: onChangeText = {onTermChange}
// newTerm is automatically the inputvalue of the textbox
// enter clicked
//onEndEditing = {()=> console.log("Editing ended")}
//   onEndEditing = {(val)=> console.log(val.nativeEvent.text)} 
// val is a big object
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        // this acts like self padding from left and right
        marginHorizontal:15,
        flexDirection:"row",
        marginTop:15,
        marginBottom:10
    },
    inputStyle: {
        // borderColor:'black',
        // borderWidth:1,
        fontSize: 18,
        flex:1, // to use the rest place
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center", // vertical sorting here
        marginHorizontal: 15
    }
});

export default SearchBar;

