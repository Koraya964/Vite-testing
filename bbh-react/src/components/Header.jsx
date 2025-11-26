// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

function Header({ onOpenSidebar }) {
  return (
    <header className="h-16 bg-gray-800/80 backdrop-blur flex items-center justify-between px-4 shadow-md z-20">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/images/BBH-removebg-preview.png"
          alt="BBH Logo"
          className="h-10"
        />
      </Link>

      {/* Navigation desktop */}
      <nav
        className="hidden md:flex gap-6"
        aria-label="Menu navigation header font-sans"
      >
        <Link to="/about" className="hover:text-sky-400 font-bold font-sans">
          À propos
        </Link>
        <Link to="/download" className="hover:text-sky-400 font-bold font-sans">
          Téléchargement
        </Link>
        <Link to="/contact" className="hover:text-sky-400 font-bold font-sans">
          Contact
        </Link>
        <Link
          to="/certification"
          className="hover:text-sky-400 font-bold font-sans"
        >
          Certification
        </Link>
        <Link
          to="/monitoring"
          className="hover:text-sky-400 font-bold font-sans"
        >
          Monitoring
        </Link>
      </nav>

      {/* Bouton pour ouvrir la Sidebar (Login) */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSidebar} // Appel de la fonction du parent
          className="flex items-center gap-2 bg-sky-800 hover:bg-sky-600 px-3 py-1 rounded text-sm font-semibold cursor-pointer"
        >
          <img
            src="/images/log-in.png"
            alt="Icône de connexion"
            className="h-5"
          />
          <span>SE CONNECTER</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
