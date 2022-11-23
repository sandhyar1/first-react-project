import React from 'react'
//Context only work with class components
//you can subscribe only single context using contextType.

const UserContext = React.createContext('default')

const UserProvider = UserContext.Provider
const UserConsumer= UserContext.Consumer


export {UserConsumer,UserProvider}
export default UserContext
