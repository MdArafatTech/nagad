import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

// Import carousel images
import offerp1 from "../assets/offerp1.jpg";
import offerp2 from "../assets/offerp2.jpg";
import offerp3 from "../assets/offerp3.jpg";



// Import offer images
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import offer3 from "../assets/offer3.jpg";
import offer4 from "../assets/offer4.jpg";
import offer5 from "../assets/offer5.jpg";
import offer6 from "../assets/offer6.jpg";
import offer7 from "../assets/offer7.jpg";
import offer8 from "../assets/offer8.jpg";
import offer9 from "../assets/offer9.jpg";

// Map image filenames from JSON to imported images
const carouselMap = {
  "offerp1.jpg": offerp1,
  "offerp2.jpg": offerp2,
  "offerp3.jpg": offerp3,
  "offer4.jpg": offer4
};

const offerImageMap = {
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

const Offers = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [offers, setOffers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/offerhead.json")
      .then((res) => res.json())
      .then((data) => setCarouselImages(data))
      .catch((err) => console.error("Failed to load carousel images:", err));

    fetch("/offers.json")
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Failed to load offers:", err));
  }, []);

  const displayedOffers = showAll ? offers : offers.slice(0, 6);

  return (
    <div className="w-full py-10 mx-auto">
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={3000}
        className="rounded-xl overflow-hidden shadow-lg mt-20"
      >
        {carouselImages.map((item) => (
          <div key={item.id}>
            <img
              src={carouselMap[item.image]}
              alt={`Header ${item.id}`}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Offers */}
      <div className="px-[7%]">
        <div className="text-3xl text-center font-bold my-6">
          <h1>Offers</h1>
          <h4 className="text-xl font-normal">
            Experience all the amazing campaigns below
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedOffers.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-white"
              style={{ height: "370px", width: "100%" }}
            >
              <div className="relative h-75 flex justify-center items-center bg-gray-100">
                <img
                  src={offerImageMap[item.image]}
                  alt={item.badge}
                  className="max-h-55 w-auto object-contain"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm rounded-full">
                  {item.badge}
                </span>
              </div>
              <div className="p-4 text-center">
                <Link to={`/offer/${item.id}`}>
                  <button className="bg-red-600 text-white border border-red-500 px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-red-500 transition">
                    View Offer
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More / Show Less Button */}
        {offers.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition cursor-pointer"
            >
              {showAll ? "Show Less" : "See More Offers"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
