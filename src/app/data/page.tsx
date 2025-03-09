import React from 'react';
import DataAnalysis from '@/components/sections/DataAnalysis';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function DataPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <div className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              <span className="text-white">Crane Safety</span>{" "}
              <span className="text-primary">Data Analysis</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-center mb-12">
              Comprehensive analysis of how proper training impacts safety, efficiency, and cost metrics in the crane industry. 
              These data-driven insights demonstrate the clear return on investment from proper certification and training.
            </p>
          </div>
        </div>
        <DataAnalysis />
      </main>
      <Footer />
    </div>
  );
} 