import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (email) {
      setSuccessMessage(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <ul className="flex flex-col gap-4 w-full">
        <li className="text-h5 font-semibold w-full text-white">Contact Us</li>

        <li>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pt-2 pb-3 pl-2 border-b border-white bg-transparent w-[200px] placeholder:text-white text-white outline-none"
            placeholder="example@email.com"
            required
          />
        </li>

        <li className="text-p18 font-semibold w-fit text-white">
          +91  79779 07989
        </li>

        {/* <li>
          <button
            type="submit"
            className="text-p18 font-semibold w-fit text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Subscribe
          </button>
        </li> */}
      </ul>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
    </form>
  );
};

export default SubscriptionForm;
