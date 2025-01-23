import React, { useRef } from "react";
import { z } from "zod";
import { usePathname, useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

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

function Serviceformsection() {
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
    <div className="w-full h-auto flex flex-col gap-10 md:p-10 p-0 bg-secondary  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[600px] border-2 border-slate-200 rounded-md h-auto p-8 flex flex-col gap-2 bg-white"
      >
        <p className="text-[20px] font-semibold text-black">CONTACT US</p>
        <h2 className="text-[25px] font-semibold leading-[1.1] text-black">
          Have Questions? Get in touch!
        </h2>
        <div className="flex flex-col gap-y-5 gap-x-10 mt-6">
          <div>
            <input
              {...register("fullName")}
              type="text"
              className="w-full outline-none relative py-2 px-1 border-b border-black text-black placeholder:text-black"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              className="w-full outline-none relative py-2 px-1 border-b border-black text-black placeholder:text-black"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone")}
              type="tel"
              className="w-full outline-none relative py-2 px-1 border-b border-black text-black placeholder:text-black"
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <textarea
            {...register("requirements")}
            className="w-full outline-none relative py-2 px-1 border-b border-black text-black placeholder:text-black"
            placeholder="Enter your requirements (optional)"
          ></textarea>
        </div>

        <button
          type="submit"
          className="outline-none text-[14px] font-semibold text-white mt-10 border-2 border-red-600 bg-primary transition-all duration-500 hover:bg-white hover:text-primary hover:border-2 hover:border-red-600 w-fit h-auto px-4 py-2"
        >
          GET IN TOUCH
        </button>

        <p ref={errorMessage} className="text-red-500 mt-3"></p>
        <div className="w-full h-auto flex flex-col gap-2">
          <ul className="flex flex-col gap-5 px-4">
            <li className="flex md:items-center gap-3 text-[16px] font-normal ">
              <FaLocationDot className="sm:text-[25px] text-[46px]" />
              601-B, Virani Business Center, Opp Bharat Gears Limited, Kausa Mumbra, Thane 400612.
            </li>
            <Link
              href={"mailto:info@email.com"}
              className="flex items-center gap-3 text-[16px] font-normal "
            >
              <MdEmail className="text-[20px] " />
              info@email.com
            </Link>
            <Link
              href={"tel:+1 840 841 25 69"}
              className="flex items-center gap-3 text-[16px] font-normal "
            >
              <IoIosCall className="text-[25px] " />
              +91 79779 07989
            </Link>
          </ul>
        </div>
      </form>



    </div>
  );
}

export default Serviceformsection;
