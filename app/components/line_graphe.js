// components/LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

export default function LineChart(){
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

  const lineChartOptions = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
    // Définir la propriété drawTime pour contrôler l'animation de la courbe
    animation: {
      duration: 2000, // Durée totale de l'animation (2 secondes)
      drawTime: 2000, // Durée pour que la courbe apparaisse entièrement (2 secondes)
    },
  };

  const chartAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const chartTransition = {
    duration: 3,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={chartAnimation}
      transition={chartTransition}
    >
      <Line data={lineChartData} options={lineChartOptions} />
    </motion.div>
  );
};

