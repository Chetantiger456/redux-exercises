import Axios from "axios"

export const setUsers = (users) => {
    return {type : 'SET_USERS', payload : users}
}

export const startGetUsers = () => {
    return function(dispatch){
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            const users = response.data
            dispatch(setUsers(users))
        })
    }
}
