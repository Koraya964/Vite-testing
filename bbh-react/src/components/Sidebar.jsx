// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// NOTE: Les chemins SVG ont été simplifiés (remplacés par '...') pour la lisibilité.
// Vous devrez réintégrer les chemins SVG complets dans votre projet.

function NavIcon({ children }) { return <span className="flex-shrink-0">{children}</span>; }

function Sidebar({ isOpen, onClose }) {
  const sidebarClasses = isOpen
    ? 'fixed top-0 right-0 w-[75%] sm:w-60 md:w-80 lg:w-96 h-full bg-gray-800 text-gray-100 shadow-xl flex flex-col p-5 z-50 transition-all duration-300 overflow-y-auto'
    : 'fixed top-0 right-[-100%] w-[75%] sm:w-60 md:w-80 lg:w-96 h-full bg-gray-800 text-gray-100 shadow-xl flex flex-col p-5 z-50 transition-all duration-300 overflow-y-auto';

  const overlayClasses = isOpen
    ? 'fixed inset-0 bg-slate-500 bg-opacity-50 opacity-100 visible transition-opacity duration-300 z-40'
    : 'fixed inset-0 bg-slate-500 bg-opacity-50 opacity-0 invisible transition-opacity duration-300 z-40 pointer-events-none';
    
  return (
    <>
      {/* Sidebar Overlay */}
      <div onClick={onClose} className={overlayClasses} aria-hidden={!isOpen}></div>

      {/* Sidebar */}
      <nav className={sidebarClasses} aria-label="Sidebar de navigation">
        
        <button onClick={onClose} className="self-end text-white text-3xl mb-4 hover:text-sky-400 focus:outline-none cursor-pointer" aria-label="Fermer la sidebar">
          ×
        </button>

        <Link to="/" onClick={onClose} className="flex justify-center mb-6">
          <img src="/images/BBH-removebg-preview.png" alt="BBH Logo" className="max-w-[60%] sm:max-w-[50%] md:max-w-[40%]" />
        </Link>

        {/* Formulaire de Connexion (le `for` devient `htmlFor` en JSX) */}
        <div className="sidebar-login border-t border-gray-700 pt-4 mt-4">
          <h3 className="font-bold text-white text-lg mb-2 text-center">Connexion</h3>
          {/* Note: Dans un vrai projet React, ce formulaire serait géré par useState et ferait un fetch ou utiliserait un hook d'authentification */}
          <form action="/login" method="POST" className="flex flex-col gap-3">
            <label className="text-gray-200 text-sm" htmlFor="username">Identifiant</label>
            <input type="text" id="username" name="username" required pattern="[A-Za-z0-9]+" minLength="3"
              maxLength="20" autoComplete="off"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Votre identifiant" aria-label="Champ de saisi pour l'identifiant" />

            <label className="text-gray-200 text-sm" htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Votre mot de passe" aria-label="Champ du mot de passe" />

            <button type="submit"
              className="w-full mt-3 p-2 bg-blue-600 text-black font-semibold rounded hover:bg-cyan-500 transition cursor-pointer"
              aria-label="Bouton de connexion">
              Se connecter
            </button>
          </form>
          <p className="mt-3 text-center">
            <Link to="/register" onClick={onClose} className="font-bold text-white hover:underline">Créer un compte</Link>
          </p>
        </div>
        <hr className="mt-4 " />

        {/* Liens de navigation (les SVG doivent être importés ou réintégrés) */}
        <ul className="mt-6 mb-9 flex-col gap-4 text-center sm:text-left flex">
          <li className="sm:hidden"><Link to="/" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>🏠</NavIcon> Accueil</Link></li>
          <li className="sm:hidden"><Link to="/about" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>ℹ️</NavIcon> À propos</Link></li>
          <li className="sm:hidden"><Link to="/download" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>⬇️</NavIcon> Téléchargement</Link></li>
          <li className="sm:hidden"><Link to="/contact" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>✉️</NavIcon> Contact</Link></li>
          <li className="sm:hidden"><Link to="/certification" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>🏅</NavIcon> Certification</Link></li>
          <li><Link to="/settings" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>⚙️</NavIcon> Paramètres</Link></li>
          <li><Link to="/espace" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>👤</NavIcon> Mon espace</Link></li>
          <li><Link to="/logout" onClick={onClose} className="flex items-center gap-2 text-gray-100 hover:text-sky-400 transition-colors"><NavIcon>🚪</NavIcon> Déconnexion</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;