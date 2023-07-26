"use client"

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './globals.css';
import ColumnChart from './graphiques/pages';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const Dashboard = () => {
  // Exemple de données pour les graphiques (remplacez cela par les données de votre ami)
  const columnChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ventes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Progression',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-black h-screen text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Nom de l'entreprise</h1>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="hover:underline hover:text-gray-300 transition">
                Accueil
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:underline hover:text-gray-300 transition">
                Description
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-300 transition">
                Produits
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Main Content */}
      <main className="p-4">
        {/* Graphique de colonnes */}
        <div className="mb-8">
        <ColumnChart />
        </div>

        {/* Graphique de courbe */}
        <div>
          <h2 className="text-xl font-bold mb-4">Graphique de courbe</h2>
          <Line data={lineChartData} />
        </div>

        {/* Description */}
        <p className="mt-8">Ceci est un exemple de dashboard avec des graphiques.</p>
      </main>
    </div>
  );
};

export default Dashboard;

