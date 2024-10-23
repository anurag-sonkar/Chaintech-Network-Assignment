import React, { lazy } from 'react'
const Profile = lazy(() => import("../components/Profile"));

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