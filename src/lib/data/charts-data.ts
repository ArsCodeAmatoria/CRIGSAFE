import { faker } from '@faker-js/faker';

// Safety Metrics Data
export const safetyMetricsData = {
  labels: ['Non-Certified', 'Basic Training', 'Advanced Certified'],
  datasets: [
    {
      label: 'Incidents per 1000 Hours',
      data: [12.8, 7.3, 1.9],
      backgroundColor: '#53C03F',
      borderColor: '#53C03F',
      borderWidth: 1,
    },
    {
      label: 'Near Misses per 1000 Hours',
      data: [24.5, 12.2, 4.1],
      backgroundColor: '#4db8ff',
      borderColor: '#4db8ff',
      borderWidth: 1,
    }
  ],
};

// Efficiency Metrics Data
export const efficiencyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Before Training',
      data: [65, 68, 63, 70, 67, 64, 66, 68, 65, 62, 64, 67],
      borderColor: '#ff9933',
      backgroundColor: 'rgba(255, 153, 51, 0.1)',
      tension: 0,
      fill: true,
      pointBackgroundColor: '#ff9933',
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderColor: 'white',
      pointBorderWidth: 1,
    },
    {
      label: 'After Training',
      data: [65, 69, 75, 82, 87, 89, 92, 94, 95, 96, 97, 98],
      borderColor: '#53C03F',
      backgroundColor: 'rgba(83, 192, 63, 0.1)',
      tension: 0,
      fill: true,
      pointBackgroundColor: '#53C03F',
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderColor: 'white',
      pointBorderWidth: 1,
    }
  ],
};

// Financial Impact Data
export const financialImpactData = {
  labels: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5'],
  datasets: [
    {
      type: 'bar' as const,
      label: 'Training Investment',
      data: [75000, 35000, 25000, 25000, 25000],
      backgroundColor: '#4db8ff',
      borderColor: '#4db8ff',
      borderWidth: 1,
      order: 1,
    },
    {
      type: 'bar' as const,
      label: 'Savings from Reduced Incidents',
      data: [120000, 145000, 165000, 190000, 210000],
      backgroundColor: '#53C03F',
      borderColor: '#53C03F',
      borderWidth: 1,
      order: 1,
    },
    {
      type: 'line' as const,
      label: 'ROI',
      data: [60, 314, 560, 660, 740],
      borderColor: '#9966ff',
      backgroundColor: '#9966ff',
      borderWidth: 2,
      order: 0,
      yAxisID: 'roi',
      tension: 0,
      pointRadius: 6,
      pointBackgroundColor: '#9966ff',
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
    }
  ],
};

// Incident Type Distribution Data
export const incidentTypeData = {
  labels: ['Equipment Failure', 'Operator Error', 'Rigging Issues', 'Communication Failure', 'Environmental Factors'],
  datasets: [
    {
      label: 'Before Training',
      data: [25, 45, 18, 7, 5],
      backgroundColor: [
        '#ff3399',
        '#4db8ff',
        '#ff9933',
        '#9966ff',
        '#53C03F',
      ],
    },
    {
      label: 'After Training',
      data: [18, 14, 6, 3, 4],
      backgroundColor: [
        '#ff3399',
        '#4db8ff',
        '#ff9933',
        '#9966ff',
        '#53C03F',
      ],
    }
  ],
};

// Quality Metrics Data
export const qualityMetricsData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Equipment Downtime (hrs)',
      data: [86, 76, 42, 21],
      backgroundColor: '#ff3399',
      borderColor: '#ff3399',
      borderWidth: 1,
    },
    {
      label: 'Project Delays (days)',
      data: [12, 9, 5, 2],
      backgroundColor: '#4db8ff',
      borderColor: '#4db8ff',
      borderWidth: 1,
    },
    {
      label: 'Customer Satisfaction (%)',
      data: [74, 82, 91, 96],
      backgroundColor: '#53C03F',
      borderColor: '#53C03F',
      borderWidth: 1,
    }
  ]
};

// Training Certification Comparison
export const certificationComparisonData = {
  labels: ['Safety Score', 'Operational Efficiency', 'Quality of Work', 'Regulatory Compliance', 'Cost Effectiveness'],
  datasets: [
    {
      label: 'Uncertified',
      data: [30, 40, 35, 25, 65],
      backgroundColor: 'rgba(255, 51, 153, 0.2)',
      borderColor: '#ff3399',
      borderWidth: 2,
      pointBackgroundColor: '#ff3399',
      pointRadius: 4,
    },
    {
      label: 'Basic Certification',
      data: [55, 60, 65, 70, 75],
      backgroundColor: 'rgba(77, 184, 255, 0.2)',
      borderColor: '#4db8ff',
      borderWidth: 2,
      pointBackgroundColor: '#4db8ff',
      pointRadius: 4,
    },
    {
      label: 'Advanced Certification',
      data: [85, 90, 85, 95, 80],
      backgroundColor: 'rgba(83, 192, 63, 0.2)',
      borderColor: '#53C03F',
      borderWidth: 2,
      pointBackgroundColor: '#53C03F',
      pointRadius: 4,
    }
  ]
};

// Cost Breakdown Data
export const costBreakdownData = {
  labels: ['Equipment Damage', 'Workplace Injuries', 'Project Delays', 'Insurance Premiums', 'Compliance Penalties'],
  datasets: [
    {
      label: 'Before Training',
      data: [38, 27, 18, 12, 5],
      backgroundColor: [
        '#ff3399',
        '#4db8ff',
        '#ff9933',
        '#9966ff',
        '#53C03F',
      ],
      borderWidth: 0,
    }
  ]
};

// Long-term Performance Trends
export const longTermPerformanceData = {
  labels: Array.from({ length: 24 }, (_, i) => `Month ${i + 1}`),
  datasets: [
    {
      label: 'Productivity Index',
      data: Array.from({ length: 24 }, (_, i) => {
        // Start at 100 and gradually increase with some random variation
        const trend = 100 + (i * 1.8);
        return trend + faker.number.int({ min: -5, max: 5 });
      }),
      borderColor: '#53C03F',
      backgroundColor: 'rgba(83, 192, 63, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Safety Index',
      data: Array.from({ length: 24 }, (_, i) => {
        // Start at 100 and gradually increase with some random variation
        const trend = 100 + (i * 1.5);
        return trend + faker.number.int({ min: -3, max: 3 });
      }),
      borderColor: '#4db8ff',
      backgroundColor: 'rgba(77, 184, 255, 0.1)',
      tension: 0.4,
      fill: true,
    }
  ]
}; 