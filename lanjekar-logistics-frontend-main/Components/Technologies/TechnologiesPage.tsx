// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import NavBar from "../Home/NavBar";
// import SIdebar from "../Home/SIdebar";
// import PageHeading from "../Home/pageHeading";
// import Footer from "../Home/Footer";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Link from "next/link";
// import TechnologyBanner from "./technologyBanner";
// import Mapwithform from "../Home/Mapwithform";

// const Technologies = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const technologies = [
//     {
//       name: "Realtime Tracking",
//       description:
//         "Monitor your shipments in real-time with our advanced tracking system, ensuring visibility and efficiency.",
//       image: "/real-time-tracking.webp",
//       url: "/technologies/realtimeTracking",
//     },
//     {
//       name: "Logistics Automation",
//       description:
//         "Streamline your operations with cutting-edge automation tools, reducing manual effort and errors.",
//       image: "/logistics-automation.webp",
//       url: "/technologies/logisticsAutomation",
//     },
//     {
//       name: "Mobile App",
//       description:
//         "Manage your logistics on the go with our intuitive and powerful mobile app designed for logistics professionals.",
//       image: "/mobile-app.webp",
//       url: "/technologies/mobileApp",
//     },
//     {
//       name: "Data Analytics",
//       description:
//         "Make informed decisions with insightful data analytics, helping you optimize your supply chain.",
//       image: "/data-analytics.webp",
//       url: "/technologies/dataAnalytics",
//     },
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100">
//         <TechnologyBanner />
//         <NavBar
//           isOpenFuntion={isOpen}
//           setOpenFuntion={setIsOpen}
//           normalimage="/Langekar-white-logo.webp"
//           scrollimage="/Langekar-logo.webp"
//         />
//         <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />
//         {/* <PageHeading heading="Technologies" /> */}

//         <main className="py-10">
//           <div className="lanjekar-container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {technologies.map((technology, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg group"
//                 >
//                   <Image
//                     src={technology.image}
//                     alt={technology.name}
//                     className="w-full h-48 object-cover"
//                     width={1000}
//                     height={800}
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-bold mb-2">
//                       {technology.name}
//                     </h3>
//                     <p className="text-gray-700">{technology.description}</p>
//                   </div>
//                   <Link
//                     href={technology.url}
//                     className="w-fit p-4 h-auto flex items-center gap-2 group-hover:gap-5 transition-all duration-500"
//                   >
//                     Read More
//                     <IoIosArrowRoundForward className="text-[30px] text-black" />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//           <Mapwithform/>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Technologies;




"use client";
import React, { useState } from "react";
import TechnologyBanner from "./technologyBanner";
import NavBar from "../Home/NavBar";
import SIdebar from "../Home/SIdebar";
import Slidersection from "../Home/Slidersection";
import Footer from "../Home/Footer";
import TechnologiesCards from "./TechnologiesCards";
import Mapwithform from "../Home/Mapwithform";


const TechnologiesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <TechnologyBanner />
        <NavBar
          isOpenFuntion={isOpen}
          setOpenFuntion={setIsOpen}
          normalimage="/Langekar-white-logo.webp"
          scrollimage="/Langekar-logo.webp"
        />
        <SIdebar isOpenFuntion={isOpen} setOpenFuntion={setIsOpen} />
        <TechnologiesCards />
        <Slidersection />
        <Mapwithform/>
        <Footer />
      </div>
    </>
  );
};

export default TechnologiesPage;
