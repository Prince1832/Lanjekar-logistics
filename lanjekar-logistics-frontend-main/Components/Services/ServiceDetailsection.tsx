import React from "react";
import Image from "next/image";
import { NEXT_PUBLIC_API_URL } from "@/config";

function ServiceDetailsection({ serviceData }: any) {
  if (!serviceData) {
    return (
      <p className="grid place-content-center text-xl">
        Loading...
      </p>
    );
  }

  const { name, description, imageAlt } = serviceData;

  return (
      <section className="w-full relative h-auto flex flex-col gap-5">
        <Image
           src={`${NEXT_PUBLIC_API_URL}${serviceData.image}`}
          alt={imageAlt || "truck-transportation"}
          height={400}
          width={400}
          className="w-full sm:h-[400px] relative object-cover"
        />
        <h2 className="text-p18 font-semibold text-black">{name}</h2>
        <p className="text-p18 font-normal">{description}</p>

        
        {/* <p>Effective logistics begins with strategic planning. At <b>Lanjekar Logistics</b>, we provide expert supply chain planning services that align with your business goals.</p>

        <ul className="list-disc flex flex-col gap-3 px-10">
          <li><b>Demand Forecasting:</b> We analyze market trends and historical data to predict demand accurately, helping you maintain optimal inventory levels.</li>
          <li><b>Inventory Optimization:</b> Our solutions prevent overstocking and stockouts, ensuring a smooth flow of goods while reducing holding costs.
          </li>
          <li><b>Risk Management:</b> We identify potential risks in your supply chain and create contingency plans to mitigate disruptions.</li>
          <li><b>Customized Solutions:</b> Whether you're scaling up operations or entering new markets, we design tailored strategies to improve supply chain performance and enhance operational efficiency.</li>
        </ul> */}
      </section>

  );
}

export default ServiceDetailsection;
