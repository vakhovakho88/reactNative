import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state,action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random()*99999), // generate an Index
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'delete_blogpost':
            return state.filter(
                    (blogPost)=>blogPost.id!==action.payload
                    );
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                // if this is an element that we changed....
                return blogPost.id===action.payload.id ? action.payload : blogPost;
            })
        default:
            return state;
    }
}

const addBlogPost = (dispatch)=>{
    return (title, content, callback)=>{
        dispatch({type:'add_blogpost',payload: {title, content}} );
        callback();
        // if it where an api call it should be in assync await and try catch block.....
    }   
}
//we use id as payload to say to the list wich item is to delete
const deleteBlogPost = (dispatch)=>{
    return (id)=>{
        dispatch({type:'delete_blogpost', payload:id});
    }   
}

const editBlogPost = (dispatch)=>{
    return (id, title, content, callback)=>{
        dispatch({
            type: 'edit_blogpost',
            payload: {id, title, content}
        });
        //if callback function exists than callback
        if (callback)
            callback();
    }
}

// it means in this structure we just need to add new function for the functionality
// and add a case to reducer

export const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    [{id:1, title:'Test Post1', content:'Test content 1'},{id:2,title:'Test Post2', content:'Test content 2'}]
);