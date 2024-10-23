import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './components/Header';
import { useUserAuth } from './context/UserContext';
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <div className="App">
      <Header />
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