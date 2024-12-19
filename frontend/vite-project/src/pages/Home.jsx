import React from 'react';

const Home = ({ logout }) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
