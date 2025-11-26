// src/App.jsx

import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// Importations des composants de structure
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Background from "./components/Background";

// Importation des pages (à créer/migrer)
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Monitoring from "./pages/Monitoring";
import MonEspace from "./pages/MonEspace";

// Design

import ./

// Composant Layout : gère la structure fixe (Header, Footer, Fond)
const Layout = ({ sidebarOpen, openSidebar, closeSidebar }) => (
  // Ceci remplace la balise <body> et englobe toute l'application
  <div className="h-screen flex flex-col text-white relative">
    
    <Background /> 
    
    <Header onOpenSidebar={openSidebar} />
    
    {/* L'élément <Outlet /> de React Router affiche le contenu de la Route active (ex: <Home />) */}
    <Outlet /> 

    <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    
    <Footer />
  </div>
);


function App() {
  // État pour gérer l'ouverture/fermeture de la sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  
  return (
    <Routes>
      {/* Route parent pour la mise en page (Layout) */}
      <Route 
        element={<Layout sidebarOpen={isSidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} />}
      >
        {/* Routes enfants (Pages) */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/espace" element={<MonEspace />} />

        {/* Routes pour les pages non migrées (Placeholders) */}
        <Route path="/about" element={<div className="flex-1 p-6 text-center">Page À Propos (Bientôt)</div>} />
        <Route path="/download" element={<div className="flex-1 p-6 text-center">Page Téléchargement (Bientôt)</div>} />
        <Route path="/certification" element={<div className="flex-1 p-6 text-center">Page Certification (Bientôt)</div>} />
        <Route path="/settings" element={<div className="flex-1 p-6 text-center">Page Paramètres (Bientôt)</div>} />
        <Route path="/legal" element={<div className="flex-1 p-6 text-center">Page Mentions Légales (Bientôt)</div>} />
        <Route path="/privacy" element={<div className="flex-1 p-6 text-center">Page Confidentialité (Bientôt)</div>} />
        <Route path="*" element={<div className="flex-1 p-6 text-center">Page non trouvée (404)</div>} />
      </Route>
    </Routes>
  );
}

export default App;