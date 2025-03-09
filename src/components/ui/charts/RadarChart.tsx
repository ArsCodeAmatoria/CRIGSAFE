"use client";
import React from 'react';
import type { 
  ChartData, 
  ChartOptions
} from 'chart.js';
import dynamic from 'next/dynamic';

// Dynamically import Chart.js components with no SSR
const RadarComponent = dynamic(
  () => import('react-chartjs-2').then(mod => {
    // Register Chart.js components on client
    import('chart.js').then(ChartJS => {
      const { 
        Chart,
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
      } = ChartJS;
      
      Chart.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
      );
    });
    return mod.Radar;
  }),
  { ssr: false }
);

export interface RadarChartProps {
  data: ChartData<'radar'>;
  title?: string;
  height?: number;
  className?: string;
  options?: ChartOptions<'radar'>;
}

const RadarChart: React.FC<RadarChartProps> = ({ 
  data, 
  title, 
  height = 300,
  className,
  options = {}
}) => {
  const defaultOptions: ChartOptions<'radar'> = {
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
    scales: {
      r: {
        ticks: {
          color: 'white',
          backdropColor: 'transparent',
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)'
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 12
          }
        }
      }
    }
  };
  
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <RadarComponent data={data} options={mergedOptions} />
    </div>
  );
};

export default RadarChart; 