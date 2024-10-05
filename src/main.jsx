import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTable from './UserTable'; // component for listing users
import UserDetail from './UserDetail'; // component for detailed user view
// import UserDetail from "./UserDetail";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
