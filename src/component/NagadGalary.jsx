import React, { useEffect, useState } from "react";
import galary1 from "../assets/galary1.jpg";
import galary2 from "../assets/galary2.jpg";
import galary3 from "../assets/galary3.jpg";
import galary4 from "../assets/galary4.jpg";
import galary5 from "../assets/galary5.jpg";
import galary6 from "../assets/galary6.jpg";
import galary7 from "../assets/galary7.jpg";
import galary8 from "../assets/offer6.jpg";
import galary9 from "../assets/galary9.jpg";

const galaryMap = {
  "galary1.jpg": galary1,
  "galary2.jpg": galary2,
  "galary3.jpg": galary3,
  "galary4.jpg": galary4,
  "galary5.jpg": galary5,
  "galary6.jpg": galary6,
  "galary7.jpg": galary7,
  "offer6.jpg": galary8,
  "galary9.jpg": galary9
};

const NagadGalary = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/galary.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="px-[7%] py-6 ">
      <h1 className="text-3xl font-bold text-center my-6">
        Nagad In Everyday Life
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-3 rounded-3xl ">
        {images.map((img) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden shadow-xl border-2 border-red-500 hover:scale-105 transition-transform duration-200"
          >
            <img
              src={galaryMap[img.image]}
              alt={`Gallery ${img.id}`}
              className="w-full h-full object-maintain "
            />
          </div>
        ))}
      </div>

      <p className="text-center my-10">
        Nagad’s services are designed to facilitate convenience and maximum benefit of its users. Nagad is making people's lives easier as they are now making all their transactions with the best benefits.
      </p>
    </div>
  );
};

export default NagadGalary;

