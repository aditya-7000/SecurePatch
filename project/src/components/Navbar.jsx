

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RoleContext } from '../App';

const Navbar = ({ onLogout }) => {
  const role = useContext(RoleContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
      <Link className="navbar-brand" to={`/${role}`}>SecurePatch</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        {role === 'admin' && (
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
          </li>
        )}
        {role === 'admin' && (
          <li className="nav-item">
            <Link className="nav-link" to="/admin/patch-request">Patch Request</Link>
          </li>
        )}
        {role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/known-bugs">Known Bugs</Link>
              </li>
            )}
            {role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/bug-report">Report a Bug</Link>
              </li>
            )}
            {role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/deploy">Deploy</Link>
              </li>
            )}
            {role === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/register">Register</Link>
              </li>
            )}
            {role === 'qc' && (
              <li className="nav-item">
              <Link className="nav-link" to="/qc/dashboard">Dashboard</Link>
            </li>
            )}
            {role === 'qc' && (
              <li className="nav-item">
                <Link className="nav-link" to="/qc/known-bugs">Known Bugs</Link>
              </li>
            )}
            
            {role === 'labeller' && (
              <li className="nav-item">
                <Link className="nav-link" to="/labeller/known-bugs">Known Bugs</Link>
              </li>
            )}
            {role === 'labeller' && (
              <li className="nav-item">
                <Link className="nav-link" to="/labeller/bug-report">Report a Bug</Link>
              </li>
            )}
            {role === 'developer' && (
              <li className="nav-item">
                <Link className="nav-link" to="/developer/patch-requests">Patch Requests</Link>
              </li>
            )}
            {role === 'developer' && (
              <li className="nav-item">
                <Link className="nav-link" to="/developer/known-bugs">Known Bugs</Link>
              </li>
            )}
            {role === 'developer' && (
              <li className="nav-item">
                <Link className="nav-link" to="/developer/uploads">My Uploads</Link>
              </li>
            )}
            {role === 'user' && (
              <li className="nav-item">
                <Link className="nav-link" to="/download">Download</Link>
              </li>
            )}
            {(role === 'user'||role==='') && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
        </ul>
        <ul className='navbar-nav'>
        {(role ==='admin'||role ==='developer'||role ==='qc'||role ==='labeller') && (
          <li className="nav-item">
            <button className="nav-link" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React,{useContext} from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../App';

// const Navbar = () => {
//   const [type,setType]=useContext(Context);
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">{type}</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
            
//             {type === 'admin' && (
//               <li className="nav-item">
//               <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
//             </li>
//             )}
//             {type === 'admin' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/patch-request">Patch Request</Link>
//               </li>
//             )}
//             {type === 'admin' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/known-bugs">Known Bugs</Link>
//               </li>
//             )}
//             {type === 'admin' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/deploy">Deploy</Link>
//               </li>
//             )}
//             {type === 'admin' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin/register">Register</Link>
//               </li>
//             )}
//             {type === 'qc' && (
//               <li className="nav-item">
//               <Link className="nav-link" to="/qc/dashboard">Dashboard</Link>
//             </li>
//             )}
//             {type === 'qc' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/qc/known-bugs">Known Bugs</Link>
//               </li>
//             )}
            
//             {type === 'labeller' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/labeller/known-bugs">Known Bugs</Link>
//               </li>
//             )}
//             {type === 'labeller' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/labeller/bug-report">Report a Bug</Link>
//               </li>
//             )}
//             {type === 'developer' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/developer/patch-requests">Patch Requests</Link>
//               </li>
//             )}
//             {type === 'developer' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/developer/known-bugs">Known Bugs</Link>
//               </li>
//             )}
//             {type === 'developer' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/developer/notifications">Notifications</Link>
//               </li>
//             )}
//             {type === 'user' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/download">Download</Link>
//               </li>
//             )}
//             {type === 'user' && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//               </li>
//             )}
//           </ul>
//           <ul className="navbar-nav">
            
//             {type !== 'user' && (
//               <li className="nav-item">
//               <button className="btn btn-link nav-link" onClick={setType('user')}>Logout</button>
//             </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </>
//   );
// };

// export default Navbar;

