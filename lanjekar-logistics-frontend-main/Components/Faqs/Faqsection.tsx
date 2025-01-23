/*
import React from "react";
import PageHeading from "../Home/pageHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import FaqsForm from "./FaqsForm";

function Faqsection() {
  return (
    <>
      <PageHeading heading="FAQS" />
      <section className="w-full relative lanjekar-container justify-center mx-auto md:pb-20 pb-10 grid lg:grid-cols-2">
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full relative h-auto gap-x-72 justify-center"
          >
            <AccordionItem value="item-1" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px] font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                What services does Lanjekar Logistics provide?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5 transition-[max-height] duration-500 ease-in-out">
                We provide transportation, warehousing, freight forwarding, and
                supply chain management services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                How can I track my shipment?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                You can track your shipment using our online tracking tool or by
                contacting our customer service team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px] font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                What areas do you cover?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                We cover domestic and international logistics, ensuring smooth
                operations globally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                Do you provide customized logistics solutions?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                Yes, we tailor our logistics services to meet your specific
                business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                What are your operational hours?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                Our services operate 24/7 to ensure uninterrupted logistics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                How do I get a quote for your services?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                You can request a quote by filling out the form on our website
                or contacting us directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl ">
                Are your services insured?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                Yes, we provide insurance coverage for goods during
                transportation and storage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                What is the maximum weight you can transport?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                Our capacity depends on the vehicle and transportation method;
                contact us for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px] font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                How do you ensure the safety of goods?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                We follow strict safety protocols and use advanced technologies
                to safeguard goods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="overflow-hidden">
              <AccordionTrigger className="text-h3 md:text-[20px]  font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl">
                What is your customer service contact number?
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal py-5 px-5">
                You can reach us at +91 79779 07989 or email us at
                support@lanjekarlogistics.com.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <FaqsForm />
        </div>
      </section>
    </>
  );
}

export default Faqsection;
*/

/*
import React from "react";
import PageHeading from "../Home/pageHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import FaqsForm from "./FaqsForm";

const faqData = [
  {
    question: "What services does Lanjekar Logistics provide?",
    answer:
      "We provide transportation, warehousing, freight forwarding, and supply chain management services.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using our online tracking tool or by contacting our customer service team.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover domestic and international logistics, ensuring smooth operations globally.",
  },
  {
    question: "Do you provide customized logistics solutions?",
    answer:
      "Yes, we tailor our logistics services to meet your specific business needs.",
  },
  {
    question: "What are your operational hours?",
    answer: "Our services operate 24/7 to ensure uninterrupted logistics.",
  },
  {
    question: "How do I get a quote for your services?",
    answer:
      "You can request a quote by filling out the form on our website or contacting us directly.",
  },
  {
    question: "Are your services insured?",
    answer:
      "Yes, we provide insurance coverage for goods during transportation and storage.",
  },
  {
    question: "What is the maximum weight you can transport?",
    answer:
      "Our capacity depends on the vehicle and transportation method; contact us for details.",
  },
  {
    question: "How do you ensure the safety of goods?",
    answer:
      "We follow strict safety protocols and use advanced technologies to safeguard goods.",
  },
  {
    question: "What is your customer service contact number?",
    answer:
      "You can reach us at +91 79779 07989 or email us at support@lanjekarlogistics.com.",
  },
];

function Faqsection() {
  return (
    <>
      <PageHeading heading="FAQS" />
      <section className="w-full relative lanjekar-container justify-center mx-auto md:pb-20 pb-10 grid lg:grid-cols-2">
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full relative h-auto gap-x-72 justify-center"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              >
                <AccordionTrigger className="text-h3 md:text-[20px] font-medium py-5 px-5 hover:bg-slate-100 hover:rounded-2xl focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[17px] font-normal py-5 px-5 ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <FaqsForm />
        </div>
      </section>
    </>
  );
}

export default Faqsection;

*/

// "use client";
// import React, { useEffect, useState } from "react";
// import PageHeading from "../Home/pageHeading"; // Ensure this import path is correct
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@radix-ui/react-accordion";
// import FaqsForm from "./FaqsForm";

// import { IoMdArrowDropdown } from "react-icons/io";
// import axios from "axios";

// // Define the interface for Accordion items
// interface AccordionItemData {
//   value: string;
//   title: string;
//   content: string;
// }

// const Faqsection: React.FC = () => {
//   // State for FAQ data
//   const [faqData, setFaqData] = useState<AccordionItemData[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [activeItemIndex, setActiveItemIndex] = useState<string>("");

// /*
//   useEffect(() => {
//     const fetchFaqs = async () => {
//       setIsLoading(true);
//       try {

//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);
//         console.log("API Response:", response.data);

//         if (response.data && Array.isArray(response.data)) {
//           setFaqData(response.data);
//         } else {
//           console.error("Unexpected response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching FAQ data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchFaqs();
//   }, []);*/

//   useEffect(() => {

//   const fetchFaqs = async () => {
//     setIsLoading(true);
//     try {
//       console.log("Fetching FAQs...");
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);
//       console.log("API Response:", response.data);

//       if (response.data.faqs && Array.isArray(response.data.faqs)) {
//         setFaqData(response.data.faqs);
//       } else {
//         console.error("Expected 'faqs' array, but received:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching FAQ data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchFaqs();
// }, []);

