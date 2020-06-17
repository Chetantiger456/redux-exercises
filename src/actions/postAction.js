import Axios from "axios"

export const setPost = (posts) =>{
    return { type: 'SET_POSTS', payload: posts}
}

export const startGetPosts = ()=>{
    return function(dispatch) {
        Axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data
            dispatch(setPost(posts))
        })
    }
}