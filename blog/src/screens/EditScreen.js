import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const EditScreen = ({navigation})=>{
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context); // receive all states
    
    // now lets find a state with our searched Id.
    const blogPost = state.find(
        // if we have the parantheses in the function body we shoul have return too.
        (blogPost)=> {return blogPost.id===id}
    )

    return <BlogPostForm
        initialValues = {{title:blogPost.title, content:blogPost.content}}
        onSubmit={(title,content)=>{
            // navigation.pop() navigates one stap backwards
            editBlogPost(id,title,content,()=>{navigation.pop()});
        }}
    />
   
}

const styles = StyleSheet.create({});

export default EditScreen;