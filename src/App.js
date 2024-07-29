import React from 'react';
import './App.css';
import Form from './Form'; // Importation du composant Form
import { useSelector } from 'react-redux'; // Importation du hook 'useSelector' pour accéder à l'état Redux

function App() {
  // Sélection des utilisateurs dans l'état Redux
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
