import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';         // Import Home page

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />            {/* Home route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
