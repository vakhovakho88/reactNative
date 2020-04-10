import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const CreateScreen = ({navigation})=>{
    const {addBlogPost} = useContext(Context);
    return <BlogPostForm onSubmit={(title,content)=>{
        //addBlogPost(title,content);
        //navigation.navigate('IndexScreen'); // it should work Here but not with async calls
        
        // the second and better way is a callback function, but we should create callback in 
        //addBlogpost too
        addBlogPost(title,content,()=>{navigation.navigate('IndexScreen')})
    }} />
   
}

const styles = StyleSheet.create({});

export default CreateScreen;