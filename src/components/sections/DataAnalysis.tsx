"use client";
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import BarChart from '@/components/ui/charts/BarChart';
import LineChart from '@/components/ui/charts/LineChart';
import PieChart from '@/components/ui/charts/PieChart';
import RadarChart from '@/components/ui/charts/RadarChart';
import MixedChart from '@/components/ui/charts/MixedChart';
import ClientOnly from '@/components/ui/ClientOnly';
import { 
  safetyMetricsData, 
  efficiencyData, 
  financialImpactData, 
  incidentTypeData,
  qualityMetricsData,
  certificationComparisonData
} from '@/lib/data/charts-data';
import { 
  Landmark, 
  TrendingUp, 
  ShieldCheck, 
  BarChart2, 
  CheckCircle2, 
  PieChart as PieChartIcon, 
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DataAnalysis = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">Data-Driven </span>
            <span className="text-primary">Insights</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            Our comprehensive analysis reveals how proper training directly impacts safety metrics, 
            operational efficiency, project quality, and your bottom line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Safety Impact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card shadow-lg border border-gray-800 overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <CardTitle className="text-xl">Safety Impact</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Certified operators dramatically reduce incident rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly>
                  <BarChart 
                    data={safetyMetricsData} 
                    height={280} 
                  />
                </ClientOnly>
                <div className="mt-4 space-y-2">
                  <KeyStat value="85%" label="Reduction in reportable incidents" />
                  <KeyStat value="76%" label="Decrease in near misses" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                  View detailed safety metrics
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Efficiency Gains Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-card shadow-lg border border-gray-800 overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <TrendingUp size={20} />
                  </div>
                  <CardTitle className="text-xl">Efficiency Gains</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Training leads to steadily improving operational efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly>
                  <LineChart 
                    data={efficiencyData} 
                    height={280} 
                  />
                </ClientOnly>
                <div className="mt-4 space-y-2">
                  <KeyStat value="32%" label="Increase in operational efficiency" />
                  <KeyStat value="28%" label="Faster project completion times" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                  Explore efficiency metrics
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Financial Impact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card shadow-lg border border-gray-800 overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Landmark size={20} />
                  </div>
                  <CardTitle className="text-xl">Financial Impact</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Training investment delivers exceptional ROI over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly>
                  <MixedChart 
                    data={financialImpactData} 
                    height={280} 
                  />
                </ClientOnly>
                <div className="mt-4 space-y-2">
                  <KeyStat value="740%" label="5-year return on investment" />
                  <KeyStat value="$735K" label="Net savings over 5 years" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                  View financial breakdown
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Quality Improvement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-card shadow-lg border border-gray-800 overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <CardTitle className="text-xl">Quality Improvement</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Training significantly improves operational quality metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly>
                  <BarChart 
                    data={qualityMetricsData} 
                    height={280} 
                  />
                </ClientOnly>
                <div className="mt-4 space-y-2">
                  <KeyStat value="76%" label="Reduction in equipment downtime" />
                  <KeyStat value="83%" label="Decrease in project delays" />
                  <KeyStat value="30%" label="Improvement in customer satisfaction" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                  Explore quality metrics
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Incident Distribution Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-card shadow-lg border border-gray-800 overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <PieChartIcon size={20} />
                  </div>
                  <CardTitle className="text-xl">Incident Distribution</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Training reduces incident rates across all categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly>
                  <PieChart 
                    data={incidentTypeData} 
                    height={280} 
                  />
                </ClientOnly>
                <div className="mt-4 space-y-2">
                  <KeyStat value="69%" label="Reduction in operator errors" />
                  <KeyStat value="67%" label="Reduction in rigging-related incidents" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                  View incident breakdown
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Certification Comparison Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-card shadow-lg border border-gray-800 overflow-hidden h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <BarChart2 size={20} />
                  </div>
                  <CardTitle className="text-xl">Certification Comparison</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  Advanced certification delivers superior performance across metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly>
                  <RadarChart 
                    data={certificationComparisonData} 
                    height={280} 
                  />
                </ClientOnly>
                <div className="mt-4 space-y-2">
                  <KeyStat value="183%" label="Performance improvement with advanced certification" />
                  <KeyStat value="94%" label="Regulatory compliance achievement" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4">
                <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                  Compare certification levels
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const KeyStat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-lg font-bold text-primary">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

export default DataAnalysis; 