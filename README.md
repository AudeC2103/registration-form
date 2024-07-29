# Projet My Registration Form
Ce projet est une application React simple qui permet de recueillir des informations d'inscription d'un utilisateur via un formulaire. Les informations sont ensuite stockées dans le store Redux.

## Sommaire
Installation
Utilisation
Fichiers et composants
Ressources complémentaires

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/AudeC2103/my-registration-form.git
   cd my-registration-form

2. Installez les dépendances :
    npm install
   
## Utilisation

3. Démarrez l'application :
    npm start

## Ressources

Documentation de React
Redux Toolkit
React Redux
Tutoriel React

## Fichiers et composants

### `index.js`
Ce fichier est le point d'entrée de l'application. Il configure et démarre l'application avec le store Redux.

- **ReactDOM.createRoot** : Utilisé pour créer une racine React avec React 18.
- **Provider** : Composant de react-redux qui permet à l'application d'accéder au store Redux.

### `store.js`
Configure le store Redux en intégrant le reducer `user`.

- **configureStore** : Fonction de `@reduxjs/toolkit` utilisée pour configurer le store.

### `App.js`
Composant principal qui affiche le formulaire et la liste des utilisateurs inscrits.

- **useSelector** : Hook de `react-redux` pour accéder à l'état du store Redux.
- **Form** : Composant formulaire inclus dans ce composant.

### `userSlice.jsx`
Crée un slice Redux pour gérer l'état des utilisateurs.

- **createSlice** : Fonction de `@reduxjs/toolkit` pour créer un slice Redux.
- **initialState** : État initial du slice, contenant un tableau `users` vide.
- **addUser** : Action qui permet d'ajouter un utilisateur au tableau `users`.

### `Form.jsx`
Composant formulaire qui gère les entrées utilisateur, la validation et envoie les données au store Redux. Utilise `useState` pour gérer l'état local et `useDispatch` pour envoyer des actions à Redux.

- **useState** : Hook utilisé pour créer des variables d'état. `formData` stocke les valeurs du formulaire et `errors` stocke les messages d'erreur.
- **handleChange** : Fonction qui met à jour `formData` à chaque modification dans les champs du formulaire.
- **handleSubmit** : Fonction exécutée lors de la soumission du formulaire. Elle vérifie que l'âge est supérieur à 18 ans et affiche les données du formulaire dans la console. En cas de succès, elle envoie les données au store Redux et réinitialise les champs du formulaire.

### `App.css`
Ce fichier contient les styles CSS pour l'application, créant une interface moderne et épurée avec des teintes de bleu et de gris.



