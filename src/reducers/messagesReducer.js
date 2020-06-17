import { connect } from "react-redux"

const messagesInitialState = [
    { id: 1, body: 'this is a new message', createdAt: new Date() }
]
const messagesReducer = (state = messagesInitialState , action) => {
    switch(action.type) {
        case 'ADD_MESSAGE' : {
            return state.concat(action.payload)
        }
        case 'UPDATE_MESSAGE' : {
            // console.log(action.payload.id)
            return state.map((message)=>{
                if(message.id === action.payload.id) {
                   //  console.log(message.id === action.payload.id)
                     return Object.assign({}, message, action.payload)
                } else {
                    return Object.assign({}, message)
                }
             // return (message.id === action.payload.id)? Object.assign({}, message, action.payload) : Object.assign({}, message)
             })
         }
        default: {
            return [].concat(state)
        }
    }
}

export default messagesReducer