import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import AccademicOverview from './Pages/AccademicOverview';
import Messages from './Pages/Messages';
import Support from './Pages/Support';

function App() {
  // Use Redux state to determine if the user is logged in
  // const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      {isLoggedIn && <Layout />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/academic-overview" element={<AccademicOverview />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/support" element={<Support />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
