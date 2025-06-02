import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Static Images
import mediaImg from "../assets/media.jpg";
import img1 from "../assets/Administrator.png";
import img2 from "../assets/Cricket players.png";
import img3 from "../assets/somoy.jpg";
import img4 from "../assets/BANGLA NEWS.jpg";
import birthdayImg from "../assets/birthday.jpeg";
import cupImg from "../assets/cup.jfif";
import whatsImg from "../assets/whats.jpeg";

// Image Mapping
const imageMap = {
  "Administrator.png": img1,
  "Cricket players.png": img2,
  "somoy.jpg": img3,
  "BANGLA NEWS.jpg": img4,
  "birthday.jpeg": birthdayImg,
  "cup.jfif": cupImg,
  "whats.jpeg": whatsImg,
};

const Media = () => {
  const [pressData, setPressData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    fetch("/press.json")
      .then((res) => res.json())
      .then((data) => setPressData(data))
      .catch((err) => console.error("Error fetching press data:", err));

    fetch("/lifenagad.json")
      .then((res) => res.json())
      .then((data) => setGalleryData(data))
      .catch((err) => console.error("Error fetching gallery data:", err));
  }, []);

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full">
        <img
          src={mediaImg}
          alt="Media Banner"
          className="w-full h-auto max-h-[100vh] object-contain rounded-lg mb-6 shadow-md"
        />
      </div>

      <div className="media-center px-[7%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 my-15">
        {/* Feature Section */}
        <div className="bg-blue-50 text-black p-4 rounded-xl shadow-md flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-2">Feature</h1>
          <h2 className="text-lg font-semibold">
            নগদে প্রশাসক নিয়গ দিল বাংলাদেশ ব্যাংক
          </h2>
          <h5 className="text-red-500 text-sm mb-2">21 August, 2024</h5>
          <img className="rounded-xl my-3" src={img1} alt="Feature" />
          <p>
            আদেশে বলা হয়, উপযুক্ত কর্তৃপক্ষের অনুমোদনক্রমে চট্টগ্রাম অফিসে কর্মরত
            পরিচালক মুহম্মদ বদিউজ্জামান দিদারকে চট্টগ্রাম অফিস থেকে প্রধান
            কার্যালয়ে বদলিপূর্বক হিউম্যান রিসোর্সেস ডিপার্টমেন্ট-১ এ সংযুক্ত করে
            বাংলাদেশ ডাক বিভাগের ডিজিটাল ফিনান্সিয়াল সার্ভিস ‘নগদ’...
          </p>
          <div className="flex justify-center items-center my-4">
            <Link
              to="https://www.kalerkantho.com/online/business/2024/08/21/1417333"
              target="_blank"
            >
              <button className="bg-red-600 text-white border border-red-500 px-5 py-2 rounded-full hover:bg-white hover:text-red-500 transition">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Press Releases */}
        <div className="bg-blue-50 text-black p-4 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Press Releases</h1>
          <div className="grid gap-4">
            {pressData.map((item) => (
              <div
                key={item.id}
                className="border-2 border-red-500 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-sm text-red-600 mb-2">{item.date}</p>
                <Link to={item.link} target="_blank">
                  <button className="text-sm text-white border border-red-500 bg-red-500 hover:text-red-500 px-4 py-1 rounded-full hover:bg-white transition">
                    {item.buttonText}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Release Carousel */}
      <div className="px-[7%] my-10">
        <h1 className="text-2xl text-center font-bold mb-6">
          Latest Release
        </h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
        >
          {pressData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-blue-50 text-black p-6 rounded-xl shadow-md max-w-xl mx-auto">
                <img
                  src={imageMap[item.image] || img1}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-red-500 mb-3">{item.date}</p>
                <div className="text-center">
                  <Link to={item.link} target="_blank">
                    <button className="text-sm text-white border border-red-500 bg-red-500 hover:text-red-500 px-6 py-2 rounded-full hover:bg-white transition">
                      {item.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Image Gallery */}
      <div className="px-[7%] my-10">
  <h1 className="text-2xl text-center font-bold mb-6">Image Gallery</h1>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    loop
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {galleryData.map((item) => (
      <SwiperSlide key={item.id}>
        <div
          onClick={() => setLightboxImage(imageMap[item.image])}
          className="bg-blue-50 rounded-xl p-3 shadow hover:shadow-lg transition cursor-pointer"
        >
          <img
            src={imageMap[item.image]}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg mb-2"
          />
          <h2 className="text-center font-semibold">{item.title}</h2>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Lightbox Popup */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <img
            src={lightboxImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Media;
