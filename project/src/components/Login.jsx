

import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onLogin(email, password);

      // Reset form fields
      setEmail('');
      setPassword('');

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed.');
    }
  };

  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-start vh-100">
      <div className="card mt-5 w-50">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
