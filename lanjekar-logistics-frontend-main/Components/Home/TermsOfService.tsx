"use client";
import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TermsOfServiceBanner from "./TermsOfServiceBanner";
import Link from "next/link";

const TermsAndConditions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setIsOpen}
        normalimage="/Langekar-white-logo.webp"
        scrollimage="/Langekar-logo.webp"
      />

      <TermsOfServiceBanner />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
          <p>
            These Terms govern your use of <b>Lanjekar Logistics</b> website and
            services. By accessing or using our website and services, you agree
            to comply with these terms. If you do not agree with these Terms,
            you should refrain from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
          <p>
            <b>Lanjekar Logistics</b> provides logistics and transportation services,
            including shipment tracking, delivery management, and other
            transportation solutions for businesses and individuals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. User Responsibilities
          </h2>
          <p>
            You are responsible for providing accurate information and for
            ensuring that your use of our services complies with applicable laws
            and regulations. You are prohibited from using our services for any
            unlawful activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Intellectual Property
          </h2>
          <p>
            All content on <b>Lanjekar Logistics</b> website is owned by
            <b>Lanjekar Logistics</b> or its content providers and is protected by
            copyright laws. Unauthorized use of the content is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
          <p>
            Your use of our services is governed by our{" "}
            <Link
              href={"/privacy-policy"}
              className="group relative text-[#3289F3]"
            >
              Privacy Policy
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#3284e9] transform origin-bottom-right group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
            , which explains how we collect, use, and protect your personal
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment and Fees</h2>
          <p>
            All payments for services must be made in accordance with the
            pricing and payment terms provided at the time of service agreement.
             <b>Lanjekar Logistics</b> reserves the right to change its pricing at any
            time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Shipping and Delivery
          </h2>
          <p>
            Delivery times are estimates. <b>Lanjekar Logistics</b> is not liable for
            delays caused by factors beyond our control. We are not liable for
            damages during shipping unless caused by our negligence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            <b>Lanjekar Logistics</b> is not liable for any indirect, incidental, or
            consequential damages arising from your use of our services. Our
            liability is limited to the amount paid for the service that gave
            rise to the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            <b>Lanjekar Logistics</b> reserves the right to suspend or terminate your
            access to services if we believe you have violated these Terms or
            engaged in unlawful activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the country where <b>Lanjekar
            Logistics</b> operates. Any disputes will be resolved in the appropriate
            courts in that jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Force Majeure</h2>
          <p>
            <b>Lanjekar Logistics</b> is not liable for delays or failures caused by
            circumstances beyond our control, including natural disasters,
            strikes, or government actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Indemnity</h2>
          <p>
            You agree to indemnify <b>Lanjekar Logistics</b> from any claims, damages,
            or losses arising from your use of our services or violation of
            these Terms.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
