import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creating user context to access data in child components
const UserContext = createContext();

// Custom hook to access UserContext data more easily
export const useUserAuth = () => useContext(UserContext);

// UserContextProvider that provides user data to its child components
const UserContextProvider = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Function to fetch user from localStorage
    const fetchUser = () => {
        const response = JSON.parse(localStorage.getItem('user'));
        if (response) {
            setUser(response);
            // Navigate only if the user is not already on the dashboard
            if (window.location.pathname !== '/dashboard') {
                navigate('/dashboard');
            }
        }
    };

    // Check for user and navigate if needed when the component mounts
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, fetchUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
