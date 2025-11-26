// src/components/Background.jsx

import React from 'react';

function Background() {
  return (
    <>
      {/* Vidéo en fond (Assurez-vous que les chemins sont corrects, par exemple '/video/...') */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata" 
        poster="/images/background.jpg"
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        alt="bhhbg"
      >
        <source src="/video/background-1080p.webm" type="video/webm" />
        <source src="/video/background-1080p.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo en arrière-plan.
      </video>
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
    </>
  );
}

export default Background;