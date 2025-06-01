import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import account1 from "../assets/account1.png";
import account2 from "../assets/account2.png";
import account3 from "../assets/account3.png";
import faqgif from "../assets/faq.gif";
import dfs from "../assets/nagadhomeimg.jpg";
import safty from "../assets/safty.jpg";

import DraggablePopup from "../component/DraggablePopup";
import NagadGalary from "../component/NagadGalary";

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
    <div className="w-full px-3 py-10  mx-auto">
      {/* Header Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl overflow-hidden shadow-lg mt-20"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`Header ${item.id}`}
               className="w-full h-auto max-h-[80vh] object-contain"
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
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
                <div className="relative">
                  <img
                    src={item.image}
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

      {/* <div className="account my-10 text-center shadow-2xl">
        <h1 className="text-3xl font-bold">Open Nagad Account</h1>
        <h1 className="text-xl text-red-500 mb-10">3 easy steps to open your Nagad account</h1>
        <div className="nagad-app grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">

          <div className="one flex flex-col justify-center items-center">
            <img className="bg-white w-50 h-55 rounded-2xl mb-[-15px] pt-3" src="/src/assets/account1.png" alt="" />


            <div className="step text-center  bg-white text-black p-8 pt-10 rounded-4xl">
              <h1 className="text-xl font-bold text-red-500">Step 1</h1>
              <h1 className="">
                Scan your nid and share necessary information
              </h1>
            </div>
          </div>


          <div className="one flex flex-col justify-center items-center">
              <img className="bg-white w-50 h-55 rounded-2xl mb-[-15px] pt-3" src="/src/assets/account2.png" alt="" />
            <div className="step text-center bg-white text-black p-8 rounded-4xl">
              <h1 className="text-xl font-bold text-red-500">Step 2</h1>
              <h1>
                Take a selfi and put your digital signature
              </h1>
            </div>
          </div>


          <div className="one flex flex-col justify-center items-center">
              <img className="bg-white w-50 h-55 rounded-2xl mb-[-15px] pt-3" src="/src/assets/account3.png" alt="" />

            <div className="step text-center  bg-white text-black p-8 rounded-4xl">
              <h1 className="text-xl font-bold text-red-500">Step 3</h1>
              <h1>
                Set your 4-digit pin and enter app
              </h1>
            </div>
          </div>
          
        </div>
      </div> */}

      <div className="account px-[7%] my-10 text-center shadow-2xl">
        <h1 className="text-3xl font-bold">Open Nagad Account</h1>
        <h1 className="text-xl text-red-500 mb-10">
          3 easy steps to open your Nagad account
        </h1>

        <div className="nagad-app grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <div className="one flex flex-col justify-center items-center hover:scale-105 transition duration-200">
            <img
               className=" bg-white w-full max-w-[200px] h-auto rounded-2xl pt-3 shadow-lg"
              src={account1}
              alt=""
            />
            <div className="step text-center bg-white text-black p-8 pt-10 rounded-4xl shadow-md">
              <h1 className="text-xl font-bold text-red-500">Step 1</h1>
              <h1>Scan your nid and share necessary information</h1>
            </div>
          </div>

          <div className="one flex flex-col justify-center items-center hover:scale-105 transition duration-00">
            <img
              className="w-full bg-white max-w-[200px] h-auto rounded-2xl pt-3 shadow-lg"
              src={account2}
              alt=""
            />
            <div className="step text-center bg-white text-black p-8 pt-10 rounded-4xl shadow-md">
              <h1 className="text-xl font-bold text-red-500">Step 2</h1>
              <h1>Take a selfi and put your digital signature</h1>
            </div>
          </div>

          <div className="one flex flex-col justify-center items-center hover:scale-105  transition duration-200">
            <img
               className="w-full bg-white max-w-[200px] h-auto rounded-2xl pt-3 shadow-lg"
              src={account3}
              alt=""
            />

            <div className="step text-center bg-white text-black p-8 pt-10 rounded-4xl shadow-md">
              <h1 className="text-xl font-bold text-red-500">Step 3</h1>
              <h1>Set your 4-digit pin and enter app</h1>
            </div>
          </div>
        </div>

        <div className="app ">
          <Link
            to="https://play.google.com/store/apps/details?id=com.konasl.nagad&hl=bn"
            className="btn btn-neutral bg-red-500 rounded-3xl my-5 hover:bg-white hover:text-red-500"
          >
            Download App
          </Link>
          <Link
            to="/appdetails"
            className=" btn  bg-white text-red-500 rounded-3xl border-red-500 ml-5 hover:bg-red-500 hover:text-white "
          >
            Learn More
          </Link>
        </div>
      </div>



      {/* Gif */}

      <div className="giffaq mt-10 px-[7%] flex flex-col justify-center items-center overflow-hidden">
        <a href="#">
          <div className=" w-180 max-w-4xl aspect-video h-45 object-contain">
            <iframe
              src={faqgif}
              title="FAQ Animation"
              className="top-0 left-0 w-full h-full border-none"
             
              
            ></iframe>
          </div>
        </a>
      </div>


      {/* dfs section */}
    
      <div className="dfs px-[7%] flex flex-col justify-center items-center">
          <h1 className=" text-3xl font-bold text-center my-7">Nagad - A DFS of the Bangladesh Post Office</h1>
        <img src={dfs} className="rounded-3xl" alt="" />
        <p className="my-7 text-center">Nagad is an innovative and promising digital financial service of Bangladesh Post Office that embarked upon a glorious journey on March 26, 2019. After its inception, Nagad has financially included more than 9 crore people only in five years.</p>

  <Link
            to="/nagadfamily"
            className=" btn  bg-white text-red-500 rounded-3xl border-red-500 hover:bg-red-500 hover:text-white "
          >
            Learn More
          </Link>

      </div>


      {/* nagad safty */}

      <div className="safty px-[7%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10">
        <div className="one">
          <img src={safty} className="rounded-3xl" alt="" />
        </div>


        <div className="one ">
          <h1 className="text-3xl font-bold my-5"> Beware Of Frauds</h1>
          <p className=" my-5">Do not share the PIN, OTP or account balance of your Nagad account with anyone. Fraudsters can take advantage of your vulnerability to steal your hard-earned money from your account. Even by using your account, they can scam others by pretending to be you</p>

            <Link
            to="/nagadsafty"
            className=" btn my-5 bg-white text-red-500 rounded-3xl border-red-500 hover:bg-red-500 hover:text-white "
          >
            Learn More
          </Link>

        </div>
      </div>

      {/* Galary section */}
       

       <NagadGalary></NagadGalary>

      {/* Popup Ad  */}

      <>
        <DraggablePopup />
      </>
    </div>
  );
};

export default HomePage;
