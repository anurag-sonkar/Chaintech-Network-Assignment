import React, { lazy, useEffect, useState } from 'react'
import { useUserAuth } from '../context/UserContext'
const Modal = lazy(() => import("../components/Modal"));

// const dummyData = {
//     id : "545744554",
//     name : "Amit Singh",
//     email : "ankitsingh053@gmail.com",
//     gender : "male"
// }

function Profile() {
    const { user, fetchUser } = useUserAuth() // from userContext

    useEffect(
        ()=>{
            fetchUser()
        },[]
    )

    const [show , setShow] = useState(false) // modal open/close state
    
  return (
    <div className='container'>
        <span className='edit' onClick={()=>setShow(true)}>✏️</span>
        <div className='profile-image'>
            <img src='assets/profile.jpeg'/>
        </div>
        <div>
            <div className='profile-info'>
                <label>Name: </label>
                <p>{user?.name}</p>
            </div>
            <div className='profile-info'>
                <label>Email: </label>
                <p>{user?.email}</p>
            </div>
            <div className='profile-info'>
                <label>Gender: </label>
                <p>{user?.gender}</p>
            </div>

        </div>
            {show && <Modal setShow={setShow}/>}

    </div>
  )
}

export default Profile