"use client";
import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PrivacyPolicybanner from "./Privacy-policybanner";

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar
        isOpenFuntion={isOpen}
        setOpenFuntion={setIsOpen}
        normalimage="/Langekar-white-logo.webp"
        scrollimage="/Langekar-logo.webp"
       
      />
      <PrivacyPolicybanner />

      <section>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-center mb-6 mt-4">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to <strong>Langekar Logistics</strong> ("we", "our", or
              "us"). We value your privacy and are committed to protecting your
              personal data. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              and use our logistics services. Please read this policy carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6">
              <li>
                Personal Identification Information: Name, email address, phone
                number, etc.
              </li>
              <li>
                Business Information: Company name, address, billing details,
                etc.
              </li>
              <li>
                Log Data: Your IP address, browser type, device information,
                etc.
              </li>
              <li>
                Cookies: We use cookies to enhance user experience and track
                website usage.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>
                To provide logistics services, such as tracking shipments and
                managing deliveries.
              </li>
              <li>
                To communicate with you, including responding to inquiries and
                providing updates.
              </li>
              <li>
                To improve our website, services, and customer experience.
              </li>
              <li>To comply with legal obligations and resolve disputes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              How We Share Your Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              However, we may share your information in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6">
              <li>
                With service providers who assist us in delivering logistics
                services.
              </li>
              <li>
                If required by law, such as in response to a legal request or to
                protect our rights.
              </li>
              <li>
                In case of a merger, acquisition, or sale of company assets,
                your information may be transferred.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, and destruction.
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure, and we cannot guarantee the
              absolute security of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Your Data Protection Rights
            </h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc pl-6">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to correct any inaccurate or incomplete data.</li>
              <li>
                The right to request the deletion of your data, subject to
                certain conditions.
              </li>
              <li>
                The right to object to or restrict the processing of your data.
              </li>
              <li>
                The right to withdraw consent at any time where we rely on
                consent to process your data.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p>
              We use cookies to improve your experience on our website. A cookie
              is a small text file stored on your device. You can control the
              use of cookies through your browser settings. However, if you
              disable cookies, some features of our website may not function
              properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the "Last updated" date will be
              revised accordingly. We encourage you to review this policy
              periodically for any updates.
            </p>
          </section>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

