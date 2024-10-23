import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './components/Header';

// Dynamically importing components using React.lazy to split the bundle and improve performance.
// Each component is loaded only when needed (i.e., when the user navigates to the corresponding route).
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));



function App() {
  return (
    <div className="App">
      <Header />
      {/* Suspense is used to show a fallback UI (e.g., loading indicator) while the lazy-loaded components are being fetched */}
      <Suspense fallback={<div>Loading...</div>}> {/* fallback when components are loading */}
        <Routes> {/* in order to write muktiple Route need to wrap inside Routes wrapper */}
          {/* Route component specifies the path and which component should be rendered */}
          <Route path='/' Component={Login} /> {/* display specific component on that path*/}
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/signup' Component={Signup} />
        </Routes>
      </Suspense>
    </div>

  )
}

export default App