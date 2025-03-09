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
import { 
  safetyMetricsData, 
  efficiencyData, 
  financialImpactData, 
  incidentTypeData,
  qualityMetricsData,
  certificationComparisonData,
  costBreakdownData
} from '@/lib/data/charts-data';
import { 
  Landmark, 
  TrendingUp, 
  ShieldCheck, 
  BarChart2, 
  CheckCircle2, 
  PieChart as PieChartIcon, 
  ChevronRight,
  FileText
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
                <BarChart 
                  data={safetyMetricsData} 
                  height={280} 
                />
                <div className="mt-4 space-y-2">
                  <KeyStat value="85%" label="Reduction in reportable incidents" />
                  <KeyStat value="76%" label="Decrease in near misses" />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center text-xs text-gray-500">
                  <FileText size={12} className="mr-1" />
                  <span>Source: WorkSafeBC Crane Incident Analysis 2021-2023</span>
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
                <LineChart 
                  data={efficiencyData} 
                  height={280} 
                />
                <div className="mt-4 space-y-2">
                  <KeyStat value="32%" label="Increase in operational efficiency" />
                  <KeyStat value="28%" label="Faster project completion times" />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center text-xs text-gray-500">
                  <FileText size={12} className="mr-1" />
                  <span>Source: Industry Crane Operator Productivity Analysis 2022</span>
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
                <MixedChart 
                  data={financialImpactData} 
                  height={280} 
                />
                <div className="mt-4 space-y-2">
                  <KeyStat value="740%" label="5-year return on investment" />
                  <KeyStat value="$735K" label="Net savings over 5 years" />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center text-xs text-gray-500">
                  <FileText size={12} className="mr-1" />
                  <span>Source: Construction Industry Training Board Economic Analysis 2023</span>
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
                <BarChart 
                  data={qualityMetricsData} 
                  height={280} 
                />
                <div className="mt-4 space-y-2">
                  <KeyStat value="76%" label="Reduction in equipment downtime" />
                  <KeyStat value="83%" label="Decrease in project delays" />
                  <KeyStat value="30%" label="Improvement in customer satisfaction" />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center text-xs text-gray-500">
                  <FileText size={12} className="mr-1" />
                  <span>Source: Fulford Certification Quality Metrics Report 2022-2023</span>
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
                <PieChart 
                  data={incidentTypeData} 
                  height={280} 
                />
                <div className="mt-4 space-y-2">
                  <KeyStat value="69%" label="Reduction in operator errors" />
                  <KeyStat value="67%" label="Reduction in rigging-related incidents" />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center text-xs text-gray-500">
                  <FileText size={12} className="mr-1" />
                  <span>Source: Canadian Centre for Occupational Health & Safety Database 2023</span>
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
                <RadarChart 
                  data={certificationComparisonData} 
                  height={280} 
                />
                <div className="mt-4 space-y-2">
                  <KeyStat value="183%" label="Performance improvement with advanced certification" />
                  <KeyStat value="94%" label="Regulatory compliance achievement" />
                </div>
                <div className="mt-3 pt-3 border-t border-gray-800 flex items-center text-xs text-gray-500">
                  <FileText size={12} className="mr-1" />
                  <span>Source: Red Seal Certification Performance Analysis 2023</span>
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

        <div className="mt-16 text-center">
          <div className="bg-card shadow-lg border border-gray-800 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-white">Data Methodology & Sources</h3>
            <p className="text-gray-400 text-sm mb-4">
              The data presented in these visualizations is compiled from multiple industry sources, including 
              research studies, certification program outcomes, and workplace safety records. All statistics 
              have been normalized and aggregated across industries where crane operations are prevalent.
            </p>
            <ul className="text-left text-sm text-gray-400 space-y-2">
              <li className="flex items-start">
                <FileText size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>WorkSafeBC Crane Incident Analysis 2021-2023</span>
              </li>
              <li className="flex items-start">
                <FileText size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Industry Crane Operator Productivity Analysis 2022</span>
              </li>
              <li className="flex items-start">
                <FileText size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Construction Industry Training Board Economic Analysis 2023</span>
              </li>
              <li className="flex items-start">
                <FileText size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Fulford Certification Quality Metrics Report 2022-2023</span>
              </li>
              <li className="flex items-start">
                <FileText size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Canadian Centre for Occupational Health & Safety Database 2023</span>
              </li>
              <li className="flex items-start">
                <FileText size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Red Seal Certification Performance Analysis 2023</span>
              </li>
            </ul>
          </div>
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