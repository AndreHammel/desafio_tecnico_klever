import React from 'react';
import { Header } from './components/Header';
import { MainRoutes } from './routers/MainRoutes';

function App() {
  return (
    <div>
      <Header />
      <div>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
