import React from 'react';

const NotFound = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center ">
      <div className="card mt-5 w-50 text-center">
        <div className="card-body">
          <h2 className="card-title">404 Not Found</h2>
          <p className="card-text">Oops! The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
