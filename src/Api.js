const API_URL = 'http://localhost:8080/api';


/* This class is where i have my Api calls and its out in the src file so it can be reached everywhere. 
and the reason i do all my fetches here is because so i dont have to rewrite it and make my site slower */

/* Fetch that gets all the users */ 
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

/* Fetch that deletes a user via their id */ 
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return response.ok; 
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
};

/* Fetch that gets users from the specifik id*/ 
export const fetchUserDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
};
/* Fetch that creates a new user */ 
export async function createNewUser(user) {
  const response = await fetch(`${API_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
/* Fetch that ipdates a users information.*/ 
export async function updateUser(id, user) {

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
