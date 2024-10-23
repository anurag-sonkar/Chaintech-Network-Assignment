import React from 'react';
import { useUserAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate() 
    const {user , setUser} = useUserAuth() //from userContext

    const handleLogout = ()=>{
        localStorage.removeItem('user') //get from local storage
        setUser(null) // set to null 
        navigate('/') // then navigate
    }
    return (
        <div className='header'>
            <h1 className='header-title'>User Management Account</h1>
            {/* showing button based in user available orr not */}
            <div className='header-buttons'>
                {
                    user ? <button className='auth-btn' onClick={handleLogout} >Logout</button> : <><button className='auth-btn' onClick={() => navigate('/signup')}>Signup</button>
                        <button className='auth-btn' onClick={() => navigate('/')}>Login</button></>
                }
            </div>
        </div>
    );
}

export default Header;
