// components/ColumnChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

export default function ColumnChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ventes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Augmentez la durée de l'animation (par exemple, 1 seconde)
  const chartAnimation = {
    hidden: { opacity: 4 },
    visible: { opacity: 4 },
  };

  // Augmentez la durée de la transition (par exemple, 1 seconde)
  const chartTransition = {
    duration: 4,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={chartAnimation}
      transition={chartTransition}
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
};

