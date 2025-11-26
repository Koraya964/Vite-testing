// src/pages/Contact.jsx

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    // Logique d'envoi de formulaire (ex: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) }))
    
    // Simulation de l'envoi
    setTimeout(() => {
      setStatus('Message envoyé ! Nous vous répondrons rapidement.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Réinitialiser le formulaire
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center bg-gray-900">
      <section className="bg-slate-800/80 p-8 rounded-lg shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-sky-400">Nous Contacter</h1>
        <p className="text-slate-300 mb-8 text-center">
          Pour toute question, suggestion ou support technique.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Nom et Prénom */}
          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="name">Nom et Prénom :</label>
            <input 
              type="text" id="name" name="name" required
              className="mt-1 block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              value={formData.name} onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="email">Email :</label>
            <input 
              type="email" id="email" name="email" required
              className="mt-1 block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              value={formData.email} onChange={handleChange}
            />
          </div>

          {/* Sujet */}
          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="subject">Sujet :</label>
            <input 
              type="text" id="subject" name="subject" required
              className="mt-1 block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              value={formData.subject} onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="message">Message :</label>
            <textarea 
              id="message" name="message" rows="4" required
              className="mt-1 block w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              value={formData.message} onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition duration-150 cursor-pointer"
          >
            Envoyer
          </button>

          <p id="status-message" className="mt-4 text-green-400 text-center font-semibold">{status}</p>
        </form>
      </section>
    </div>
  );
}

export default Contact;