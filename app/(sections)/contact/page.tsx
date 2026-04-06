"use client";
import { MagicCard } from "@/components/ui/magic-card";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "sonner";

import { useState, ChangeEvent, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof contactSchema>;

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validatedData = contactSchema.safeParse(formData);
    if (!validatedData.success) {
      const fieldErrors: any = {};
      validatedData.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields and try again.");
      return;
    }
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      // console.log(result);
      if (!result.success) {
        throw new Error(result.error);
      }

      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);

      console.log("Form submitted ✅");
      console.log(result.message);

      toast.success(`Email Sent Successfully to ${formData.email}`, {
        position: "top-center",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error: any) {
      console.log("Failed to send email:", error?.text);

      toast.error("Failed to send email. Please try again.", {
        position: "top-center",
      });
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      throw error;
    }
  };

  return (
    <section
      // className="mt-10 min-h-screen px-4 sm:px-6 lg:px-8 text-foreground scroll-mt-18"
      id="contact"
      className="text-foreground scroll-mt-22"
      // data-aos="zoom-in"
      // data-aos-delay="200"
    >
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6 
  bg-linear-to-r from-green-600 via-emerald-500  to-teal-400 bg-clip-text text-transparent
          "
        >
          Contact Me
        </h2>

        {/* <legend className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Contact Me
          </h2>
        </legend> */}

        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-6">
            <div className="mx-auto h-1 w-16 rounded-full bg-teal-500 mb-4" />
            <p className="text-sm sm:text-base text-muted-foreground italic max-w-xl mx-auto leading-relaxed">
              Connect with me if you want to know more about me or my work, or
              if you would just like to say hello. I&apos;d love to hear from
              you.
            </p>
          </div>

          {/* Main Card */}
          {/* <div className="rounded-2xl shadow-xl overflow-hidden"> */}
          <div className="rounded-2xl shadow-xl overflow-hidden bg-background">
            <div className="flex flex-col lg:flex-row">
              {/* Left Panel */}
              {/* <div className="w-full lg:w-1/3 bg-muted/40 dark:bg-muted/20 px-6 sm:px-8 py-8 sm:py-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-border"> */}
              <div className="w-full lg:w-1/3 bg-muted/40 dark:bg-muted/20 px-6 sm:px-8 py-8 sm:py-12 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-border">
                <h3 className="text-2xl font-semibold mb-6 sm:mb-8 text-foreground">
                  Get in Touch
                </h3>

                <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt
                      className="mt-1 shrink-0 text-red-500"
                      size={18}
                    />
                    <span>Chhindwara (M.P) INDIA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaPhone
                      className="mt-1 shrink-0 text-teal-500"
                      size={17}
                    />
                    <a href="tel:+917000240904" className="hover:underline">
                      +91 7000240904
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaWhatsapp
                      className="mt-1 shrink-0 text-green-500"
                      size={18}
                    />
                    <a
                      href="https://wa.me/917000240904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaEnvelope
                      className="mt-1 shrink-0 text-orange-400"
                      size={17}
                    />
                    <a
                      href="mailto:ashvary11@gmail.com"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      ashvary11@gmail.com
                    </a>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex flex-wrap justify-center items-center gap-3 mt-6 sm:mt-10">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://github.com/Ashvary1996"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-black transition duration-300 hover:scale-125 dark:hover:text-gray-500"
                      >
                        <FaGithub size={28} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.linkedin.com/in/ashvary-gidian/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:scale-125 transition duration-300"
                      >
                        <FaLinkedin size={28} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="mailto:ashvary11@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition duration-300 hover:scale-125"
                      >
                        <FaEnvelope size={28} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Gmail</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Right Panel: Contact Form */}
              {/* <div className="w-full lg:w-2/3 px-4 sm:px-6 md:px-8 py-6 sm:py-12 flex justify-center"> */}
              <div className="w-full lg:w-2/3  sm:px-8 py-8 sm:py-12 flex justify-center">
                <MagicCard
                  className="w-full max-w-lg rounded-xl p-6 sm:p-8"
                  gradientColor="rgba(20,184,166,0.12)"
                >
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="input-name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Your Full Name
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Let me know who's talking..."
                        className="w-full px-4 py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="input-email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Your Contact Email
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Where can I reach you?"
                        className="w-full px-4 py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="input-subject"
                        className="block text-sm font-medium text-foreground"
                      >
                        Subject{" "}
                        <span className="text-muted-foreground font-normal">
                          (what&apos;s on your mind?)
                        </span>
                      </label>
                      <input
                        id="input-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="w-full px-4 py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <Field>
                      <FieldLabel
                        htmlFor="textarea-message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Your Message
                      </FieldLabel>
                      <Textarea
                        id="textarea-message"
                        placeholder="Share the details here..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all duration-200"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </Field>

                    {/* Submit */}
                    <div className="pt-2 flex justify-center">
                      <Button
                        type="submit"
                        className="min-w-[150px] text-white bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                      >
                        {status === "loading" && "Sending..."}
                        {status === "success" && "Sent ✓"}
                        {status === "error" && "Failed ✕"}
                        {status === "idle" && "Send Message"}
                      </Button>
                    </div>
                  </form>
                </MagicCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
