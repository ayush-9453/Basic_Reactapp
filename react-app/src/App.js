import React, { useState } from 'react';
import './App.css'; // You can style your components using CSS

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  };

  return (
    <div className="app">
      <h1>Search Example</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <p>Search Term: {searchTerm}</p>
    </div>
  );
};

export default App;
