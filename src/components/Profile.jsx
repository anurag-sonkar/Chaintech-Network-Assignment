import React from 'react'

const dummyData = {
    id : "545744554",
    name : "Amit Singh",
    email : "ankitsingh053@gmail.com",
    gender : "male"
}
function Profile() {
  return (
    <div className='container'>
        <span className='edit'>✏️</span>
        <div className='profile-image'>
            <img src='assets/profile.jpeg'/>
        </div>
        <div>
            <div className='profile-info'>
                <label>Name: </label>
                <p>{dummyData.name}</p>
            </div>
            <div className='profile-info'>
                <label>Email: </label>
                <p>{dummyData.email}</p>
            </div>
            <div className='profile-info'>
                <label>Gender: </label>
                <p>{dummyData.gender}</p>
            </div>

        </div>

    </div>
  )
}

export default Profile