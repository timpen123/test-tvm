import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserDetails, updateUser } from '../Api';
import './EditUser.css';

const EditUser = () => {
  /* Using params so i can work with id when i press for example edit en the prev class. So the edit is on the right user and it extracs the id from the url*/
  const { id } = useParams();
  const navigate = useNavigate();   /* Navigate is a hook from React-router that allows me to my application to navigate around */ 
  const [user, setUser] = useState(null);


  /* Getting the specefik user by using the params above */ 
  useEffect(() => {
    const getUserDetails = async () => {
      const userDetails = await fetchUserDetails(id);
      setUser(userDetails);
    };
    getUserDetails();
  }, [id]);


   /* Whenever an input field is changed, it updates for this intance the'user' object */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
   
  /* This is the function from the submit button and it checks so the user is updated and it its complete it navigate backs to the Start screen */
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(id, user);
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="edit-user-container">
      <form className="edit-user-form" onSubmit={handleSubmit}>
        <label className="edit-user-label">
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="edit-user-input"
          />
        </label>
        <label className="edit-user-label">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            className="edit-user-input"
          />
        </label>
        <label className="edit-user-label">
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="edit-user-input"
          />
        </label>
        <input type="submit" value="Update" className="edit-user-submit" />
      </form>
    </div>
  );
};

export default EditUser;