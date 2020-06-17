const userReducer = (state= [], action) => {
    switch(action.type){
        case 'SET_USERS': {
            return state.concat(action.payload)
        }
        default: {
            return state
        }
    }
}

export default userReducer