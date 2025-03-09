"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Shield, DollarSign, CheckCircle } from 'lucide-react';

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
          
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/crane-operator.jpg"
                alt="Crane operator with safety equipment"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-xl" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur p-4 rounded-lg border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-black flex-shrink-0">
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">The Data Proves It</h3>
                    <p className="text-gray-400 text-sm">Companies with certified operators see 73% fewer accidents and 32% higher efficiency rates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 md:top-12 md:-right-12 bg-black/90 backdrop-blur p-4 rounded-xl border border-gray-800 shadow-lg z-10 max-w-[240px]"
            >
              <h3 className="text-primary font-bold text-xl">85%</h3>
              <p className="text-white text-sm">Reduction in workplace incidents after comprehensive training</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 md:bottom-12 md:-left-12 bg-black/90 backdrop-blur p-4 rounded-xl border border-gray-800 shadow-lg z-10 max-w-[240px]"
            >
              <h3 className="text-primary font-bold text-xl">$246K</h3>
              <p className="text-white text-sm">Average annual savings from reduced accidents and improved productivity</p>
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