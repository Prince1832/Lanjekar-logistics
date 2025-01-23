"use client";
import React, { useEffect, useState } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
import CareerForm from "./CareerForm";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { useParams } from "next/navigation";
import Footer from "../Home/Footer";
import NavBar from "../Home/NavBar";
import SIdebar from "../Home/SIdebar";

interface Career {
  _id: string;
  position: string;
  description?: string;
  responsibilities: string[];
  requirements: string[];
  whyJoin: string;
  experience: string;
  type: string;
  location: string;
  shift: string;
  salary: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { slug } = useParams();

  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ careers: Career[] }>(
          `${NEXT_PUBLIC_API_URL}/careers/${slug}`
        );
        setCareers(response.data.careers);
        console.log(response.data.careers);
      } catch (err) {
        console.error("Error fetching careers:", err);
        setError("Failed to fetch career details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    console.log(careers);
  }, [careers]);

  if (loading) {
    return <p className="text-center py-10 text-gray-600 ">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-600">{error}</p>;
  }

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setIsOpen}
        normalimage="/Langekar-logo.webp"
        scrollimage="/Langekar-logo.webp"
        css="text-black"
      />

      <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />

      {careers.map((item, index) => (
        <section
          className="py-12 px-6 bg-gray-50 grid grid-cols-[2fr_1.35fr] lanjekar-container mt-20"
          key={index}
        >
          <div>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              {item.position}
            </h2>

            <div className="max-w-3xl mx-auto bg-white shadow-lg p-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Description
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              <div className="border-b-2 mt-3"></div>
              <ul className="space-y-2 grid grid-cols-2 mt-2">
                <li className="pt-2">
                  <strong>Salary:</strong>
                  {item.salary || "Not specified"}
                </li>
                <li>
                  <strong>Type:</strong> {item.type || "Not specified"}
                </li>
                <li>
                  <strong>Location:</strong> {item.location || "Not specified"}
                </li>
                <li>
                  <strong>Shift:</strong> {item.shift || "Not specified"}
                </li>
                <li>
                  <strong>Experience:</strong>{" "}
                  {item.experience || "Not specified"}
                </li>
              </ul>

              {/* <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Requirements
                </h3>
            
              </div> */}

              {/* <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Join Us?
                </h3>
                <p className="text-gray-600"></p>
              </div> */}

              {/* <button
                className="mt-6 w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                onClick={() => alert("Application process coming soon!")}
              >
                Apply Now
              </button> */}
            </div>
          </div>

          <div className="px-6 bg-gray-50 sticky top-24">
            <h2 className="text-3xl font-bold text-center mb-9">Apply Now</h2>
            <CareerForm />
          </div>
        </section>
      ))}
      <Footer />
    </>
  );
};

export default JobDetails;
