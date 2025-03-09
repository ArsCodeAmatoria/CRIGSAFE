"use client";
import React, { useEffect, useState } from 'react';
import type { 
  ChartData, 
  ChartOptions
} from 'chart.js';
import dynamic from 'next/dynamic';

// Dynamically import Chart.js components with no SSR
const BarComponent = dynamic(
  () => import('react-chartjs-2').then(mod => {
    // Register Chart.js components on client
    import('chart.js').then(ChartJS => {
      const { 
        Chart,
        CategoryScale, 
        LinearScale, 
        BarElement, 
        Title, 
        Tooltip, 
        Legend 
      } = ChartJS;
      
      Chart.register(
        CategoryScale, 
        LinearScale, 
        BarElement, 
        Title, 
        Tooltip, 
        Legend
      );
    });
    return mod.Bar;
  }),
  { ssr: false }
);

export interface BarChartProps {
  data: ChartData<'bar'>;
  title?: string;
  height?: number;
  className?: string;
  options?: ChartOptions<'bar'>;
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title, 
  height = 300,
  className,
  options = {}
}) => {
  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: !!title,
        text: title,
        color: 'white',
        font: {
          size: 16
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
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      }
    }
  };
  
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <BarComponent data={data} options={mergedOptions} />
    </div>
  );
};

export default BarChart; 