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
  residence: z.string().min(1, "Residence option is required"),
  requirements: z.string().nullish(),
});

type FormInputs = z.infer<typeof schema>;

const Mapwithform = () => {
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
      // const formData = new FormData();
      // formData.append("fullName", submitData.fullName);
      // formData.append("email", submitData.email || "");
      // formData.append("phone", submitData.phone);
      // formData.append("residence", submitData.residence);
      // formData.append("token", token);
      // formData.append("url", url);

      const response = await axios.post(`${NEXT_PUBLIC_API_URL}/contact-us`, {
        ...submitData,
        token,
        url,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      reset();
      router.push("/thank-you");
    } catch (error: any) {
      console.error(
        "There was an error submitting the form:",
        error.response?.data
      );
    }
  };

  return (
    <section className="w-full relative h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d396.15370406297865!2d73.0321504095732!3d19.157148246613072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732977982511!5m2!1sen!2sin"
        width="100%"
        height="700"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute top-0 h-full w-full pointer-events-none">
        <div className="w-full h-full py-10 relative lanjekar-container flex items-center justify-end">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[600px] h-auto p-10 flex flex-col gap-2 bg-white pointer-events-auto"
          >
            <p className="text-p18 font-semibold text-black">CONTACT US</p>
            <h2 className="text-[2em] font-semibold leading-[1.1] text-black ">
              Have Questions? Get in touch!
            </h2>
            <div className="grid md:grid-cols-2 gap-y-5 gap-x-10 mt-3">
              <div>
                <input
                  {...register("fullName")}
                  type="text"
                  className="w-full outline-none relative py-2 border-b border-black text-black placeholder:text-black"
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
                  className="w-full outline-none relative py-2 border-b border-black text-black placeholder:text-black"
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
                  className="w-full outline-none relative py-2 border-b border-black text-black placeholder:text-black"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register("residence")}
                  className="w-full outline-none relative py-2 border-b border-black text-black placeholder:text-black"
                >

                  <option selected disabled>
                    Select Residence
                  </option>
                  <option value="supply-chain-planning">
                    Supply Chain Planning
                  </option>
                  <option value="cargo-transportation">
                    Cargo Transportation
                  </option>
                  <option value="warehousing-storage">
                    Warehousing & Storage
                  </option>
                  <option value="retail-transit-packaging">
                    Retail & Transit Packaging
                  </option>
                </select>
                {errors.residence && (
                  <p className="text-red-500">{errors.residence.message}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="text-[16px] font-semibold text-white mt-10 border-2 border-red-600 bg-primary transition-all duration-500 hover:bg-white hover:text-primary hover:border-2 hover:border-red-600 w-fit h-auto px-5 py-3"
            >
              GET IN TOUCH
            </button>

            <p ref={errorMessage} className="text-red-500 mt-3"></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Mapwithform;
