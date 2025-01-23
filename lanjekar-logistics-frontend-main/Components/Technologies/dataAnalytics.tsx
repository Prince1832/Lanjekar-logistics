"use client";
import React, { useState } from "react";
import SIdebar from "../Home/SIdebar";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import Image from "next/image";
import {
  FaChartBar,
  FaLightbulb,
  FaDatabase,
  FaRegChartBar,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

const DataAnalytics = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        <NavBar
          isOpenFuntion={isOpen}
          setOpenFuntion={setIsOpen}
          normalimage="/Langekar-white-logo.webp"
          scrollimage="/Langekar-logo.webp"
        />
        <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />
      </header>

      <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/data-ayalytics.webp"
          alt="data-ayalytics"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-h1 md:text-6xl font-bold">
            Data Analytics
          </h1>
        </div>
      </div>

      <main className="pt-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Data Analytics</h1>
          <p className="text-gray-700 text-lg mb-12">
            Gain valuable insights into your logistics operations with our
            advanced Data Analytics solutions. Stay informed with real-time
            trends, performance metrics, and reporting dashboards.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="grid grid-cols-[0fr_2fr] gap-4 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                <div>
                  <FaChartBar className="text-blue-500 text-5xl mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Reporting Dashboards
                  </h3>
                  <p className="text-gray-600">
                    Visualize shipment data with interactive dashboards,
                    tracking trends and delivery timelines.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-4 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                <div>
                  <FaLightbulb className="text-yellow-500 text-5xl mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Shipment Insights
                  </h3>
                  <p className="text-gray-600">
                    Identify bottlenecks and optimize logistics with actionable
                    insights into shipment performance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-4 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                <div>
                  <FaDatabase className="text-green-500 text-5xl mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Real-Time Data
                  </h3>
                  <p className="text-gray-600">
                    Monitor live shipment data, tracking ongoing deliveries and
                    delays in real-time.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-4 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                <div>
                  <FaRegChartBar className="text-purple-500 text-5xl mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Predictive Analytics
                  </h3>
                  <p className="text-gray-600">
                    Use predictive models to forecast delivery times and
                    shipment volumes for better planning.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-4 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                <div>
                  <FaFileAlt className="text-red-500 text-5xl mb-4" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Custom Reports
                  </h3>
                  <p className="text-gray-600">
                    Generate tailored reports for your business needs and export
                    them in multiple formats.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-4 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                <div>
                <FaChartLine className="text-indigo-500 text-5xl mb-4" /> 
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    KPI Tracking
                  </h3>
                  <p className="text-gray-600">
                    Track key performance indicators like on-time delivery rates
                    and cost per shipment.
                  </p>
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataAnalytics;
