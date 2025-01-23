import React from "react";

function Mapsection() {
  return (
    <section className="w-full relative h-auto ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d396.15370406297865!2d73.0321504095732!3d19.157148246613072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732977982511!5m2!1sen!2sin"
        width="100%"
        height="600"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Mapsection;
