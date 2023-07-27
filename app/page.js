"use client"

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './globals.css';
import ColumnChart from './components/column_graphe';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import Header from './components/header';
import LineChart from './components/line_graphe';
import PieChart from './components/pie_graphe';

const Dashboard = () => {

  

  return (
    <div className="bg-black h-screen text-white">
      {/* Header */}
      {Header()}
      {/* Main Content */}
      <main className="p-4">
        {/* Graphique de colonnes */}
        <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Graphique en colonnes</h2>
        <ColumnChart />
        </div>

        {/* Graphique de courbe */}
        <div>
          <h2 className="text-xl font-bold mb-4">Graphique en courbe</h2>
          <LineChart />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Graphique en camembert</h2>
          <PieChart />
        </div>
        
        {/* Description */}
        <p className="mt-8">Ceci est un exemple de dashboard avec des graphiques.</p>
      </main>
    </div>
  );
};

export default Dashboard;

