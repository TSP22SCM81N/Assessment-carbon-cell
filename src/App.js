import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './component/Task1/Sidebar.jsx';
import Dashboard from './component/Task1/Dashboard.jsx';
import Home from './component/Task1/Home.jsx';
import Organization from './component/Task1/Organization.jsx';
import Assets from './component/Task1/Assets.jsx';
import Trade from './component/Task1/Trade.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;