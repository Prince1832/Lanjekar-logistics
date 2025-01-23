import React, { useEffect, useState } from "react";
import OurTeamCard from "./OurTeamCard";
import SectionHeading from "../sectionHeading";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";

interface Team {
  _id: string;
  position: string;
  image: string;
  name: string;
  details: string;
  bio: string;
}

function OurTeam() {
  const [teamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${NEXT_PUBLIC_API_URL}/team`);
        if (response.data && Array.isArray(response.data.team)) {
          setTeamData(response.data.team);
          console.log(response.data.team);
        } else {
          console.error("Unexpected response format. Expected a 'team' array.");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="w-full relative h-auto flex flex-col py-20 gap-3 md:gap-10 lanjekar-container">
      {teamData.length > 0 ? (
        <>
          <SectionHeading
            title="Meet Our Team"
            smalltitle="logistics"
            titledescription="United in excellence, driven by passion—Lanjekar Logistics Team ensures your journey is smooth and reliable. Together, we deliver beyond expectations!"
          />
          <div className="w-full relative h-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {teamData.map((member) => (
              <OurTeamCard
                key={member._id}
                image={member.image}
                name={member.name}
                detail={member.position}
                bio={member.bio}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-10vh flex justify-center items-center">
          <p className="text-center text-xl text-gray-600">No content found</p>
        </div>
      )}
    </section>
  );
}

export default OurTeam;
