import React, { useEffect, useState } from 'react';
import dfs1 from '../assets/dfs.jpg';

const NagadFamily = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/family.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Failed to load DFS data:', err));
  }, []);

  if (!data) return <div className="text-center py-10">Loading...</div>;

  return (
<div>

     <img
        src={dfs1}
        alt="Digital Financial Services"
        className="w-full rounded-2xl shadow-md"
      />
    <div className=" px-[7%] py-10 mt-20 bg-white  p-5 rounder-2xl text-black">
       
     

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-2">{data.introduction.summary}</p>
        <p><strong>Mission:</strong> {data.introduction.mission}</p>
      </section>

      {/* History */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p><strong>Launch Date:</strong> {data.history.launchDate}</p>
        <p><strong>Authority:</strong> {data.history.authority}</p>
        <p><strong>Administrator:</strong> {data.history.administrator.name}, {data.history.administrator.designation} (Effective {data.history.administrator.effectiveDate})</p>
      </section>

      {/* Management Board */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Management Board</h2>
        <p><strong>Formed Date:</strong> {data.managementBoard.formedDate}</p>
        <ul className="list-disc pl-6">
          {data.managementBoard.members.map((member, i) => (
            <li key={i}><strong>{member.name}</strong> – {member.role}, {member.details}</li>
          ))}
        </ul>
      </section>

      {/* Impact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Impact</h2>
        <p><strong>Customer Base:</strong> {data.impact.customers}</p>
        <p><strong>Uddokta Network:</strong> {data.impact.uddoktaNetwork}</p>
      </section>

      {/* Awards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Awards & Recognitions</h2>
        <ul className="space-y-3">
          {data.awards.map((award, i) => (
            <li key={i}>
              <p><strong>{award.title}</strong> ({award.date})</p>
              {Array.isArray(award.details) ? (
                <ul className="list-disc pl-5">
                  {award.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              ) : (
                <p>{award.details}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
     </div>
  );
};

export default NagadFamily;
