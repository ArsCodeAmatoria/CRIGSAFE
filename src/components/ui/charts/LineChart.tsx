"use client";
import React from 'react';
import type { 
  ChartData, 
  ChartOptions
} from 'chart.js';
import dynamic from 'next/dynamic';

// Dynamically import Chart.js components with no SSR
const LineComponent = dynamic(
  () => import('react-chartjs-2').then(mod => {
    // Register Chart.js components on client
    import('chart.js').then(ChartJS => {
      const { 
        Chart,
        CategoryScale, 
        LinearScale, 
        PointElement, 
        LineElement, 
        Title, 
        Tooltip, 
        Legend,
        Filler 
      } = ChartJS;
      
      Chart.register(
        CategoryScale, 
        LinearScale, 
        PointElement, 
        LineElement, 
        Title, 
        Tooltip, 
        Legend,
        Filler
      );
    });
    return mod.Line;
  }),
  { ssr: false }
);

export interface LineChartProps {
  data: ChartData<'line'>;
  title?: string;
  height?: number;
  className?: string;
  options?: ChartOptions<'line'>;
}

const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  title, 
  height = 300,
  className,
  options = {}
}) => {
  const defaultOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
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
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: 'currentColor',
        borderWidth: 1,
        borderColor: 'white',
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
        },
        min: 0,
        suggestedMax: 100
      }
    }
  };
  
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <LineComponent data={data} options={mergedOptions} />
    </div>
  );
};

export default LineChart; 