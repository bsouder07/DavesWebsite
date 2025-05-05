import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52vq7rc",          // ✅ Updated Service ID
        "template_uldnzno",         // ✅ Template ID
        e.target,                   // ✅ Form Element
        "ucWwMuILv-Rut1kXw"         // ✅ Public API Key
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

    e.target.reset(); // Clear form after submission
  };

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
        <h1 className="text-5xl font-extrabold text-orange-500 tracking-wide text-center drop-shadow-[2px_3px_0_black] mb-5">
          Contact Me
        </h1>

        {/* ✅ FORM is now connected to onSubmit */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-4xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              className="text-2xl p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-4xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black]">
              Your Email
            </label>
            <input
              type="email"
              name="reply_to"
              className="text-2xl p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-4xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black] mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="text-2xl p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-4xl font-extrabold text-orange-500 drop-shadow-[2px_1px_0_black] mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="text-2xl p-3 border border-gray-500 rounded-lg drop-shadow-[2px_1px_0_orange] font-bold placeholder-black"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-red-600 transition font-bold text-3xl"
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