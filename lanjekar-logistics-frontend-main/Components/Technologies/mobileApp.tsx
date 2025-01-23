"use client";
import React, { useState } from "react";
import SIdebar from "../Home/SIdebar";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import Image from "next/image";
import {
  FaBell,
  FaHeadset,
  FaCalendarCheck,
  FaLanguage,
  FaLock,
  FaMapMarkedAlt,
} from "react-icons/fa";

const MobileApp = () => {
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
          src="/mobile-banner.webp"
          alt="mobile-app"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-h1 md:text-6xl font-bold">
            Mobile App
          </h1>
        </div>
      </div>

      <main className="pt-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Mobile App</h1>
          <p className="text-gray-700 text-lg mb-12">
            Experience logistics like never before with the Lanjekar Logistics
            Mobile App. Manage shipments, stay updated, and access support—all
            at your fingertips.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="grid grid-cols-[0.5fr_2fr] gap-2 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 transition-all duration-200 cursor-pointer text-center group">
                <div>
                  <FaMapMarkedAlt className="text-5xl text-teal-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Advanced Tracking Systems
                  </h3>
                  <p className="text-gray-600 text-left">
                    Keep your operations updated with real-time data integration
                    from multiple sources, ensuring seamless communication.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0.5fr_2fr] gap-2 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 transition-all duration-200 cursor-pointer text-center group">
                <div>
                  <FaBell className="text-5xl text-yellow-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Notifications
                  </h3>
                  <p className="text-gray-600 text-left">
                    Stay informed with real-time push notifications about
                    shipment status, delivery updates, and urgent alerts.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0.5fr_2fr] gap-2 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 transition-all duration-200 cursor-pointer text-center group">
                <div>
                  <FaHeadset className="text-5xl text-blue-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    24/7 Customer Support
                  </h3>
                  <p className="text-gray-600 text-left">
                    Get assistance any time with our dedicated in-app support
                    for all your logistics needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0.5fr_2fr] gap-2 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 transition-all duration-200 cursor-pointer text-center group">
                <div>
                  <FaCalendarCheck className="text-5xl text-green-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Easy Booking
                  </h3>
                  <p className="text-gray-600 text-left">
                    Schedule and manage your shipments with a simple and
                    user-friendly booking process.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0.5fr_2fr] gap-2 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 transition-all duration-200 cursor-pointer text-center group">
                <div>
                  <FaLanguage className="text-5xl text-purple-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    Multi-Language Support
                  </h3>
                  <p className="text-gray-600 text-left">
                    Access the app in multiple languages for a seamless
                    experience tailored to your region.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[0.5fr_2fr] gap-2 bg-white shadow-md rounded-lg p-6 hover:bg-blue-50 transition-all duration-200 cursor-pointer text-center group">
                <div>
                  <FaLock className="text-5xl text-red-500 mb-4" />
                </div>
                <div>
                  <h3 className="text-xl text-left font-bold text-gray-800 mb-4">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600 text-left">
                    Make payments securely within the app using a variety of
                    trusted payment options.
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

export default MobileApp;
