 "use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      await emailjs.sendForm(
        "service_fkht90f",
        "template_wpu5xmj",
        form.current,
        "KrVtehMRZrvBYeAhv"
      );
      setResponseMessage("Message sent successfully!");
      form.current?.reset();
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Send <span className="text-blue-600">Email</span>
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          We’d love to hear from you!
        </p>

        <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Full Name"
                required
                className="w-full p-3 bg-white/80 text-gray-800 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-white/80 text-gray-800 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 bg-white/80 text-gray-800 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold transition duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {responseMessage && (
            <p
              className={`mt-4 text-center font-medium ${
                responseMessage.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
