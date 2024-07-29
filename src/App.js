import React from 'react';
import './App.css';
import Form from './Form';
import { useSelector } from 'react-redux';

function App() {
  const users = useSelector((state) => state.user.users);

  return (
    <div className="App">
      <h1>Formulaire d'inscription</h1>
      <Form />
      <h2>Liste des utilisateurs inscrits</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName}, {user.age} ans, {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
