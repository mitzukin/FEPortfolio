import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative mx-auto lg:py-40 font-primary">
      <div class="ContactBackground absolute -z-10 h-auto inset-0 w-[100%]"></div>
      <form
        onSubmit={handleSubmit}
        className=" px-3.5 py-10 mx-auto md:max-w-md "
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-xs font-medium text-light-p dark:text-dark-p"
          >
            Full Name{" "}
            <span className="font-light text-dark-s">( optional )</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="name"
            className="w-full p-2 mt-1 border border-gray-200 rounded-sm dark:border-gray-900 placeholder:text-sm placeholder:text-light-s bg-dark-p "
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-light-p dark:text-dark-p"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full p-2 mt-1 border border-gray-200 rounded-sm dark:border-gray-900 placeholder:text-sm placeholder:text-light-s bg-dark-p "
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-xs font-medium text-light-p dark:text-dark-p"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-2 mt-1 border border-gray-200 rounded-sm dark:border-gray-900 placeholder:text-sm placeholder:text-light-s bg-dark-p "
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-xs font-medium text-light-p dark:text-dark-p"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full p-2 mt-1 border border-gray-200 rounded-sm dark:border-gray-900 placeholder:text-sm placeholder:text-light-s bg-dark-p "
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-3 py-2 text-sm font-medium transition duration-200 bg-light-p dark:bg-dark-p text-dark-p dark:text-light-p "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className=" relative font-Accent px-3.5  bg-background-light text-light-p dark:text-dark-p dark:bg-background-dark">
      <div className="flex flex-col items-center h-screen gap-10 lg:px-20 justify-evenly lg:flex-row">
        <div className="z-10 w-full">
          <Contact />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-5xl font-semibold lg:text-9xl">
            <span className="text-teal">Get</span> in{" "}
            <span className="text-DarkBlue">Touch</span>{" "}
          </p>
          <p className="font-primary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
