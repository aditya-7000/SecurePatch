

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import RequestPatch from './components/RequestPatch';
// import Deploy from './components/Deploy';
// import KnownBugs from './components/KnownBugs';
// import DevPatchRequests from './components/DevPatchRequests';
// import Download from './components/Download';
// import DevMyUploads from './components/DevMyUploads';
// import BugReport from './components/BugReport';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Home from './components/Home';


// export const RoleContext = React.createContext();

// const App = () => {
//   const [role, setRole] = useState('user');

//   useEffect(() => {
//     const storedRole = sessionStorage.getItem('role');
//     if (storedRole) {
//       setRole(storedRole);
//     }
//   }, []);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       const { token, role } = response.data;

//       sessionStorage.setItem('role', role);
//       setRole(role);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const  handleLogout = () => {
//     sessionStorage.removeItem('role');
//      setRole('user');
//   };

//   return (
//     <div>
//       <RoleContext.Provider value={role}>
//         <Navbar onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Navigate to={`/${role}`} replace={true} />} />

//           <Route path="/admin/*" element={ role === 'admin' ? <Home usertype="admin"/> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/admin/dashboard" element={console.log(role)||role === 'admin' ? <Dashboard /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/admin/patch-request" element={role === 'admin' ? <RequestPatch /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/admin/known-bugs" element={role === 'admin' ? <KnownBugs /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/admin/deploy" element={role === 'admin' ? <Deploy /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/admin/bug-report" element={role === 'admin' ? <BugReport /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/admin/register" element={role === 'admin' ? <Signup /> : <Navigate to={`/${role}`} replace={true} />} />

//           <Route path="/user/*" element={role === 'user' ? <Home usertype="user"/> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/download" element={<Download />} />

//           <Route path="/developer/*" element={role === 'developer' ? <Home usertype="developer"/> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/developer/patch-requests" element={role === 'developer' ? <DevPatchRequests /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/developer/known-bugs" element={role === 'developer' ? <KnownBugs /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/developer/uploads" element={role === 'developer' ? <DevMyUploads /> : <Navigate to={`/${role}`} replace={true} />} />

//           <Route path="/qc/*" element={role === 'qc' ? <Home usertype="QC"/> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/qc/dashboard" element={role === 'qc' ? <Dashboard /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/qc/known-bugs" element={role === 'qc' ? <KnownBugs /> : <Navigate to={`/${role}`} replace={true} />} />

//           <Route path="/labeller/*" element={role === 'labeller' ? <Home usertype="Labeller"/> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/labeller/known-bugs" element={role === 'labeller' ? <KnownBugs /> : <Navigate to={`/${role}`} replace={true} />} />
//           <Route path="/labeller/bug-report" element={role === 'labeller' ? <BugReport /> : <Navigate to={`/${role}`} replace={true} />} />

//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           {/* <Route path="/register" element={<Signup />} /> */}
//         </Routes>
//       </RoleContext.Provider>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RequestPatch from './components/RequestPatch';
import Deploy from './components/Deploy';
import KnownBugs from './components/KnownBugs';
import DevPatchRequests from './components/DevPatchRequests';
import Download from './components/Download';
import DevMyUploads from './components/DevMyUploads';
import BugReport from './components/BugReport';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

export const RoleContext = React.createContext();

const App = () => {
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = sessionStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      const { token, role } = response.data;

      sessionStorage.setItem('role', role);
      setRole(role);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('role');
    setRole('user');
    navigate('/');
  };

  return (
    <div>
      <RoleContext.Provider value={role}>
        <Navbar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home usertype={role} />} />

          {/* Admin Routes */}
          {role === 'admin' && (
            <>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/patch-request" element={<RequestPatch />} />
              <Route path="/admin/known-bugs" element={<KnownBugs />} />
              <Route path="/admin/deploy" element={<Deploy />} />
              <Route path="/admin/bug-report" element={<BugReport />} />
              <Route path="/admin/register" element={<Signup />} />
            </>
          )}

          {/* User Routes */}
          {role === 'user' && (
            <>
              <Route path="/download" element={<Download />} />
            </>
          )}

          {/* Developer Routes */}
          {role === 'developer' && (
            <>
              <Route path="/developer/patch-requests" element={<DevPatchRequests />} />
              <Route path="/developer/known-bugs" element={<KnownBugs />} />
              <Route path="/developer/uploads" element={<DevMyUploads />} />
            </>
          )}

          {/* QC Routes */}
          {role === 'qc' && (
            <>
              <Route path="/qc/dashboard" element={<Dashboard />} />
              <Route path="/qc/known-bugs" element={<KnownBugs />} />
            </>
          )}

          {/* Labeller Routes */}
          {role === 'labeller' && (
            <>
              <Route path="/labeller/known-bugs" element={<KnownBugs />} />
              <Route path="/labeller/bug-report" element={<BugReport />} />
            </>
          )}

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </RoleContext.Provider>
    </div>
  );
};

export default App;
