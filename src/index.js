import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importation des styles globaux
import App from './App'; // Importation du composant principal de l'application
import { Provider } from 'react-redux'; // Importation du Provider pour intégrer Redux
import { store } from './store'; // Importation du store Redux

// Sélectionne l'élément HTML avec l'ID 'root'
const container = document.getElementById('root');
// Crée une racine React en utilisant 'createRoot' pour React 18
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// Le rendu inclut le Provider de Redux pour que l'application ait accès au store
