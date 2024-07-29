import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice'; // Importation de l'action 'addUser'

// Fonction composant 'Form'
function Form() {
  // État local pour gérer les valeurs du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
  });

  // État local pour gérer les messages d'erreur
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch(); // Utilisation du hook 'useDispatch' pour envoyer des actions à Redux

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Validation de l'âge
    if (formData.age < 18) {
      setErrors({ age: 'L\'âge doit être supérieur à 18 ans.' });
      return;
    } else {
      setErrors({});
    }

    // Envoi des données du formulaire au store Redux
    dispatch(addUser(formData));
    console.log(formData);

    // Réinitialisation des champs du formulaire
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div>
        <label>Nom</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div>
        <label>Âge</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Form;
