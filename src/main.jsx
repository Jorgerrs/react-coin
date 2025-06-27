import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes.jsx'; // <-- asegurarte de tener este archivo
import './index.css'; // Puedes mantener esto si ya tienes estilos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes /> {/* Aquí insertamos nuestras rutas */}
  </React.StrictMode>
);