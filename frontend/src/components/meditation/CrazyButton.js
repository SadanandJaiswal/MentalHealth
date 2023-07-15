import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CrazyButton = () => {
  return (
    <button className="btn btn-primary btn-lg btn-light">
      <span className="spinner-grow spinner-grow-sm me-2"></span>
      Click Me!
      <span className="spinner-grow spinner-grow-sm ms-2"></span>
    </button>
  );
};

export default CrazyButton;
