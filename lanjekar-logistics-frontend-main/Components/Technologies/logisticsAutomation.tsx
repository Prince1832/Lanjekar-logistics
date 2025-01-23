"use client";
import React, { useState } from "react";
import SIdebar from "../Home/SIdebar";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import Image from "next/image";
import {
  FaCogs,
  FaClock,
  FaWarehouse,
  FaChartLine,
  FaShippingFast,
  FaMapMarkerAlt,
  FaRoute,
} from "react-icons/fa";

const LogisticsAutomation = () => {
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
      <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[60vh]">
        <Image
          src="/logistics-banner.webp"
          alt="logistics-banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-h1 md:text-5xl font-bold">
            Logistics Automation
          </h1>
        </div>
      </div>

      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-3">Logistics Automation</h1>
          <p className="text-gray-700 text-lg mb-12">
            Revolutionize your logistics operations with cutting-edge automation
            solutions. From order processing to delivery, Lanjekar Logistics
            helps you streamline every step for maximum efficiency.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaCogs className="text-5xl text-yellow-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Real-Time Data Integration
                  </h3>
                  <p className="text-gray-600 text-left">
                    Keep your operations updated with real-time data integration
                    from multiple sources, ensuring seamless communication.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaClock className="text-5xl text-blue-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Automated Scheduling
                  </h3>
                  <p className="text-gray-600 text-left">
                    Optimize delivery schedules with AI-powered tools to save
                    time and reduce fuel costs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaWarehouse className="text-5xl text-green-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Warehouse Automation
                  </h3>
                  <p className="text-gray-600 text-left">
                    Automate inventory management, picking, and packing
                    processes to minimize errors and improve efficiency.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaChartLine className="text-5xl text-purple-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    AI-Powered Insights
                  </h3>
                  <p className="text-gray-600 text-left">
                    Use artificial intelligence to analyze trends and improve
                    decision-making across your supply chain.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaShippingFast className="text-5xl text-red-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Seamless Order Processing
                  </h3>
                  <p className="text-gray-600 text-left">
                    Reduce manual workload with automated order processing
                    systems integrated into your operations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaMapMarkerAlt className="text-5xl text-teal-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Advanced Tracking Systems
                  </h3>
                  <p className="text-gray-600 text-left">
                    Gain full visibility of your shipments with GPS tracking and
                    real-time updates.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0fr_2fr] gap-5 bg-white hover:bg-blue-50 cursor-pointer shadow-md rounded-lg p-6 text-center group">
                <div>
                  <FaRoute className="text-5xl text-orange-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    AI-Powered Route Optimization
                  </h3>
                  <p className="text-gray-600 text-left">
                    Leverage advanced algorithms to determine the most efficient
                    delivery routes, reducing transit times and fuel
                    consumption.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Benefits of Logistics Automation
            </h2>
            <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-6 w-fit">
              <li className="text-gray-700 mb-4">
                Increased efficiency and reduced operational costs.
              </li>
              <li className="text-gray-700 mb-4">
                Improved accuracy with automated workflows.
              </li>
              <li className="text-gray-700 mb-4">
                Better customer satisfaction through faster deliveries.
              </li>
              <li className="text-gray-700 mb-4">
                Enhanced visibility and control over the supply chain.
              </li>
              <li className="text-gray-700 mb-4">
                Scalable solutions to handle growing demands.
              </li>
            </ul>
          </section>

          <section className="text-center group">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              Ready to Automate Your Logistics?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Partner with Lanjekar Logistics and take your business to the next
              level with our advanced logistics automation solutions.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Contact Us Today
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LogisticsAutomation;
