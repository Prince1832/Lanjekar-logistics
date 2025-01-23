import Link from "next/link";
import React from "react";

const ApplicationSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">Application Submitted!</h1>
        <p className="mt-4 text-gray-700">
          Thank you for applying. Your application has been successfully submitted. 
          We will review your profile and contact you if you&apos;re shortlisted.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 border-2 border-red-500 bg-red-500 text-white font-medium hover:bg-white hover:text-red-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
