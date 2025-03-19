import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_80edhgn", // Service ID
  //         "template_lwi4k78", // Template ID
  //         e.target, // The form element
  //         "ucWwMuILv-Rut1kXw" // Public API Key
  //       )
  //       .then(
  //         (result) => {
  //           console.log("SUCCESS!", result.text);
  //           alert("Message sent successfully!");
  //         },
  //         (error) => {
  //           console.log("FAILED", error.text);
  //           alert("Failed to send the message properly");
  //         }
  //       );
  //     e.target.reset();
  //   };

  return (
    <section
      id="contact"
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/Pics/saw_contactpage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contact Form */}
      <div className="container bg-white-400 bg-opacity-25 p-10 rounded-lg shadow-lg z-10">
        <h1 className="text-5xl font-extrabold text-orange-500 tracking-wide text-center drop-shadow-[2px_1px_0_black] mb-5">
          Contact Me
        </h1>
        {/*  make sure to add this to the form before the className! onSubmit={handleSubmit} */}
        <form className="space-y-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Your Email
            </label>
            <input
              type="email"
              name="reply_to"
              className="p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject Input */}
          <div className="flex flex-col">
            <label className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Enter subject"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col">
            <label className="font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">Message</label>
            <textarea
              name="message"
              rows="5"
              className="p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-red-600 transition font-bold text-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
