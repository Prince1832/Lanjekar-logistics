"use client";
import React, { useState } from "react";
import WarehouseSolution from "../department_icons/WarehouseSolution";
import GetQuote from "./Getquote";
import FreightManagement from "../department_icons/FreightManagement";
import Complains from "../department_icons/Complains";
import SupplyChainSolutions from "../department_icons/SupplyChainSolutions";

function Departmentsection() {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      icon: <SupplyChainSolutions />,
      title: "Supply Chain Planning",
      description:
        "Strategically designing and managing the flow of goods to optimize efficiency, reduce costs, and meet customer demands",
    },
    {
      icon: <FreightManagement />,
      title: "Freight Management",
      description:
        "Efficiently coordinating and optimizing freight solutions for timely and cost-effective deliveries.",
    },
    {
      icon: <WarehouseSolution />,
      title: "Warehouse Solutions",
      description:
        "Providing secure, organized, and scalable warehouse management systems to support inventory needs.",
    },
    {
      icon: <Complains />,
      title: "Customs & Compliance",
      description:
        "Ensuring seamless international shipments by managing customs clearance and regulatory compliance",
    },
  ];

  return (
    <section className="w-full relative h-auto bg-[#f3f3f3]" id="whoweare">
      <div className="w-full relative min-h-[80vh] py-10 md:py-20 flex flex-col justify-center items-center gap-1 lanjekar-container">
        <h2 className="text-h2 font-semibold text-black">Our Department</h2>

        <div className="w-full relaitve h-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {data.map((item, index) => (
            <div
              className="w-full relative h-full flex flex-col px-10 gap-1 items-center group bg-white py-10 group-hover:fill-black transition-all duration-500 transform hover:scale-110 hover:lift-2"
              key={index}
            >
              {item.icon}
              <h2 className="text-p18 font-semibold text-black">
                {item.title}
              </h2>
              <p className="text-[16px] font-normal text-center text-gray-600 line-clamp-2">
                {item.description}
              </p>
              {/* <div className="w-full flex items-center gap-[2px] justify-center mt-5">
                <span className="group-hover:bg-green-300 p-[5px] transition-all duration-500 rounded-full"></span>
                <span className="group-hover:bg-green-300 p-[5px] transition-all duration-500 rounded-full"></span>
                <span className="group-hover:bg-green-300 p-[5px] transition-all duration-500 rounded-full"></span>
              </div> */}
            </div>
          ))}
        </div>

        <button
          className="text-p18 font-semibold bg-primary border-2 border-red-600 transition-all duration-500 hover:bg-white hover:text-primary hover:border-2 hover:border-red-600 px-10 py-5 text-white bg-green-300 mt-20 uppercase"
          onClick={() => setShowModal(true)}
        >
          Get a Quote
        </button>

        {showModal && <GetQuote onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
}

export default Departmentsection;
