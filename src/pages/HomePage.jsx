import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import account1 from "../assets/account1.png";
import account2 from "../assets/account2.png";
import account3 from "../assets/account3.png";
import faqgif from "../assets/faq.gif";
import dfs from "../assets/nagadhomeimg.jpg";
import safty from "../assets/safty.jpg";

import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";

import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import offer3 from "../assets/offer3.jpg";
import offer4 from "../assets/offer4.jpg";
import offer5 from "../assets/offer5.jpg";
import offer6 from "../assets/offer6.jpg";
import offer7 from "../assets/offer7.jpg";
import offer8 from "../assets/offer8.jpg";
import offer9 from "../assets/offer9.jpg";

import DraggablePopup from "../component/DraggablePopup";
import NagadGalary from "../component/NagadGalary";

const imageMap = {
  "header1.jpg": header1,
  "header2.jpg": header2,
  "header3.jpg": header3,
  "offer1.jpg": offer1,
  "offer2.jpg": offer2,
  "offer3.jpg": offer3,
  "offer4.jpg": offer4,
  "offer5.jpg": offer5,
  "offer6.jpg": offer6,
  "offer7.jpg": offer7,
  "offer8.jpg": offer8,
  "offer9.jpg": offer9,
};

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/header1.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Failed to load images:", err));

    fetch("/offers.json")
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Failed to load offers:", err));
  }, []);

  return (
    <div className="w-full mt-22 lg:mt-0">
      {/* Header Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        // className="overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded shadow-[0_4px_20px_rgba(0,0,0,0.2)] object-cover"

        className='w-full lg:h-full h-[200px] max-h-full'
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <img
              src={imageMap[item.image]}
              alt={`Header ${item.id}`}
              className="w-full h-[80%] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Offers Section Title */}
      <div className="text-3xl text-center font-bold my-6">
        <h1> Current Offers</h1>
      </div>

      <div className="px-[7%]">
        {/* Offers Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-10"
        >
          {offers.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-xl transform hover:scale-105 transition duration-300">
                <div className="relative">
                  <img
                    src={imageMap[item.image]}
                    alt={item.badge}
                    className="w-full h-auto object-contain max-h-64"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-4 text-center">
                  <a href={`/offer/${item.id}`}>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
                      View Offer
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* More Details Button */}
      <div className="text-center mt-4">
        <Link to="/offers">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition cursor-pointer">
            All Offers
          </button>
        </Link>
      </div>

      {/* Account Details */}
      <motion.div
        className="px-4 sm:px-[7%] my-10 text-center py-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Open Nagad Account</h1>
        <h2 className="text-lg sm:text-xl text-red-500 mb-8">
          3 easy steps to open your Nagad account
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[account1, account2, account3].map((imgSrc, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-center items-center hover:scale-105 transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <img
                className="bg-white w-full max-w-[180px] sm:max-w-[200px] h-auto rounded-2xl pt-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-[-25px]"
                src={imgSrc}
                alt={`Step ${idx + 1}`}
              />
              <div className="bg-white text-black p-6 sm:p-8 mt-4 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full max-w-sm">
                <h1 className="text-lg sm:text-xl font-bold text-red-500 mb-2">
                  Step {idx + 1}
                </h1>
                <p className="text-sm sm:text-base">
                  {idx === 0 && "Scan your NID and share necessary information"}
                  {idx === 1 && "Take a selfie and put your digital signature"}
                  {idx === 2 && "Set your 4-digit PIN and enter the app"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="https://play.google.com/store/apps/details?id=com.konasl.nagad&hl=bn"
            className="bg-red-500 text-white rounded-3xl px-6 py-2 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition duration-200"
          >
            Download App
          </Link>
          <Link
            to="/appdetails"
            className="bg-white text-red-500 rounded-3xl border border-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition duration-200 "
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* Gif */}
      <motion.div
        className="mt-10 px-[7%] flex flex-col justify-center items-center overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <a href="#">
          <div className="w-180 max-w-4xl aspect-video h-45 object-contain">
            <iframe
              src={faqgif}
              title="FAQ Animation"
              className="top-0 left-0 w-full h-full border-none"
            ></iframe>
          </div>
        </a>
      </motion.div>

      {/* DFS section */}
      <motion.div
        className="px-[7%] flex flex-col justify-center items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-xl mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold my-6">
          Nagad - A DFS of the Bangladesh Post Office
        </h1>
        <div className="w-full max-w-4xl h-[250px] md:h-[450px] overflow-hidden rounded">
          <img
            src={dfs}
            alt="Nagad DFS"
            className="w-full lg:h-full object-cover h-[180px]  rounded-xl"
          />
        </div>
        <p className="my-5 max-w-2xl">
          Nagad is an innovative and promising digital financial service of Bangladesh Post Office that embarked upon a glorious journey on March 26, 2019. After its inception, Nagad has financially included more than 9 crore people only in five years.
        </p>
        <Link
          to="/aboutus"
          className="bg-white text-red-500 rounded-3xl border border-red-500 hover:bg-red-500 hover:text-white px-6 py-2 mt-2 mb-3"
        >
          Learn More
        </Link>
      </motion.div>

      {/* Nagad Safety */}
      <motion.div
        className="px-[7%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-xl pb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <img src={safty} className="rounded mt-3" alt="Beware of Frauds" />
        </div>
        <div>
          <h1 className="text-3xl font-bold my-5"> Beware Of Frauds</h1>
          <p className="my-5">
            Do not share the PIN, OTP or account balance of your Nagad account with anyone. Fraudsters can take advantage of your vulnerability to steal your hard-earned money from your account. Even by using your account, they can scam others by pretending to be you.
          </p>
          <Link
            to="/nagadsafty"
            className=" bg-white text-red-500 rounded-3xl border border-red-500 hover:bg-red-500 hover:text-white px-6 py-2  "
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Gallery section */}
      <motion.div
        className="shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <NagadGalary />
      </motion.div>

      {/* Popup Ad */}
      <DraggablePopup />
    </div>
  );
};

export default HomePage;
