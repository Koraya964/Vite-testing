// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="bg-slate-800/90 backdrop-blur flex flex-col sm:flex-row items-center justify-between px-4 py-4 text-sm w-full z-30">
      <p>© 2025 BBH - Tous droits réservés</p>
      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        
        {/* Liens internes */}
        <Link to="/legal" className="hover:text-sky-400" aria-label="Mentions légales">Mentions légales</Link>
        <Link to="/privacy" className="hover:text-sky-400" aria-label="Confidentialité">Confidentialité</Link>
        
        {/* Liens externes (conserver <a> et ajouter rel="noopener noreferrer") */}
        <a href="https://github.com/Koraya964/" target="_blank" rel="noopener noreferrer">
          <img src="/images/git hub 32x32.png" className="h-5" alt="github.com" aria-label="GitHub de l'auteur" />
        </a>
        <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin 32x32.png" className="h-5" alt="linkedin.com" aria-label="linkedin de l'auteur" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/X-32x32v1.png" className="h-5" alt="X.com" />
        </a>
        <a href="https://koraya.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo_koraya_mini.png" className="h-5" alt="KorayaWebsite" aria-label="Site photo de l'auteur" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;