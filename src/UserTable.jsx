import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetching users from API on component mount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  // Function to handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
          setUsers(users.filter(user => user.id !== id));
          alert("User deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          setError("Failed to delete user.");
        });
    }
  };

  // Handling edit functionality can be implemented here
  const handleEdit = (user) => {
    // Logic to open a modal or form with pre-filled user data
    console.log("Edit user:", user);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>User Management</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Phone</th>
            <th style={tableHeaderStyle}>Username</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={tableDataStyle}>{user.name}</td>
              <td style={tableDataStyle}>{user.email}</td>
              <td style={tableDataStyle}>{user.phone}</td>
              <td style={tableDataStyle}>{user.username}</td>
              <td style={tableDataStyle}>
                <Link to={`/user/${user.id}`} style={buttonStyle}>View</Link>
                <button onClick={() => handleEdit(user)} style={buttonStyle}>Edit</button>
                <button onClick={() => handleDelete(user.id)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Simple styling for the table headers and rows
const tableHeaderStyle = {
  padding: '10px',
  textAlign: 'left',
  backgroundColor: '#333',
  color: '#fff'
};

const tableDataStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd'
};

// Button styling
const buttonStyle = {
  marginRight: '10px',
  padding: '5px 10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '3px'
};

// Delete button styling
const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'red'
};

export default UserTable;
