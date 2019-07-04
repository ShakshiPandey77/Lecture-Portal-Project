import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeptDashboard from './components/Dept/DeptDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import LectureDashboard from './components/Lecturer/LectureDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
function App() {
  return (
    <div className="App">
    <DeptDashboard/>
  </div>
  );
}

export default App;
