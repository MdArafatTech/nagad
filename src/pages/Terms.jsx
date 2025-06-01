import React, { useEffect, useState } from 'react';
import term from '../assets/terms.jpg';

const Terms = () => {
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    fetch('/terms.json')
      .then((res) => res.json())
      .then((data) => setTermsData(data))
      .catch((err) => console.error('Error loading terms:', err));
  }, []);

  if (!termsData) return <div>Loading...</div>;

  return (
    <div className="p-4 mx-auto ">
      <div className="">
        <img className="w-full mb-6" src={term} alt="Terms and Conditions" />
      </div>
<div className='bg-white text-black text-center py-6 px-3 rounded-2xl mx-[7%]  '>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy and Terms of Conditions (Agreement) {termsData.agreementEffectiveDate}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="mb-2">{termsData.introduction.description}</p>
        <p className="mb-2">{termsData.introduction.overview}</p>
        <p>{termsData.introduction.dataSharingPolicy}</p>
      </section>

      {Object.entries(termsData.sections).map(([key, section]) => (
        <section key={key} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          {Array.isArray(section.content) ? (
            section.content.map((paragraph, i) => <p key={i} className="mb-2">{paragraph}</p>)
          ) : typeof section.content === 'string' ? (
            <p>{section.content}</p>
          ) : (
            // for sections with subsections
            section.subsections && Object.entries(section.subsections).map(([subKey, subSec]) => (
              <div key={subKey} className="ml-4 mb-3">
                <h4 className="font-semibold">{subSec.title}</h4>
                {Array.isArray(subSec.content) ? (
                  subSec.content.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p>{subSec.content}</p>
                )}
              </div>
            ))
          )}
        </section>
      ))}

      <footer className="mt-12 text-sm text-gray-600">
        {termsData.footer}
      </footer>
      </div>
    </div>
  );
};

export default Terms;
