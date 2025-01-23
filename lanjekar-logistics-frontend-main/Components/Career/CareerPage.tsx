// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import NavBar from "../Home/NavBar";
// import Footer from "../Home/Footer";

// import axios from "axios";
// import { NEXT_PUBLIC_API_URL } from "@/config";
// import SIdebar from "../Home/SIdebar";
// import Link from "next/link";

// interface Career {
//   slug: string;
//   _id: string;
//   position: string;
//   description: string;
//   salary: string;
//   location: string;
//   type: string;
//   shift: string;
//   experience: string;
// }

// const CareerPage: React.FC = () => {
//   const [careers, setCareers] = useState<Career[]>([]);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const response = await axios.get(`${NEXT_PUBLIC_API_URL}/careers`);
//         if (response.data && Array.isArray(response.data.careers)) {
//           setCareers(response.data.careers);
//           console.log(response.data.careers);
//         } else {
//           console.error(
//             "Unexpected response format. Expected a 'careers' array."
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching careers data:", error);
//       }
//     };

//     fetchCareers();
//   }, []);

//   return (
//     <>
//       <NavBar
//         isOpenFuntion={isOpen}
//         setOpenFuntion={setIsOpen}
//         normalimage="/Langekar-white-logo.webp"
//         scrollimage="/Langekar-logo.webp"
//       />

//       <section>
//         <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
//           <Image
//             src="/career-banner.webp"
//             alt="Career Banner"
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//             <h1 className="text-white text-h1 md:text-6xl font-bold">
//               Join Our Logistics Team
//             </h1>
//           </div>
//         </div>

//         <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />

//         <div className="lanjekar-container">
//           <section className="py-12 px-6 ">
//             <h2 className="md:text-4xl text-2xl font-bold text-center text-gray-800 mb-10">
//               Current Openings
//             </h2>
//             <div className="grid grid-cols-3 gap-5">
//               {careers.length > 0 ? (
//                 careers.map((job) => (
//                   <div
//                     key={job._id}
//                     className="bg-white shadow-lg  overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
//                   >
//                     <div className="p-6">
//                       <h3 className="text-2xl font-semibold text-gray-800 capitalize mb-3">
//                         {job.position}
//                       </h3>
//                       <div className="border-b-2"></div>
//                       <ul className="space-y-2 grid grid-cols-2">
//                         {/* <li className="pt-2">
//                           <strong>Salary:</strong>
//                           {job.salary || "Not specified"}
//                         </li> */}
//                         <li className="mt-2">
//                           <strong>Type:</strong> {job.type || "Not specified"}
//                         </li>
//                         <li>
//                           <strong>Location:</strong>{" "}
//                           {job.location || "Not specified"}
//                         </li>
//                         <li>
//                           <strong>Shift:</strong> {job.shift || "Not specified"}
//                         </li>
//                         {/* <li>
//                           <strong>Experience:</strong>{" "}
//                           {job.experience || "Not specified"}
//                         </li> */}
//                       </ul>
//                       <p className="text-gray-600 mt-4 text-base line-clamp-3 ">
//                         {job.description}
//                       </p>
//                       <Link
//                         href={`/career-page/${encodeURIComponent(job.slug)}`}
//                       >
//                         <button className="mt-4 px-4 py-2 border-2 border-yellow-400 bg-yellow-400 text-black font-semibold hover:bg-white hover:text-yellow-400 transition-colors ">
//                           Know More
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-lg text-center col-span-full">
//                   No Openings available.
//                 </p>
//               )}
//             </div>
//           </section>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default CareerPage;



"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import SIdebar from "../Home/SIdebar";
import Link from "next/link";

interface Career {
  slug: string;
  _id: string;
  position: string;
  description: string;
  salary: string;
  location: string;
  type: string;
  shift: string;
  experience: string;
}

const CareerPage: React.FC = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(`${NEXT_PUBLIC_API_URL}/careers`);
        if (response.data && Array.isArray(response.data.careers)) {
          setCareers(response.data.careers);
        } else {
          console.error(
            "Unexpected response format. Expected a 'careers' array."
          );
        }
      } catch (error) {
        console.error("Error fetching careers data:", error);
      }
    };

    fetchCareers();
  }, []);

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setIsOpen}
        normalimage="/Langekar-white-logo.webp"
        scrollimage="/Langekar-logo.webp"
      />

      <section>
        <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src="/career-banner.webp"
            alt="Career Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-h1 md:text-6xl font-bold">
              Join Our Logistics Team
            </h1>
          </div>
        </div>

        <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />

        <div className="lanjekar-container">
          <section className="py-12 px-6">
            <h2 className="md:text-4xl text-2xl font-semibold text-center text-gray-800 mb-10">
              Current Openings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {careers.length > 0 ? (
                careers.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg border border-gray-200"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 capitalize mb-2">
                        {job.position}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">
                        {job.location || "Location not specified"}
                      </p>
                      <p className="text-gray-600 text-base line-clamp-3 mb-6">
                        {job.description}
                      </p>
                      <Link
                        href={`/career-page/${encodeURIComponent(job.slug)}`}
                      >
                        <button className="mt-4 px-6 py-2 border-2 border-yellow-400 text-yellow-400 font-medium text-sm hover:bg-yellow-400 hover:text-black transition-colors">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-lg text-center col-span-full">
                  No Openings available.
                </p>
              )}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerPage;




