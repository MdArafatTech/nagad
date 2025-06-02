import React, { useEffect, useState } from "react";
import img from "../assets/nagadhomeimg.jpg";

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/family.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Failed to load DFS data:", err));
  }, []);

  if (!data) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-stone-900 text-white">
      {/* Top Image */}
      <div className="w-full max-h-[500px] overflow-hidden">
        <img
          src={img}
          alt="About Banner"
          className="w-full h-full object-cover rounded-b-xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6  py-10">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">Introduction</h2>
          <p className="mb-3">{data.introduction.summary}</p>
          <p className="text-sm sm:text-base">
            <strong>Mission:</strong> {data.introduction.mission}
          </p>
        </section>

        {/* History */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">History</h2>
          <p><strong>Launch Date:</strong> {data.history.launchDate}</p>
          <p><strong>Authority:</strong> {data.history.authority}</p>
          <p>
            <strong>Administrator:</strong> {data.history.administrator.name},{" "}
            {data.history.administrator.designation} (Effective{" "}
            {data.history.administrator.effectiveDate})
          </p>
        </section>

        {/* Management Board */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">Management Board</h2>
          <p className="mb-2"><strong>Formed Date:</strong> {data.managementBoard.formedDate}</p>
          <ul className="list-disc pl-5 space-y-2">
            {data.managementBoard.members.map((member, i) => (
              <li key={i}>
                <strong>{member.name}</strong> – {member.role},{" "}
                <span className="text-sm text-red-500">{member.details}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">Impact</h2>
          <p><strong>Customer Base:</strong> {data.impact.customers}</p>
          <p><strong>Uddokta Network:</strong> {data.impact.uddoktaNetwork}</p>
        </section>

        {/* Awards */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">Awards & Recognitions</h2>
          <ul className="space-y-5">
            {data.awards.map((award, i) => (
              <li key={i}>
                <p className="font-semibold">
                  {award.title} <span className="text-sm text-red-500">({award.date})</span>
                </p>
                {Array.isArray(award.details) ? (
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {award.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm">{award.details}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
