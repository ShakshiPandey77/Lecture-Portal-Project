import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeptDashboard from './components/Dept/DeptDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import LectureDashboard from './components/Lecturer/LectureDashboard'
function App() {
  return (
    <div className="App">
    <LectureDashboard/>
  </div>
  );
}

export default App;
