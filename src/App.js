import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Signin from './components/Signin/Signin';
import DeptDashboard from './components/Dept/DeptDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import LectureDashboard from './components/Lecturer/LectureDashboard';
import StudentDashboard from './components/Student/StudentDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Signin} />
        <Route path="/admin" exact component={AdminDashboard} />
        <Route path="/dept" exact component={DeptDashboard} />
        <Route path="/lecturer" exact component={LectureDashboard} />
        <Route path="/student" exact component={StudentDashboard} />
      </div>
    </BrowserRouter>
  );
}