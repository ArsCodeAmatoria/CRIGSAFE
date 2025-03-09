"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Shield, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Training that </span>
              <span className="text-primary">Saves Lives</span>
              <span className="text-white"> and </span>
              <span className="text-primary">Reduces Costs</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8">
              Discover how proper crane operator training directly improves safety metrics, 
              operational efficiency, and your bottom line through data-driven insights.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <BenefitItem icon={<Shield size={20} />} text="Enhanced Safety" />
              <BenefitItem icon={<BarChart2 size={20} />} text="Improved Efficiency" />
              <BenefitItem icon={<CheckCircle size={20} />} text="Higher Quality" />
              <BenefitItem icon={<DollarSign size={20} />} text="Cost Savings" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6 text-base">
                View Data Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 px-6 py-6 text-base">
                Learn About Training
              </Button>
            </div>
          </motion.div>
          
          {/* Image and Data Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Key Stats Cards - Top */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-black/80 border border-gray-800 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-black flex-shrink-0">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h3 className="text-primary font-bold text-xl">85%</h3>
                        <p className="text-white text-sm">Reduction in workplace incidents</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-black/80 border border-gray-800 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-black flex-shrink-0">
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <h3 className="text-primary font-bold text-xl">$246K</h3>
                        <p className="text-white text-sm">Average annual savings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl h-[280px] md:h-[320px]"
            >
              <Image
                src="/crane-operator.jpg"
                alt="Crane operator with safety equipment"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />
            </motion.div>
            
            {/* Data Visualization Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-black/80 backdrop-blur border border-gray-800 rounded-xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-black flex-shrink-0">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Training Impact</h3>
                  <p className="text-gray-400 text-sm">Certified operators see 73% fewer accidents</p>
                </div>
              </div>
              
              {/* Simple Chart Visualization */}
              <div className="flex items-end h-24 gap-4 mt-2 mb-1 pl-1">
                <div className="relative flex flex-col items-center">
                  <div className="bg-gray-600 w-10 h-[90%] rounded-t-sm"></div>
                  <span className="text-xs text-gray-400 mt-1">Before</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="bg-primary w-10 h-[25%] rounded-t-sm"></div>
                  <span className="text-xs text-gray-400 mt-1">After</span>
                </div>
                <div className="flex-grow flex items-center ml-2">
                  <div className="flex flex-col text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-primary" size={16} />
                      <span className="text-white">32% higher efficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={16} />
                      <span className="text-white">4x better quality standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    <div className="text-primary">{icon}</div>
    <span className="text-white">{text}</span>
  </div>
);

export default Hero; 