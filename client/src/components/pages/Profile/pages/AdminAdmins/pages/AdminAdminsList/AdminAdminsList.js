
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminAdminsList () {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Effectue une requête GET à l'API pour récupérer la liste des contacts
    axios.get('/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des users :', error);
      });
  }, []);
  return (
    <div>
    <h1>Liste des admins</h1>
    <ol>
      {users.map((user) => (
        <li key={user.id}>
          Nom: {user.name} {user.lname},  
        </li>
      ))}
    </ol>
  </div>
  )
}

export default AdminAdminsList
