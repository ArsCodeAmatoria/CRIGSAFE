"use client";
import React from 'react';
import type { 
  ChartData, 
  ChartOptions
} from 'chart.js';
import dynamic from 'next/dynamic';

// Dynamically import Chart.js components with no SSR
const ChartComponent = dynamic(
  () => import('react-chartjs-2').then(mod => {
    // Register Chart.js components on client
    import('chart.js').then(ChartJS => {
      const { 
        Chart,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        Title,
        Tooltip,
        Legend
      } = ChartJS;
      
      Chart.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    });
    return mod.Chart;
  }),
  { ssr: false }
);

export interface MixedChartProps {
  data: ChartData<'bar' | 'line'>;
  title?: string;
  height?: number;
  className?: string;
  options?: ChartOptions<'bar'>;
}

const MixedChart: React.FC<MixedChartProps> = ({ 
  data, 
  title, 
  height = 300,
  className,
  options = {}
}) => {
  // Fix: Force disable bezier curves by setting tension to 0 for line datasets
  // This prevents the 'cp1x' error
  const chartData = {
    ...data,
    datasets: data.datasets.map(dataset => {
      if (dataset.type === 'line') {
        return {
          ...dataset,
          tension: 0, // Set tension to 0 to use straight lines instead of curves
        };
      }
      return dataset;
    })
  };

  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false, // Disable animations completely
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
        tension: 0, // Use straight lines instead of curves
        borderWidth: 2,
      },
      point: {
        radius: 4,
        backgroundColor: 'currentColor',
        borderWidth: 1,
        borderColor: 'white',
      },
      bar: {
        borderWidth: 1,
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
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        },
        min: 0 // Ensure we start from 0
      },
      roi: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#9966ff'
        },
        min: 0 // Ensure we start from 0
      }
    }
  };
  
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ChartComponent type='bar' data={chartData as ChartData<'bar'>} options={mergedOptions} />
    </div>
  );
};

export default MixedChart; 