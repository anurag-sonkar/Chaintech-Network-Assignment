import React from 'react';
import { useUserAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    const {user} = useUserAuth()
    console.log(user)

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <div className='header'>
            <h1 className='header-title'>User Management Account</h1>
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
