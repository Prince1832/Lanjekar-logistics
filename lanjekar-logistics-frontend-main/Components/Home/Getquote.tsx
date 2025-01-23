"use client";
import React, { useRef } from "react";
import { z } from "zod";
import { usePathname, useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address").optional(),
  phone: z
    .string()
    .min(10, "Number is required")
    .regex(/^[0-9]+$/, "Number must be digits only"),
  requirements: z.string().nullish(),
});

type FormInputs = z.infer<typeof schema>;

const GetQuote = ({ onClose }: any) => {
  const router = useRouter();
  const url = usePathname();
  const errorMessage = useRef<HTMLParagraphElement | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (submitData) => {
    if (!executeRecaptcha) {
      alert("ReCAPTCHA not loaded");
      return;
    }

    try {
      const token = await executeRecaptcha();
      const response = await axios.post(
        `${NEXT_PUBLIC_API_URL}/contact-us`,
        {
          ...submitData,
          token,
          url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      reset();
      router.push("/thank-you");
    } catch (error: any) {
      console.error(
        "There was an error submitting the form:",
        error.response?.data || error.message
      );

      if (errorMessage.current) {
        errorMessage.current.textContent =
          error.response?.data?.message ||
          "Something went wrong. Please try again.";
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg flex w-11/12 md:w-2/3 max-w-4xl overflow-hidden relative">
     {/* <div className="bg-white rounded-[50%]"> */}
     <button
          className="absolute top-1 right-3 text-3xl font-bold md:text-white text-black hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
     {/* </div> */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Name<span className="text-red-700 text-lg">*</span>
              </label>
              <input
                {...register("fullName")}
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-700 text-lg">*</span>
              </label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-700 text-lg">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4 mt-1">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg "
            >
              Submit
            </button>
            <p ref={errorMessage} className="text-red-500 mt-3"></p>
          </form>
        </div>
        <div className="hidden lg:block w-1/2 bg-cover bg-center bg-getquote"></div>
      </div>
    </div>
  );
};

export default GetQuote;
