


import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
        role,
      });
      console.log(response.data); // Registration successful response

      // Reset form fields
      setEmail('');
      setPassword('');
      setRole('');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
      <h2 className="mt-4">Register</h2>
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
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role:
          </label>
          <select className="form-select" id="role" value={role} onChange={handleRoleChange}>
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="developer">Developer</option>
            <option value="qc">QC</option>
            <option value="labeller">Labeller</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Signup;
