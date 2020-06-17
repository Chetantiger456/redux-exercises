import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import messagesReducer from '../reducers/messagesReducer'
import postReducer from '../reducers/postReducer'
import userReducer from '../reducers/userReducer'

//action generators -> action(obj)
//thunk -action generators -> action(obj) + function(dispatch){ }
const rootReducers = {
    count: countReducer,
    messages: messagesReducer,
    users: userReducer,
    posts: postReducer
}

const configureStore = () => {
    const store = createStore(combineReducers(rootReducers), applyMiddleware(thunk))
    return store
}

export default configureStore
