"use client";
import React, { useState } from "react";
import SIdebar from "../Home/SIdebar";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import Image from "next/image";

const RealtimeTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleTrackShipment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (trackingId === "123456") {
      setTrackingResult({
        status: "In Transit",
        location: "Mumbai, India",
        estimatedDelivery: "2025-01-10",
      });
    } else {
      setTrackingResult({ error: "Invalid Tracking ID. Please try again." });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
          src="/realtime-tracking.webp"
          alt="realtime-tracking"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-h1 md:text-6xl font-bold">
            Real Time Tracking
          </h1>
        </div>
      </div>

      <main className="flex-grow py-10">
        <div className="lanjekar-container px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Realtime Tracking
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Enter your shipment tracking ID below to monitor its status in
            real-time.
          </p>

          <form
            className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
            onSubmit={handleTrackShipment}
          >
            <label
              htmlFor="trackingId"
              className="block text-gray-700 font-medium mb-2"
            >
              Tracking ID:
            </label>
            <input
              type="text"
              id="trackingId"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter your tracking ID"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="w-full border-2 border-red-500 bg-red-500 text-white py-2 rounded-lg hover:bg-white hover:text-red-500 transition-all duration-500"
            >
              Track Shipment
            </button>
          </form>

          {trackingResult && (
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-6">
              {"error" in trackingResult ? (
                <p className="text-red-600">{trackingResult.error}</p>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    Tracking Details
                  </h3>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    {trackingResult.status}
                  </p>
                  <p>
                    <span className="font-medium">Current Location:</span>{" "}
                    {trackingResult.location}
                  </p>
                  <p>
                    <span className="font-medium">Estimated Delivery:</span>{" "}
                    {trackingResult.estimatedDelivery}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RealtimeTracking;
