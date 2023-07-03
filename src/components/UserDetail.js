import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetail.css';
import { fetchUserDetails } from '../Api';

const DetailView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetchUserDetails(id);
      if (data) setUser(data);
    };
    getUserDetails();
  }, [id]);
 
  return (
    <div className="detail-view-container">
    <form className="detail-form">
      <h1>User Details</h1>
      {user && (
        <>
          <div className="form-row">
            <label>ID:</label>
            <input type="text" value={user.id} readOnly />
          </div>
          <div className="form-row">
            <label>Name:</label>
            <input type="text" value={user.name} readOnly />
          </div>
          <div className="form-row">
            <label>Last Name:</label>
            <input type="text" value={user.lastname} readOnly />
          </div>
          <div className="form-row">
            <label>Email:</label>
            <input type="text" value={user.email} readOnly />
          </div>
        </>
      )}
    </form>
      <div className="button-container">
        
        <Link to="/" className="back-button">Back</Link>
      </div>
    </div>
  );
};

export default DetailView;