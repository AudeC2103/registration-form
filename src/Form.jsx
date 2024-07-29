import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.age < 18) {
      setErrors({ age: 'Votre âge doit être supérieur à 18 ans' });
      return;
    } else {
      setErrors({});
    }

    dispatch(addUser(formData));
    console.log(formData);
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