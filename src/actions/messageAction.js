export const addMessage = (message) => {
    return { type: 'ADD_MESSAGE', payload: message}
}

export const updateMessage = (message) => {
    return { type: 'UPDATE_MESSAGE', payload: message}
}