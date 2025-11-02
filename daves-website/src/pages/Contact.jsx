import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_80edhgn",
        "template_uldnzno",
        e.target,
        "sNYkJMHdm8BdM185_"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED", error.text);
          alert("Failed to send the message properly");
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen pt-28 md:pt-28 sm:pt-32 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/Pics/NewContactPageBackground.jpg')",
      }}
    >
      <div className="container bg-white-400 bg-opacity-25 p-6 md:p-10 rounded-lg shadow-lg z-10 w-[90%] md:w-[70%] lg:w-[50%]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 tracking-wide text-center drop-shadow-[2px_3px_0_black] mb-5">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-2xl md:text-3xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              className="text-xl md:text-2xl p-4 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-white text-white bg-black bg-opacity-40"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl md:text-3xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Your Email
            </label>
            <input
              type="email"
              name="reply_to"
              className="text-xl md:text-2xl p-4 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-white text-white bg-black bg-opacity-40"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl md:text-3xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="text-xl md:text-2xl p-4 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-white text-white bg-black bg-opacity-40"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl md:text-3xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="text-xl md:text-2xl p-4 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-white text-white bg-black bg-opacity-40"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white rounded-lg hover:bg-red-600 transition font-bold text-xl md:text-3xl"
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