// src/pages/Monitoring.jsx

import React, { useRef, useEffect, useState } from 'react';
// Vous devrez installer Chart.js: npm install chart.js
import Chart from 'chart.js/auto'; 
// Vous devrez installer Lucide React: npm install lucide-react
import { Zap, Wifi, Clock, Cloud } from 'lucide-react'; 

function Monitoring() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [networkStatus, setNetworkStatus] = useState(navigator.onLine ? 'Connecté' : 'Hors ligne');
  const [ipAddress, setIpAddress] = useState('Inconnue');
  const [latencyHistory, setLatencyHistory] = useState([]);
  const [isTesting, setIsTesting] = useState(false);

  // 1. Initialisation de l'état du réseau
  useEffect(() => {
    const handleOnline = () => setNetworkStatus('Connecté');
    const handleOffline = () => setNetworkStatus('Hors ligne');
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 2. Initialisation de l'adresse IP
  useEffect(() => {
    async function fetchIp() {
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const { ip } = await res.json();
        // Masquer les derniers octets pour la confidentialité
        setIpAddress("IP : " + ip.replace(/^(\d+\.\d+)\.\d+\.\d+$/, "$1.x.x"));
      } catch {
        setIpAddress("IP : Inconnue");
      }
    }
    fetchIp();
  }, []);

  // 3. Gestion et mise à jour de Chart.js
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.data.labels = latencyHistory.map((_, i) => `Test ${i + 1}`);
      chartInstance.current.data.datasets[0].data = latencyHistory;
      chartInstance.current.update();
      return;
    }

    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: latencyHistory.map((_, i) => `Test ${i + 1}`),
          datasets: [{
            label: 'Latence (ms)',
            data: latencyHistory,
            borderColor: '#06B6D4',
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            tension: 0.3,
            pointRadius: 4,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, grid: { color: '#4B5563' }, ticks: { color: '#E5E7EB' } },
            x: { grid: { color: '#4B5563' }, ticks: { color: '#E5E7EB' } }
          },
          plugins: { legend: { labels: { color: '#E5E7EB' } } }
        },
      });
    }

    // Fonction de nettoyage (détruit l'instance du graphique au démontage du composant)
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [latencyHistory]);

  // 4. Fonction de test de latence (Ping)
  const runLatencyTest = async () => {
    if (isTesting) return;
    setIsTesting(true);

    const start = performance.now();
    try {
      // Tenter de charger un petit fichier (Google favicon) pour mesurer le RTT
      await fetch('https://www.google.com/favicon.ico?v=' + Date.now(), { cache: 'no-store' });
      const end = performance.now();
      const latency = Math.round(end - start);
      setLatencyHistory(prev => [...prev, latency]);
    } catch (error) {
      setLatencyHistory(prev => [...prev, 0]); // 0 ou une valeur d'erreur pour l'échec
    } finally {
      setIsTesting(false);
    }
  };

  const clearHistory = () => {
    setLatencyHistory([]);
  };

  const networkDotClass = networkStatus === 'Connecté' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-950">
      <h1 className="text-3xl font-bold mb-6 text-cyan-300">Monitoring Professionnel</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Statut Réseau */}
        <div className="bg-slate-800 p-4 rounded-lg shadow-xl flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <Wifi className="text-sky-400 w-6 h-6" />
            <span className="font-semibold text-slate-200">Réseau</span>
          </div>
          <div className="flex items-center gap-2">
            <span id="networkDot" className={`w-3 h-3 rounded-full ${networkDotClass}`}></span>
            <span id="networkStatus" className="text-sm font-medium">{networkStatus}</span>
          </div>
        </div>

        {/* Adresse IP */}
        <div className="bg-slate-800 p-4 rounded-lg shadow-xl flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <Cloud className="text-sky-400 w-6 h-6" />
            <span className="font-semibold text-slate-200">IP</span>
          </div>
          <span id="ipValue" className="text-sm font-medium">{ipAddress}</span>
        </div>

        {/* Dernier Ping */}
        <div className="bg-slate-800 p-4 rounded-lg shadow-xl flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <Clock className="text-sky-400 w-6 h-6" />
            <span className="font-semibold text-slate-200">Dernier Ping</span>
          </div>
          <span className="text-sm font-medium">
            {latencyHistory.length > 0 ? `${latencyHistory[latencyHistory.length - 1]} ms` : 'N/A'}
          </span>
        </div>

        {/* Nombre de tests */}
        <div className="bg-slate-800 p-4 rounded-lg shadow-xl flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <Zap className="text-sky-400 w-6 h-6" />
            <span className="font-semibold text-slate-200">Tests</span>
          </div>
          <span className="text-sm font-medium">{latencyHistory.length}</span>
        </div>

      </div>

      {/* Boutons de contrôle */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={runLatencyTest}
          disabled={isTesting}
          className={`flex-1 py-3 px-4 rounded font-semibold transition ${isTesting ? 'bg-slate-600 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-700'}`}
        >
          {isTesting ? 'Test en cours...' : 'Lancer un test'}
        </button>
        <button 
          onClick={clearHistory}
          disabled={latencyHistory.length === 0}
          className={`py-3 px-4 rounded font-semibold transition ${latencyHistory.length === 0 ? 'bg-slate-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
        >
          Effacer l'historique
        </button>
      </div>

      {/* Graphique Chart.js */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl h-96">
        <h2 className="text-xl font-semibold mb-4 text-slate-100">Historique de Latence</h2>
        <canvas ref={chartRef}></canvas>
        {latencyHistory.length === 0 && (
            <div className='text-center text-slate-400 mt-12'>Lancez un premier test pour voir le graphique.</div>
        )}
      </div>

    </div>
  );
}

export default Monitoring;