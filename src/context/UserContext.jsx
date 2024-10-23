import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// creating user context - to acccess data of those comonents which were wrap inside context provider f userContext
const UserContext = createContext()

// custom hook to access user Context data-field more easily
export const useUserAuth = () => useContext(UserContext)

// userContext provider which provides the data to its childs components
const UserContextProvider = (props) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user')) 

    // on render check for user and do navigation if user exists
    useEffect(
        () => {
            if (user) {
                // console.log(user)
                navigate('/dashboard')
            }
        }, []   /* side-effect check user exists in localStorage , and show page accordingly */
    )

    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider