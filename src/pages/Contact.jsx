import React, { useState } from "react";
import contact1 from "../assets/contact.jpg";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

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
    <div>
      <img src={contact1} alt="Contact" className="w-full h-auto rounded-2xl mb-6" />
      <div className="px-[7%]">
        <div className="info bg-white rounded-2xl py-5 px-10 grid lg:grid-cols-2 gap-10">
          {/* Contact Form with Captcha */}
          <div className="contact-from space-y-4 text-center">
            <h2 className="text-2xl font-bold text-black mb-2">Send Us a Message</h2>
            {message && <p className="text-sm font-medium text-red-500">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 pt-20">
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
                type="number"
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
              <div className="flex items-center gap-3">
                <label className="font-medium text-black">
                  Solve: {captchaNum.a} + {captchaNum.b} =
                </label>
                <input
                  type="number"
                  name="captcha"
                  value={form.captcha}
                  onChange={handleChange}
                  className="p-2 border border-red-300 text-red-500 rounded-2xl w-24"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-500 border hover:border-red-500 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div>
            <div className="text-3xl text-center font-bold text-black mb-4">Contact Us</div>
            <div className="contact-info space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-red-500 text-xl" />
                  <div className="text-black">
                    <h1 className="font-bold">Call Us</h1>
                    <h1 className="text-sm opacity-80">16167 or 096 096 16167</h1>
                  </div>
                </div>
                <a href="tel:+09609616167" className="btn bg-red-500 text-white rounded-3xl hover:bg-white hover:text-red-500">
                  Call
                </a>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <MdMail className="text-red-500 text-xl" />
                  <div className="text-black">
                    <h1 className="font-bold">Email</h1>
                    <h1 className="text-sm opacity-80">info@nagad.com.bd</h1>
                  </div>
                </div>
                <a href="mailto:info@nagad.com.bd" className="btn bg-red-500 text-white rounded-3xl hover:bg-white hover:text-red-500">
                  Email
                </a>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <CgProfile className="text-red-500 text-xl" />
                  <div className="text-black">
                    <h1 className="font-bold">Email</h1>
                    <h1 className="text-sm opacity-80">recruitment@nagad.com.bd</h1>
                  </div>
                </div>
                <a href="mailto:recruitment@nagad.com.bd" className="btn bg-red-500 text-white rounded-3xl hover:bg-white hover:text-red-500">
                  Email
                </a>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <IoLocationOutline className="text-red-500 text-2xl" />
                  <div className="text-black">
                    <h1 className="font-bold">Head Office</h1>
                    <h1 className="text-sm opacity-80">
                      Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue, Banani, Dhaka -1213
                    </h1>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/fhBtRAneXyYFsaNK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-red-500 text-white rounded-3xl hover:bg-white hover:text-red-500"
                >
                  Direction
                </a>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border-2 border-red-500 relative" style={{ paddingTop: "56.25%" }}>
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

      <div className="locator mx-[7%] py-10 bg-white rounded-3xl mt-10 ">
<h1 className="text-3xl text-black font-bold text-center">
Nagad Locators
</h1>
      <div className=" py-10 px-[7%] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">

         <Link to="#" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition text-center">
           
          Nagad Sheba</Link>
         <Link to="#" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition text-center">
           
          Uddokta Locator</Link>
         <Link to="#" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition text-center">
           
         Distributor Locator</Link>
         <Link to="#" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition text-center">
           
          Merchant Locator</Link>
          
      </div>

</div>
    </div>
  );
};

export default Contact;
