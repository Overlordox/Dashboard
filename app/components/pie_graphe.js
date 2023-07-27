// components/PieChart.js

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const PieChart = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        data: [20, 15, 25, 10, 30],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#4bc0c0'],
      },
    ],
  };

  // Ajoutez une variable pour définir les propriétés de l'effet d'animation
  const chartAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    // Ajoutez le composant motion.div autour du graphique avec les propriétés animate et variants
    <motion.div
      initial="hidden"
      animate="visible"
      variants={chartAnimation}
    >
      <Pie data={data} />
    </motion.div>
  );
};

export default PieChart;
