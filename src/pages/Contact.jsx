import React, { useState } from "react";
import contact1 from "../assets/contact.jpg";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    captcha: "",
  });
  const [captchaNum, setCaptchaNum] = useState({
    a: Math.floor(Math.random() * 10),
    b: Math.floor(Math.random() * 10),
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = captchaNum.a + captchaNum.b;

    if (parseInt(form.captcha) !== correct) {
      alert("❌ Captcha incorrect. Please try again.");
      setMessage("Captcha incorrect. Please try again.");
      return;
    }

    alert("✅ Message sent successfully!");
    setMessage("Message sent successfully!");
    setForm({ name: "", email: "", number: "", message: "", captcha: "" });
    setCaptchaNum({
      a: Math.floor(Math.random() * 10),
      b: Math.floor(Math.random() * 10),
    });
  };

  return (
    <div className="">
      <img
        src={contact1}
        alt="Contact"
       className='w-full h-47 md:mt-0 md:h-85 lg:h-full mt-22  lg:mt-0 mb-5'
      />

      <div className="px-6 sm:px-10 md:px-[7%]">
        <div className="info bg-white rounded-2xl py-5 px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-md shadow-gray-400">
          {/* Contact Form with Captcha */}
          <div className="contact-form space-y-4 text-center max-w-lg mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold text-black mb-2">
              Send Us a Message
            </h2>
            {message && (
              <p className="text-sm font-medium text-red-500">{message}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4  shadow-sm p-4 rounded shadow-red-500">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 text-black border border-red-500 rounded-3xl"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 text-black border border-red-500 rounded-3xl"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Your Number"
                className="w-full p-2 text-black border border-red-500 rounded-3xl"
                value={form.number}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 text-black border border-red-500 rounded-3xl"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <label className="font-medium text-black mb-2 sm:mb-0">
                  Solve: {captchaNum.a} + {captchaNum.b} =
                </label>
                <input
                  type="number"
                  name="captcha"
                  value={form.captcha}
                  onChange={handleChange}
                  className="p-2 border border-red-300 text-red-500 rounded-2xl w-full sm:w-24"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 border hover:border-red-500 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="max-w-lg mx-auto lg:mx-0 shadow-sm p-4 rounded shadow-red-500">
            <h2 className="text-3xl font-bold text-black text-center mb-6 lg:text-left">
              Contact Us
            </h2>
            <div className="contact-info space-y-5">
              {[
                {
                  icon: <FaPhone className="text-red-500 text-xl" />,
                  title: "Call Us",
                  desc: "16167 or 096 096 16167",
                  href: "tel:+09609616167",
                  btnText: "Call",
                },
                {
                  icon: <MdMail className="text-red-500 text-xl" />,
                  title: "Email",
                  desc: "info@nagad.com.bd",
                  href: "mailto:info@nagad.com.bd",
                  btnText: "Email",
                },
                {
                  icon: <CgProfile className="text-red-500 text-xl" />,
                  title: "Email",
                  desc: "recruitment@nagad.com.bd",
                  href: "mailto:recruitment@nagad.com.bd",
                  btnText: "Email",
                },
                {
                  icon: <IoLocationOutline className="text-red-500 text-5xl" />,
                  title: "Head Office",
                  desc:
                    "Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue, Banani, Dhaka -1213",
                  href: "https://maps.app.goo.gl/fhBtRAneXyYFsaNK7",
                  btnText: "Direction",
                  target: "_blank",
                },
              ].map(({ icon, title, desc, href, btnText, target }, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <div className="text-black">
                      <h3 className="font-bold">{title}</h3>
                      <p className="text-sm opacity-80">{desc}</p>
                    </div>
                  </div>
                  <a
                    href={href}
                    target={target || ""}
                    rel={target ? "noopener noreferrer" : ""}
                    className="btn bg-red-500 text-white rounded-3xl hover:bg-white hover:text-red-500 px-6 py-2 transition text-center whitespace-nowrap"
                  >
                    {btnText}
                  </a>
                </div>
              ))}

              <div
                className="mt-6 rounded-xl overflow-hidden border-2 border-red-500 relative"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  title="Nagad Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.661513174058!2d90.4095108752308!3d23.759347788532168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72d9a28b9ab%3A0x82d43b192bb24f54!2sNagad%20Head%20Office!5e0!3m2!1sen!2sbd!4v1717225086531!5m2!1sen!2sbd"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="locator mx-6 sm:mx-[7%] py-10 bg-white rounded-3xl mt-10 shadow-md shadow-gray-400">
        <h1 className="text-3xl text-black font-bold text-center mb-6">
          Nagad Locators
        </h1>
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-5 px-6 ">
          {[
            "Nagad Sheba",
            "Uddokta Locator",
            "Distributor Locator",
            "Merchant Locator",
          ].map((text, i) => (
            <Link
              to="#"
              key={i}
              className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition text-center"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
