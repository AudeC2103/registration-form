import { createSlice } from '@reduxjs/toolkit';

// État initial du slice 'user'
const initialState = {
  users: [],
};

// Création du slice 'user' avec une action 'addUser'
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // Ajoute un nouvel utilisateur au tableau 'users'
    },
  },
});

// Exportation de l'action 'addUser' pour pouvoir l'utiliser dans le composant Form
export const { addUser } = userSlice.actions;

// Exportation du reducer du slice 'user' pour l'intégrer dans le store
export default userSlice.reducer;
