// it was all before refactoring

//context #1
// create a context
const BlogContext = React.createContext();



const blogReducer = (state,action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [...state, {title:`Blog Post #${state.length+1}`}];
        default:
            return state;
    }
}



//context #2
// create a Provider that passes an argument to a context
//children is something between tags
export const BlogProvider = ({children})=>{

    // we neeed here state too, two have binding from datat to UI
    // this is initially an empty array
    /*const [blogPosts, setBlogPost] = useState([]);

    const addBlogPost = ()=>{
        setBlogPost([...blogPosts, {title:`Blog Post #${blogPosts.length+1}`}]);
    }
    const editBlogPost = () =>{}
    const deleteBlogPost = () =>{}
    // or alternatively we can manage our state object with useReducer hook.
    // What we have here is fine but usereducer is just an aprovement.

    */

   const [blogPosts, dispatch] = useReducer(blogReducer,[]);
   const addBlogPost = ()=>{
        dispatch({type:'add_blogpost'});
   }


    return <BlogContext.Provider value={{data:blogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
}

//context #3
// within this tag we can access the given value

export default BlogContext;

// blogcontext is a whole tag
// Via BlogProvider we can give any parameter to a child component.
// context is just about to moving information. it is not a state, we use just normal states here.
