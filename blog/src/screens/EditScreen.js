import React, {useContext,useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';


const EditScreen = ({navigation})=>{
    const {state} = useContext(Context); // receive all states
    
    // now lets find a state with our searched Id.
    const blogPost = state.find(
        // if we have the parantheses in the function body we shoul have return too.
        (blogPost)=> {return blogPost.id===navigation.getParam('id')}
    )

    const [title,setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);
    return <View>
            <Text>Title:</Text>
            <TextInput value={title} onChangeText={(newText)=>{setTitle(newText)}}/>
        </View>
}

const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth:1,
        borderColor: 'black',
        marginBottom:15,
        margin:5,
        padding:5,
    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginLeft:5,
    }
});

export default EditScreen;