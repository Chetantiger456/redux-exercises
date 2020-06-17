const postReducer = (state = [], action) => {
    switch(action.type){
        case "SET_POSTS" : {
            return state.concat(action.payload)     
        }
        default: {
            return [].concat(state)
        }
    }
}

export default postReducer