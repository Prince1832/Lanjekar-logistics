"use client";
import React, { useEffect, useState } from "react";

import TechnologiesPageCard from "./TechnologiesPageCard";
import axios from "axios";

const TechnologiesCards = () => {
  const [technologies, setTechnologies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/technologies`
        );

        if (response.data) {
          setTechnologies(response.data);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center py-10 w-full lanjekar-container text-lg">Loading...</div>;
  }

  return (
    <>
      <section className="py-10">
        <div className="lanjekar-container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.length > 0 ? (
              technologies.map((technology, index) => (
                <TechnologiesPageCard
                  key={index}
                  image={technology.image}
                  name={technology.name}
                  description={technology.description}
                  slug={technology.slug}
                />
              ))
            ) : (
              <p className="flex justify-center w-full lanjekar-container text-xl">
                No technologies available.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesCards;


