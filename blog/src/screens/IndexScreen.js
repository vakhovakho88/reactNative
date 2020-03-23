import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
//icon class
import {Feather} from '@expo/vector-icons';

// props object has navigation too.we can destructure it
const IndexScreen = ({navigation})=>{
    //context #6
    // access a context value
    // diese Index screen recieves blog content not from props.
    // we are using here a context. these are like props but we can jump over elements in the middle.
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    return <View>
        <FlatList
        data={state}
        keyExtractor = {(blogpost)=>blogpost.title}
        renderItem = {({item})=>{
        return <TouchableOpacity onPress={()=>navigation.navigate("ShowScreen", {id:item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                        <Feather name='trash' style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        }}
        />
        
    </View>
};



// ad a plus item to add blog
IndexScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: ()=> <TouchableOpacity onPress={()=>navigation.navigate('CreateScreen')}>
                <Feather name="plus" size={30}/>
                </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    //row is for every blog item in the main screen
    row: {
        flexDirection:"row", // make it horizontal
        justifyContent: "space-between", // make spaces between it
        paddingVertical: 20,
        borderTopWidth:1,
        borderColor: 'gray',
        paddingHorizontal:10
    },
    title: {
        fontSize:18
    },
    icon: {
        //it has another scalability as text font size
        fontSize:24
    }

});

export default IndexScreen;


// <TouchableOpacity onPress={()=>console.log(item.id)}>
// if we have nested touchableopacities and we click child component the click event
// of outter toucheblaopacity will not be called.