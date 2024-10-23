import React from 'react'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='vertical-navbar'>
            <div>👤</div>
        </div>
        <div className='profile-container'>
            <Profile />
        </div>
    </div>
  )
}

export default Dashboard