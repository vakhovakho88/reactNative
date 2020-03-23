import createDataContext from './createDataContext';

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

// it means in this structure we just need to add new function for the functionality
// and add a case to reducer

export const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost},
    [{id:1, title:'Test Post1', content:'Test content 1'},{id:2,title:'Test Post2', content:'Test content 2'}]
);


// it was all before refactoring

// //context #1
// // create a context
// const BlogContext = React.createContext();


// const blogReducer = (state,action)=>{
//     switch (action.type){
//         case 'add_blogpost':
//             return [...state, {title:`Blog Post #${state.length+1}`}];
//         default:
//             return state;
//     }
// }



// //context #2
// // create a Provider that passes an argument to a context
// //children is something between tags
// export const BlogProvider = ({children})=>{

//     // we neeed here state too, two have binding from datat to UI
//     // this is initially an empty array
//     /*const [blogPosts, setBlogPost] = useState([]);

//     const addBlogPost = ()=>{
//         setBlogPost([...blogPosts, {title:`Blog Post #${blogPosts.length+1}`}]);
//     }
//     const editBlogPost = () =>{}
//     const deleteBlogPost = () =>{}
//     // or alternatively we can manage our state object with useReducer hook.
//     // What we have here is fine but usereducer is just an aprovement.

//     */

//    const [blogPosts, dispatch] = useReducer(blogReducer,[]);
//    const addBlogPost = ()=>{
//         dispatch({type:'add_blogpost'});
//    }


//     return <BlogContext.Provider value={{data:blogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
// }

// //context #3
// // within this tag we can access the given value

// export default BlogContext;

// // blogcontext is a whole tag
// // Via BlogProvider we can give any parameter to a child component.

// // context is just about to moving information. it is not a state, we use just normal states here.
