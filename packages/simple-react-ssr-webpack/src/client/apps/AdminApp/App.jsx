import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';

const App = () => {
  return (
    <MainPage />
    // <Routes>
    //   <Route path="*" element={() => <h1>Admin App</h1>} />
    // </Routes>
  );
};

export default App;
