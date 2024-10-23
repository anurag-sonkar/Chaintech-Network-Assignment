import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div className="App">
      <h1 className='heading'>User Management App</h1>
      <Suspense fallback={<div>Loading...</div>}> {/* fallback when components are loading */}
        <Routes> {/* in order to write muktiple Route */}
          <Route path='/' Component={Dashboard} /> {/* display specific component on that path */}
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup} />
        </Routes>
      </Suspense>
    </div>

  )
}

export default App