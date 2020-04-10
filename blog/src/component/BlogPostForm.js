// this is a form for EditScreen and CreateScreen
import React, {useState} from 'react';
import {View,Text,StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit,initialValues})=>{
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return <View>
    <Text style={styles.label}>Enter Title</Text>
    <TextInput 
        style={styles.input} 
        value={title} 
        onChangeText={(text)=>setTitle(text)
        }
    />
    
    <Text style={styles.label}>Enter Content</Text>
    
    <TextInput 
        style={styles.input} 
        value={content} 
        onChangeText={(text)=>setContent(text)}
    />
    
    <Button 
        title="Save Blog Post"
        onPress={()=>onSubmit(title,content)}
    />
</View>
}

//it is a cool thing, to have prop default values
// we are using it here to avoid an error when we come to this from from CreateScreen
// it will be used if this props are not initialized.
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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
export default BlogPostForm;