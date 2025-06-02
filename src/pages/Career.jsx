import React, { useEffect, useState } from "react";
import careerImg from "../assets/career.jpg";
import Faiyaz from "../assets/Faiyaz.jpg";
import Zeba from "../assets/Zeba.jpg";
import Siddikur from "../assets/Siddikur.jpg";
import Afroza from "../assets/Afroza.jpg";
import birthday from "../assets/birthday.jpeg";
import cup from "../assets/cup.jfif";
import whats from "../assets/whats.jpeg";
import { Link } from "react-router";

const imagesMap = {
  "Faiyaz.jpg": Faiyaz,
  "Zeba.jpg": Zeba,
  "Siddikur.jpg": Siddikur,
  "Afroza.jpg": Afroza,
};

const eventImagesMap = {
  "birthday.jpeg": birthday,
  "cup.jfif": cup,
  "whats.jpeg": whats,
};

const eventData = [
  { id: 1, title: "Birthday Celebration", image: "birthday.jpeg" },
  { id: 2, title: "Nagad World Cup Mania", image: "cup.jfif" },
  { id: 3, title: "Summer Fruit Festival", image: "whats.jpeg" },
  { id: 4, title: "Birthday Celebration", image: "birthday.jpeg" },
  { id: 5, title: "Summer Fruit Festival", image: "whats.jpeg" },
  { id: 6, title: "Nagad World Cup Mania", image: "cup.jfif" },
];

const Career = () => {
  const [team, setTeam] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/career.json")
      .then((res) => res.json())
      .then(setTeam)
      .catch((err) => console.error("Failed to load team members:", err));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  const member = team[currentIndex];
  const memberImg = member ? imagesMap[member.image] || careerImg : careerImg;

  return (
    <div className="px-2">
      <img
        src={careerImg}
        alt="Career at Nagad"
        className="w-full h-[310px] md:h-[450px] object-cover rounded-b-xl"
      />

      {/* Career intro */}
      <div className="w-full max-w-4xl mx-auto text-center p-6 md:p-10 rounded-xl bg-white my-10 shadow">
        <h1 className="text-2xl md:text-3xl text-red-500 font-bold mb-4">Career</h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We believe in the indomitable spirit that drives positive change. An attitude of “never say never” defines us.
          At Nagad, we commit to a dynamic work environment to support this mantra. Our culture is built upon creativity and a passion
          to march forward as a team. Explore the changemaker in you and bring it on!
        </p>
      </div>

      {/* Current openings */}
      <div className="px-[5%]">
        <h1 className="text-3xl text-center font-bold mt-10 mb-3">Current Openings</h1>
        <img
          src={careerImg}
          alt="Career at Nagad"
          className="w-full h-[300px] md:h-[450px] object-cover rounded"
        />
        <div className="text-center mt-6">
          <p className="text-red-700 mb-4">
            Join one of the fastest growing digital financial service providers. Discover career opportunities that match your passion and skills.
          </p>
         <Link to="/alljob">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full transition mb-10 hover:text-red-500 hover:bg-white border border-red-500 cursor-pointer">
            View All Jobs
          </button></Link>
        </div>
      </div>

      {/* Team member carousel */}
      {member && (
        <>
          <h1 className="text-3xl font-bold text-center my-6">Our Professionals</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={memberImg}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="flex flex-col text-center md:text-left">
              <h2 className="text-2xl text-red-500 font-semibold">{member.name}</h2>
              <p className="text-sm italic font-bold text-gray-600 mb-4">{member.title}</p>
              <p className="text-gray-700 max-w-md">{member.description}</p>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <button onClick={prevSlide} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Prev
                </button>
                <button onClick={nextSlide} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Life at Nagad carousel */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Life at Nagad</h2>
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 scrollbar-hide">
          {eventData.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 snap-center w-full sm:w-[48%] lg:w-[32%] bg-white rounded-lg shadow"
            >
              <img
                src={eventImagesMap[event.image] || careerImg}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
