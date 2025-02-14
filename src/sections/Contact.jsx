import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form:", formData);

    // Uncomment the emailjs code when needed
    emailjs
      .send(
        "service_ye94tal",
        "template_4j7zky7",
        {
          from_name: formData.name,
          to_name: "Prem Thatikonda",
          from_email: formData.email,
          to_email: "2023.tprem@isu.ac.in",
          message: formData.message,
        },
        "WcOAoSNrFy5r0HF5i"
      )
      .then(
        () => {
          alert("Thank you! I'll get to you ASAP.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className="w-full h-full bg-text-lightest py-4 px-10 flex flex-col gap-4 overflow-hidden">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="w-full h-1/4 flex gap-10 justify-start">
          {/* Name Input */}
          <div className="w-[360px] h-[120px] flex flex-col items-start justify-center gap-2">
            <label htmlFor="name" className="text-xl font-pixel">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="w-full h-[50px] border rounded-sm bg-text-lightest px-2"
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="w-[360px] h-[120px] flex flex-col items-start justify-center gap-2">
            <label htmlFor="email" className="text-xl font-pixel">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full h-[50px] border rounded-sm bg-text-lightest px-2"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="w-full h-1/4 flex flex-col gap-10 justify-start mt-6">
          <div className="w-[95.6%] h-[200px] flex flex-col items-start justify-center gap-2">
            <label htmlFor="message" className="text-xl font-pixel">
              Leave me a message:
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              rows={5}
              className="w-[87%] h-[120px] border p-2 resize-none overflow-y-auto rounded-sm"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-24 h-12 bg-text-light p-4 flex justify-center items-center font-pixel text-lg rounded-sm cursor-pointer hover:bg-text-sub duration-300 transition-all ease-in-out hover:text-background"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
