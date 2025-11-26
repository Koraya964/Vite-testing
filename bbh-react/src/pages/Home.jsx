// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    // Conversion de <main class="..."> en <div> className="..."
    <div className="flex-1 overflow-y-auto p-6 text-center flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-4">BIENVENUE SUR BBH</h1>
      
      <p className="max-w-2xl mb-6">
        BBH est une solution open-source alliant <strong className="font-semibold">gestionnaire de mots de passe</strong>
        et bientôt <strong className="font-semibold"> un connecteur VPN</strong>. Sécurisez vos données et protégez votre navigation,
        le tout dans une seule plateforme.
      </p>
      
      <Link to="/about" // Chemin défini dans App.jsx
        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded shadow-lg transition">
        Découvrir
      </Link>
      
    </div>
  );
}

export default Home;