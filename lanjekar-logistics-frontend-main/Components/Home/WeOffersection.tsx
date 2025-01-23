import React, { useEffect, useState, useRef } from "react";
import SectionHeading from "./sectionHeading";
import Image from "next/image";
import Link from "next/link";

function WeOffersection() {
  const [peopleCount, setPeopleCount] = useState(0);
  const [officesCount, setOfficesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateCount = (
      start: number,
      end: number,
      setter: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; },
      duration: number
    ) => {
      const increment = (end - start) / (duration / 10);
      let current = start;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(interval);
          setter(end);
        } else {
          setter(Math.floor(current));
        }
      }, 10);
    };

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCount(0, 100, setPeopleCount, 1000);
        animateCount(0, 6, setOfficesCount, 1000);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, 
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative h-auto bg-white pb-10 sm:pb-40 py-10 sm:py-20 flex flex-col sm:gap-10"
    >
      <SectionHeading
        smalltitle="Our Offerings"
        title="Full spectrum of transportation services"
      />

      <section className="w-full lanjekar-container relative grid lg:grid-cols-[1.5fr_1fr] gap-10 sm:gap-20">
        <div className="w-full h-full relative">
          <Image
            src={"/What-we-do.jpg"}
            alt="WE OFFER you - image"
            height={400}
            width={400}
            className="w-full h-[60vh] lg:h-[55vh] object-cover"
          />

          <div className="p-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 lg:w-[600px] lg:absolute bottom-0 lg:-bottom-20 lg:-right-80 bg-primary">
            <span className="flex items-start flex-col">
              <p className="text-p18 font-semibold text-white">People</p>
              <h2 className="text-h2 font-semibold text-white">
                {peopleCount}+
              </h2>
              <p className="text-p18 font-normal text-white">
                Workplaces in our company.
              </p>
            </span>
            <span className="flex items-start flex-col">
              <p className="text-p18 font-semibold text-white">World Offices</p>
              <h2 className="text-h2 font-semibold text-white">
                {officesCount}+
              </h2>
              <p className="text-p18 font-normal text-white">
                Work all over the world.
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-5 items-start justify-start">
          <p className="text-p18 font-normal text-black line-clamp-3">
            We offer a comprehensive range of transportation services to support
            your business needs, whether local or international. Our expertise
            spans across road, rail, air, and sea freight, ensuring flexibility
            and efficiency in every shipment. With a focus on reliability, we
            provide timely delivery solutions that are fully aligned with your
            business objectives.
          </p>
          <p className="text-p18 font-normal text-black line-clamp-3">
            Our services are designed to streamline your supply chain and
            minimize transportation costs. From managing complex logistics to
            providing customized solutions, we handle every aspect of the
            transportation process, ensuring smooth, secure, and cost-effective
            deliveries.
          </p>

          <Link href={"/"} className="group relative text-[#3284e9] text-p18">
            Read More
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#3284e9] transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default WeOffersection;



