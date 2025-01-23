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

const Form = () => {
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
    <section className="flex flex-col gap-6 w-full p-4 md:p-8 lg:p-10">
      <form action={"/"} className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="group relative">
            <input
              {...register("fullName")}
              type="text"
              className="w-full outline-none relative py-2 px-1 border-b border-gray-300 text-black placeholder:text-slate-400"
              placeholder="Full Name"
            />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div className="group relative">
            <input
              {...register("email")}
              type="email"
              className="w-full outline-none relative py-2 px-1 border-b border-gray-300 text-black placeholder:text-slate-400"
              placeholder="Email"
            />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="group relative">
            <input
              {...register("phone")}
              type="tel"
              className="w-full outline-none relative py-2 px-1 border-b border-gray-300 text-black placeholder:text-slate-400"
              placeholder="Phone"
            />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="group relative">
            <input
              type="text"
              name="subject"
              className="w-full outline-none relative py-2 px-1 border-b border-gray-300 text-black placeholder:text-slate-400"
              placeholder="Subject"
            />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
          </div>
        </div>
        <div className="group relative mt-12">
          <input
            name="textarea"
            className="w-full outline-none relative pt-3 px-1 border-b border-gray-300 text-black placeholder:text-slate-400 col-span-1 md:col-span-2 pb-10"
            placeholder="How can I help you?"
          />
          <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
        </div>
        <button
          type="submit"
          className="mt-12 w-full md:w-fit px-6 py-3 bg-primary text-white font-semibold  transition duration-300 hover:bg-white hover:text-primary hover:ring-2 hover:ring-primary"
        >
          GET IN TOUCH
        </button>
      </form>
    </section>
  );
};

export default Form;
