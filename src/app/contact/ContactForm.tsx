"use client";

import emailjs from "emailjs-com";
import { useState } from "react";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        setStatusMessage("Message sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setStatusMessage("Failed to send message. Please try again.");
        setIsLoading(false);
      });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col gap-6 font-Mont w-full lg:md:w-[80%]"
    >
      {statusMessage && <p>{statusMessage}</p>}
      <div className="flex lg:flex-col items-center gap-10 md:gap-6 transition-all duration-700">
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          className="bg-transparent z-50 text-white/70 border border-white/30 placeholder:text-white/70 rounded-lg py-2 px-3 outline-none w-full"
        />

        <input
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className="bg-transparent text-white/70 border border-white/30 placeholder:text-white/70 rounded-lg py-2 px-3 outline-none w-full"
        />
      </div>
      <input
        required
        name="subject"
        type="text"
        value={formData.subject}
        placeholder="Subject"
        onChange={handleChange}
        className="bg-transparent text-white/70 border border-white/30 placeholder:text-white/70 rounded-lg py-2 px-3 outline-none w-full"
      />
      <div>
        <textarea
          required
          name="message"
          value={formData.message}
          placeholder="Message"
          rows={3}
          onChange={handleChange}
          className="bg-transparent text-white/70 border border-white/30 placeholder:text-white/70 rounded-lg py-2 px-3 outline-none w-full"
        />
      </div>

      <button
        type="submit"
        className="  bg-none border-liteport hover:text-white/70 hover:border-transparent text-liteport
           bg-portblack py-3 font-normal text-black/90 
      hover:bg-darkport  text-center rounded-md w-36 p-1 px-2 transition-all duration-500"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

/* {
  error && <p style={{ color: "red" }}>{error}</p>;
}
{
  success && <p style={{ color: "green" }}>Message sent successfully!</p>;
} */
