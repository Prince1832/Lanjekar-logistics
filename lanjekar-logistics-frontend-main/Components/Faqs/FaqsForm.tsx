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
    .min(10, "Phone number is required")
    .regex(/^[0-9]+$/, "Phone number must be digits only"),
  requirements: z.string().optional(),
});

type FormInputs = z.infer<typeof schema>;

const FaqsForm = () => {
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
    <div className="flex justify-center items-center md:min-h-[80vh] min-h-[20vh] lg:bg-secondary xl:p-20 lg:p-10">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Ask a Question</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
     
          <div>
            <label
              htmlFor="fullName"
              className="sm:block text-gray-600 font-medium mb-1 hidden"
            >
              Full Name<span className="text-red-700 text-lg">*</span>
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

        
          <div>
            <label
              htmlFor="email"
              className="sm:block text-gray-600 font-medium mb-1 hidden"
            >
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

          <div>
          <label
              htmlFor="email"
              className="sm:block text-gray-600 font-medium mb-1 hidden"
            >
             Phone<span className="text-red-700 text-lg">*</span>
            </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Phone"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

         
          <div>
            <label
              htmlFor="requirements"
              className="sm:block text-gray-600 font-medium mb-1 hidden"
            >
              Write your Question
            </label>
            <textarea
              {...register("requirements")}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Question"
              rows={4}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full border-2 border-red-500 bg-red-500 text-white p-2 hover:bg-white hover:text-red-500 transition-all duration-500"
            >
              Submit
            </button>
            <p ref={errorMessage} className="text-red-500 mt-3"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqsForm;
