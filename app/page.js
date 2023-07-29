"use client"

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './globals.css';
import ColumnChart from './components/Column_graphe';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import Header from './components/header';
import LineChart from './components/line_graphe';
import PieChart from './components/pie_graphe';
import { motion } from 'framer-motion';

export default function Dashboard() {

  const dashboardAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dashboardTransition = {
    duration: 1,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={dashboardAnimation}
      transition={dashboardTransition}
    >
    <div className="bg-black h-screen text-white">
      {/* Header */}
      {Header()}
      </div>
      {/* Main Content */}
      <main className="container charts-container">
        <div className="left-column chart-pie">
          <h2>Graphique en camembert</h2>
          <PieChart />
        </div>

        <div className="right-column">
          <div className="upper-right chart-column">
            <h2>Graphique de colonnes</h2>
            <ColumnChart />
          </div>

          <div className="lower-right chart-line">
            <h2>Graphique de courbe</h2>
            <LineChart />
          </div>
        </div>
      </main>
    </motion.div>
  );
};


