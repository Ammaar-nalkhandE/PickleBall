import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as needed
import HomePage from './pages/homepage';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
      {/* Other components go here */}
    </div>
  );
};

export default App;