//   return (
//     <>

//       <PageHeading heading="FAQs" />

//       <section className="grid grid-cols-[1fr_1fr] lanjekar-container ">
//         <div className="">
//           {isLoading ? (
//             <p className="h-1/2 w-full flex justify-center items-center">Loading...</p>
//           ) : faqData.length > 0 ? (
//             <div className="">
//               {faqData.map((faq) => (
//                 <Accordion
//                   key={faq.value}
//                   type="single"
//                   collapsible
//                   value={activeItemIndex}
//                   onValueChange={(value) => setActiveItemIndex(value || "")}
//                 >
//                   <AccordionItem
//                     value={faq.value}
//                     className="rounded-lg border-0"
//                   >
//                     <AccordionTrigger
//                       className={`bg-secondary mt-2 text-fontPrimary text-md px-4 rounded-lg focus:no-underline ${
//                         activeItemIndex === faq.value
//                           ? "bg-primary text-black"
//                           : "text-[#434343]"
//                       }`}
//                     >
//                       {faq.title}
//                       <IoMdArrowDropdown
//                         className={`text-[22px] shrink-0 transition-transform duration-200 ${
//                           activeItemIndex === faq.value
//                             ? "text-black"
//                             : "text-fontPrimary"
//                         }`}
//                       />
//                     </AccordionTrigger>
//                     <AccordionContent className="text-[16px] bg-white rounded-b-xl text-fontPrimary pt-4 px-4">
//                       {faq.content}
//                     </AccordionContent>
//                   </AccordionItem>
//                 </Accordion>
//               ))}
//             </div>
//           ) : (
//             <p className="h-1/2 w-full flex justify-center items-center">No FAQs available</p>
//           )}
//         </div>

//         <div className="w-full relative justify-center mx-auto md:pb-20 pb-10">
//           <div>
//             <FaqsForm />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Faqsection;




"use client";
import React, { useEffect, useState } from "react";
import PageHeading from "../Home/pageHeading"; // Ensure this import path is correct
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import FaqsForm from "./FaqsForm";

import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";

interface AccordionItemData {
  category: any;
  _id: string;
  value: string;
  question: string;
  answer: string;
}

const Faqsection: React.FC = () => {
  const [faqData, setFaqData] = useState<AccordionItemData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeItemIndex, setActiveItemIndex] = useState<string>("");

  useEffect(() => {
    const fetchFaqs = async () => {
      setIsLoading(true);
      try {
        console.log("Fetching FAQs...");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/faqs`
        );
        console.log("API Response:", response.data);

        if (response.data.faqs && Array.isArray(response.data.faqs)) {
          setFaqData(response.data.faqs);
        } else {
          console.error("Expected 'faqs' array, but received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <>
      <PageHeading heading="FAQs" />

      <section className="grid md:grid-cols-[1fr_1fr] md:gap-14 gap-10 lanjekar-container md:mb-12 md:px-0 sm:px-28">
        <div className="faq-section">
          {isLoading ? (
            <p className="h-1/2 w-full flex justify-center items-center">
              Loading...
            </p>
          ) : faqData.length > 0 ? (
            <div className="flex flex-col md:gap-6 gap-4">
              {faqData.map((faq) => (
                <Accordion
                  key={faq._id}
                  type="single"
                  collapsible
                  value={activeItemIndex}
                  onValueChange={(value) => setActiveItemIndex(value || "")}
                >
                  <AccordionItem
                    value={faq._id}
                    className="rounded-lg border-0"
                  >
                    <AccordionTrigger
                      className={`bg-secondary text-fontPrimary w-full flex gap-2 items-center justify-between text-md px-4 focus:no-underline ${
                        activeItemIndex === faq._id
                          ? "bg-primary text-[#434343]"
                          : "text-black"
                      }`}
                    >
                      <div className="md:p-3 py-3 md:text-start font-semibold">{faq.question}</div>
                      <div>
                        <IoMdArrowDropdown
                          className={`text-[22px] shrink-0 transition-transform duration-300 ${
                            activeItemIndex === faq._id
                              ? "rotate-180 text-black"
                              : "text-fontPrimary"
                          }`}
                        />
                      </div>
                    </AccordionTrigger>

                    {/*                     
                    <AccordionContent
                      className={`text-[16px] bg-white rounded-b-xl text-fontPrimary pt-4 pl-7 transition-all duration-500 ease-in-out overflow-hidden${
                        activeItemIndex === faq._id
                          ? "max-h-[50px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {faq.answer} */}
                    {/* {faq.category && faq.category.name && (
                        <div className="mt-2 text-sm text-gray-500">
                          <strong>Category:</strong> {faq.category.name}
                        </div> */}
                    {/* )} */}
                    {/* </AccordionContent> */}

                    <AccordionContent
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeItemIndex === faq._id
                          ? "animate-accordion-down"
                          : "animate-accordion-up"
                      }`}
                    >
                      <div className="text-[16px] bg-white rounded-b-xl text-fontPrimary md:pt-4 pt-3 md:pl-7 pl-5">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          ) : (
            <p className="h-1/2 w-full flex justify-center items-center">
              No FAQs available
            </p>
          )}
        </div>

        <div className="w-full relative justify-center mx-auto md:pb-20 pb-10">
          <div>
            <FaqsForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqsection;
