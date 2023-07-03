import React, { useState } from 'react';
import { createNewUser } from '../Api';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createNewUser(user);
    navigate('/');
  };

  return (
    <div className="create-user-container">
      <form className="create-user-form" onSubmit={handleSubmit}>
        <label className="create-user-label">
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="create-user-input"
          />
        </label>
        <label className="create-user-label">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            className="create-user-input"
          />
        </label>
        <label className="create-user-label">
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="create-user-input"
          />
        </label>
        <input type="submit" value="Create" className="create-user-submit" />
      </form>
    </div>
  );
};

export default CreateUser;