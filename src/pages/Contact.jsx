import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    from_name: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oe1qdag",
        "template_wwqr2ly",
        form.current,
        "d13sXLf1fb2fDDLl0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setFormData({
            user_name: "",
            user_email: "",
            from_name: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative max-w-lg mx-auto lg:py-40 font-primary">
      <div className="ContactBackground absolute -z-10 h-auto inset-0 w-[100%]"></div>
      <p className="text-2xl text-center font-Accent">Message Me!</p>
      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="py-10 mx-auto md:max-w-md px-3.5 "
        >
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-xs font-medium text-light-p dark:text-dark-p"
            >
              Full Name{" "}
              <span className="font-light text-slate-200 ">( optional )</span>
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="name"
              className="w-full p-2 mt-1 border border-gray-200 rounded-sm text-light-p dark:border-gray-900 placeholder:text-sm placeholder:text-gray-400 bg-dark-p "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-xs font-medium text-light-p dark:text-dark-p"
            >
              Email *
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full p-2 mt-1 border border-gray-200 rounded-sm text-light-p dark:border-gray-900 placeholder:text-sm placeholder:text-gray-400 bg-dark-p "
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="from_name"
              className="block text-xs font-medium text-light-p dark:text-dark-p"
            >
              Subject *
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-2 mt-1 border border-gray-200 rounded-sm text-light-p dark:border-gray-900 placeholder:text-sm placeholder:text-gray-400 bg-dark-p "
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xs font-medium text-light-p dark:text-dark-p"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-2 mt-1 border border-gray-200 rounded-sm text-light-p dark:border-gray-900 placeholder:text-sm placeholder:text-gray-400 bg-dark-p "
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-3 py-2 text-sm font-semibold transition duration-200 bg-light-p dark:bg-dark-p text-dark-p dark:text-light-p "
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="p-10 text-center ">
          <p className="text-lg font-semibold text-green-500">
            Message sent successfully!
            <br />
            <br />
            Thank you
          </p>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="relative mx-auto max-w-screen-2xl font-Accent bg-background-light text-light-p dark:text-dark-p dark:bg-background-dark">
      <div className="flex flex-col-reverse items-center gap-10 justify-evenly lg:flex-row">
        <div
          className="z-10 w-full "
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
        >
          <Contact />
        </div>
        <div className="flex flex-col justify-between items-start gap-10 w-full px-3.5 mt-5 lg:h-screen">
          <div className="flex flex-col items-start w-full gap-12 lg:h-full md:items-center lg:items-start lg:gap-0 lg:mt-0 lg:justify-evenly ">
            <div className="flex flex-row justify-between w-full">
              <p
                className="text-sm font-primary"
                data-aos="fade-right"
                data-aos-easing="ease-in-back"
                data-aos-duration="300"
              >
                Metro Manila, Mandaluyong City
              </p>
              <p
                className="text-sm font-primary"
                data-aos="fade-right"
                data-aos-easing="ease-in-back"
                data-aos-duration="600"
              >
                Philippines
              </p>
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration="900">
              <p className="text-5xl font-semibold lg:text-9xl">
                <span className="text-teal">Get</span> in{" "}
                <span className="text-DarkBlue">Touch</span>{" "}
              </p>
            </div>

            <div
              className="flex flex-col gap-2 "
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-duration="1200"
            >
              <p className="text-2xl font-Accent">Hello! i am Jason 👋 </p>
              <p className="max-w-2xl text-sm font-primary ">
                Got questions, suggestions? I'm all ears! Feel free to drop me a
                message, and I will get back to you as soon as possible. Your
                feedback is incredibly important to me, and I'm here to assist
                you in any way I can. Thanks a bunch for reaching out I'm
                looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
        

    </div>
  );
}

export default App;
