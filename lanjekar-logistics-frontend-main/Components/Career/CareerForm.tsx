import React from "react";
import { z } from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address").optional(),
  phone: z
    .string()
    .min(10, "Phone Number is required")
    .regex(/^[0-9]+$/, "Phone Number must contain digits only"),
  message: z.string().optional(),
  resume: z
    .any()
    .refine((file: FileList) => file?.length > 0, "Please upload your resume")
    .refine(
      (file: FileList) => file?.[0]?.size < 13 * 1024 * 1024, // 5MB limit
      "File size must be less than 5MB"
    ),
});

type FormInputs = z.infer<typeof schema>;

const CareerForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const url = usePathname();

  const {
    register,
    handleSubmit,
    reset,
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
      const formData = new FormData();
      formData.append("fullName", submitData.fullName);
      formData.append("email", submitData.email || "");
      formData.append("phone", submitData.phone);
      formData.append("message", submitData.message || "");
      if (submitData.resume) {
        formData.append("resume", submitData.resume[0]);
      }
      formData.append("token", token);
      formData.append("url", url || "");

  
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/career-form`,
        formData
        
      );
      console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
      reset();
      router.push("/application-successfull");
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label>Full Name</label>
        <input
          {...register("fullName")}
          type="text"
          className="w-full mt-2 p-3 border rounded-lg"
          placeholder="Your Name"
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label>Phone</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full mt-2 p-3 border rounded-lg"
          placeholder="Your Phone"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="mb-4">
        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full mt-2 p-3 border rounded-lg"
          placeholder="Your Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label>Upload Resume</label>
        <input
          {...register("resume")}
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full mt-2 p-3 border rounded-lg"
        />
        {errors.resume?.message &&
          typeof errors.resume.message === "string" && (
            <p className="text-red-500">{errors.resume.message}</p>
          )}
      </div>

      <div className="mb-4">
        <label>Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full mt-2 p-3 border rounded-lg"
          placeholder="Your Message (Optional)"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 border-2 border-red-500 bg-red-500 hover:bg-white text-white hover:border-red-500 hover:text-red-500 transition-all duration-500"
      >
        Submit
      </button>
    </form>
  );
};

export default CareerForm;
