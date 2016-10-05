import React from 'react';
import Header from './header/header-container';

const App = ({ children }) => {
  return (
    <div>
      <header className="header group">
        <Header />
      </header>
      <div className="content">
        {children}
      </div>
    </div>
  );
};
export default App;

// {children}
