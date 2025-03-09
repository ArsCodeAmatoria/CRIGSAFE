"use client";
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export interface PieChartProps {
  data: any;
  title?: string;
  height?: number;
  className?: string;
  options?: any;
}

const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  title, 
  height = 300,
  className,
  options = {}
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'white',
          font: {
            size: 12
          },
          padding: 20
        }
      },
      title: {
        display: !!title,
        text: title,
        color: 'white',
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        backgroundColor: '#111',
        borderColor: '#333',
        borderWidth: 1,
        titleColor: 'white',
        bodyColor: 'white',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 13
        },
        padding: 10,
        displayColors: true
      }
    },
  };
  
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <Pie data={data} options={mergedOptions} />
    </div>
  );
};

export default PieChart; 