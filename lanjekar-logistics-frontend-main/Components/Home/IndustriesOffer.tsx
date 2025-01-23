// "use client";
// import React from "react";
// import IndustriesOfferCard from "../Industries/industriesOfferCard";
// import Ecommerce from "../department_icons/Ecommerce";
// import Healthcare from "../department_icons/healthcare";
// import Manufacturing from "../department_icons/manufacturing";
// import Retail from "../department_icons/retail";
// import Automotive from "../department_icons/automotive";
// import Link from "next/link";


// const IndustriesOffer = () => {
//   return (
//     <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 lanjekar-container gap-3 mt-[-80px] relative z-10 md-custom:grid-cols-2">
//       <div className="bg-white  h-auto ">
//         <IndustriesOfferCard
//           icon={<Ecommerce />}
//           title={"E-Commerce"}
//           url={"e-commerce"}
//           description="
// E-commerce services facilitate online buying, selling, and digital transactions."
//         />
//       </div>
//       <div className=" bg-white  h-auto">
//         <IndustriesOfferCard
//           icon={<Healthcare />}
//           title={"Healthcare"}
//           url={"healthcare"}
//           description="
// Healthcare services provide medical care, diagnosis, treatment, and wellness support."
//         />
//       </div>
//       <div className=" bg-white  h-auto">
//         <IndustriesOfferCard
//           icon={<Manufacturing />}
//           title={"Manufacturing"}
//           url={"manufacturing"}
//           description="
// Manufacturing services produce goods through processes like design, assembly, and production."
//         />
//       </div>
//       <div className=" bg-white  h-auto">
//         <IndustriesOfferCard
//           icon={<Retail />}
//           title={"Retail"}
//           url={"retail"}
//           description="
// Retail involves selling products directly to consumers through various channels."
//         />
//       </div>
//       <Link href={`industries/${url}`} className=" bg-white  h-auto">
//         <IndustriesOfferCard
//           icon={<Automotive />}
//           title={"Automotive"}
//           url={"automotive"}
//           description="Automotive refers to vehicles, technology, manufacturing, and innovation in transportation."
//         />
//       </Link>
//     </div>
//   );
// };

// export default IndustriesOffer;




"use client";
import React from "react";
import IndustriesOfferCard from "../Industries/industriesOfferCard";
import Ecommerce from "../department_icons/Ecommerce";
import Healthcare from "../department_icons/healthcare";
import Manufacturing from "../department_icons/manufacturing";
import Retail from "../department_icons/retail";
import Automotive from "../department_icons/automotive";
import Link from "next/link";

const IndustriesOffer = () => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lanjekar-container gap-3 z-10 md-custom:grid-cols-2">
      <Link href="/industries/e-commerce" className="bg-white  h-auto">
        <IndustriesOfferCard
          icon={<Ecommerce />}
          title="E-Commerce"
          url="e-commerce"
          description="E-commerce services indeed facilitate online buying, selling, and digital transactions."
        />
      </Link>
      <Link href="/industries/healthcare" className="bg-white  h-auto">
        <IndustriesOfferCard
          icon={<Healthcare />}
          title="Healthcare"
          url="healthcare"
          description="Healthcare services provide medical care, diagnosis, treatment, and wellness support."
        />
      </Link>
      <Link href="/industries/manufacturing" className="bg-white  h-auto">
        <IndustriesOfferCard
          icon={<Manufacturing />}
          title="Manufacturing"
          url="manufacturing"
          description="Manufacturing services produce goods through processes like design, assembly, and production."
        />
      </Link>
      <Link href="/industries/retail" className="bg-white  h-auto">
        <IndustriesOfferCard
          icon={<Retail />}
          title="Retail"
          url="retail"
          description="Retail indeed involves selling products directly to consumers through various channels."
        />
      </Link>
      <Link href="/industries/automotive" className="bg-white  h-auto">
        <IndustriesOfferCard
          icon={<Automotive />}
          title="Automotive"
          url="automotive"
          description="Automotive refers to vehicles, technology, manufacturing, and innovation in transportation."
        />
      </Link>
    </div>
  );
};

export default IndustriesOffer;
