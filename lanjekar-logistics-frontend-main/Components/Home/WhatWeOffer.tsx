import React from "react";
import SectionHeading from "./sectionHeading";
import Whatweoffercard from "./Whatweoffercard";
import { Service } from "@/types/Interface";

interface ServiceProps {
  service: Service[];
}

const WhatWeOffer: React.FC<ServiceProps> = ({ service }) => {
  return (
    <section className="flex flex-col w-full gap-5 md:gap-10 pb-20">
      <SectionHeading
        smalltitle={"We offer you"}
        title={"Full range of transportation services"}
        description="We offer a full range of transportation services to meet the diverse needs of your business..."
      />

      <div className="w-full relative h-auto grid sm:grid-cols-2 lg:grid-cols-4 lanjekar-container">
        {service && service.map((item) => (
          <div className="w-full relative border-r border-black" key={item._id}>
            <Whatweoffercard
              title={item.name}
              url={item.slug}
              logo={item.logo} icon={undefined}            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
