import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <div className="App">
      <h1 className='heading'>User Management App</h1>
      <Suspense fallback={<div>Loading...</div>}> {/* fallback when components are loading */}
        <Routes> {/* in order to write muktiple Route need to wrap inside Routes wrapper */}
          <Route path='/' Component={Login} /> {/* display specific component on that path*/}
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/signup' Component={Signup} />
        </Routes>
      </Suspense>
    </div>

  )
}

export default App