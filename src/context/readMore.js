import { createContext } from 'react'

// using redux only for app data
// using context for local user interface data
 
const ShowReadMoreContext = createContext()

export const ShowReadMoreContextProvider = UserContext.Provider
export const ShowReadMoreContextConsumer = UserContext.Consumer

export default ShowReadMoreContext