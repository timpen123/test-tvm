import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserGrid.css';
import { fetchUsers, deleteUser } from '../Api';  /* The Api import so i can reach my backend*/

const UserGrid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      if (data) {
        const sortedUsers = data.sort((a, b) => a.id - b.id);
        setUsers(sortedUsers);
      }
    };
    getUsers();
  }, []);

  
  const handleDeleteUser = async (id) => {
    const deleteSuccessful = await deleteUser(id);
    if (deleteSuccessful) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="user-grid-container">
      <table className="user-grid-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="user-grid-row">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td className="actions">
                <Link className="action-button edit" to={`/edituser/${user.id}`}>
                  Edit
                </Link>
                <button className="action-button delete" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
                <Link className="action-button view" to={`/detailview/${user.id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="new-user" to={{ pathname: '/detailview/new', state: { mode: 'New' } }}>
        New User
      </Link>
    </div>
  );
};

export default UserGrid; 