import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>    
    <h1>Which Element Are You?</h1>
    <h2>Quiz by Bahasuru Nayanakantha</h2>
    <h3>(based on completely random things)</h3>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
    </nav>
  </header>
);

export default Header;
