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
import emailjs from "@emailjs/browser";
import { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
      );
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
      console.log(result.text);

      console.log("Email sent successfully:", result.text);

      toast.success("Email Sent Successfully", {
        position: "top-center",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
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
      id="contact"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <fieldset className="border border-gray-300 rounded-lg p-4 mb-12   shadow-lg">
        <legend className="text-3xl font-bold text-center mb-4  px-1">
          <h2 className="text-4xl font-bold tracking-tight mb-3 text-foreground">
            Contact Me
          </h2>
        </legend>

        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="mx-auto h-1 w-16 rounded-full bg-teal-500 mb-5" />
            <p className="text-sm text-muted-foreground italic max-w-xl mx-auto leading-relaxed">
              Connect with me if you want to know more about me or my work, or
              if you would just like to say hello. I&apos;d love to hear from
              you.
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-2xl border border-border   shadow-xl overflow-hidden ">
            <div className="flex flex-col md:flex-row ">
              {/* ── Left Panel: Get in Touch ── */}
              
                <div className="md:w-1/3 bg-muted/40 dark:bg-muted/20 px-8 py-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-border">
                <h3 className="text-2xl font-semibold mb-8 text-foreground">
                  Get in Touch
                </h3>

                <ul className="space-y-5  ">
                  {/* Location */}
                  <li className="flex items-start gap-3 text-sm ">
                    <FaMapMarkerAlt
                      size={18}
                      className="mt-0.5 shrink-0 text-red-500"
                    />
                    <span>Chhindwara (M.P) INDIA</span>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-3 text-sm">
                    <FaPhone
                      size={17}
                      className="mt-0.5 shrink-0 text-teal-500"
                    />

                    <a href="tel:+917000240904" className="hover:underline">
                      +91 7000240904
                    </a>
                  </li>

                  {/* WhatsApp */}
                  <li className="flex items-start gap-3 text-sm">
                    <FaWhatsapp
                      size={18}
                      className="mt-0.5 shrink-0 text-green-500"
                    />

                    <a
                      href="https://wa.me/917000240904?text=Hi%20Ashvary,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-3 text-sm">
                    <FaEnvelope
                      size={17}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />

                    <a
                      href={`mailto:ashvarygidian1996@gmail.com?subject=${encodeURIComponent(
                        "Connect & Discussion | Portfolio Enquiry",
                      )}&body=${encodeURIComponent(
                        "Hi Ashvary,\n\nI’m reaching out to connect with you.\n\n[Please replace this line with your query or the reason for contacting.]\n\nBest regards,",
                      )}`}
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      ashvarygidian1996@gmail.com
                    </a>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-10">
                  {/* GitHub */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant={"link"}>
                        <a
                          href="https://github.com/Ashvary1996"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-600 hover:text-black  transition duration-300 hover:scale-150"
                        >
                          <FaGithub size={30} />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>

                  {/* LinkedIn */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant={"link"}>
                        <a
                          href="https://www.linkedin.com/in/ashvary-gidian/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-600 hover:text-blue-500 transition duration-300 hover:scale-150 "
                        >
                          <FaLinkedin size={30}   />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>

                  {/* Gmail */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        variant={"link"}
                        className="p-0 h-auto no-underline hover:no-underline"
                      >
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=ashvarygidian1996@gmail.com&su=Connect%20%26%20Discussion%20%7C%20Portfolio%20Enquiry&body=Hi%20Ashvary,%20I%E2%80%99m%20reaching%20out%20to%20connect%20with%20you.%20%5BPlease%20replace%20this%20line%20with%20your%20query%20or%20the%20reason%20for%20contacting.%5D%20Best%20regards,"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition duration-300 hover:scale-150"
                        >
                          <FaEnvelope />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Gmail</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* ── Right Panel: Contact Form wrapped in MagicCard ── */}
              <div className="md:w-2/3 p-8 md:p-12">
                <MagicCard
                  className="rounded-xl p-6 md:p-8"
                  gradientColor="rgba(20,184,166,0.12)" /* teal-500 at low opacity */
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="
                        w-full px-4 py-2.5 text-sm rounded-lg
                        border border-input
                        bg-background text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                        transition-all duration-200
                      "
                      />
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
                        className="
                        w-full px-4 py-2.5 text-sm rounded-lg
                        border border-input
                        bg-background text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                        transition-all duration-200
                      "
                      />
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
                        className="
                        w-full px-4 py-2.5 text-sm rounded-lg
                        border border-input
                        bg-background text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                        transition-all duration-200
                      "
                      />
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
                        className="
                        w-full px-4 py-2.5 text-sm rounded-lg
                        border border-input
                        bg-background text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
                        resize-none transition-all duration-200
                      "
                      />
                    </Field>

                    {/* Submit */}
                    <div className="pt-1 flex justify-center">
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className={` cursor-pointer
    min-w-[150px] transition-all duration-300 text-white
    ${status === "idle" && "bg-teal-600 hover:bg-teal-700"}
    ${status === "loading" && "bg-gray-500 cursor-not-allowed"}
    ${status === "success" && "bg-green-600"}
    ${status === "error" && "bg-red-600"}
  `}
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
      </fieldset>
    </section>
  );
}

export default Contact;
