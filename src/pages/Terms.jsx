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

  if (!termsData) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="  mx-auto ">
      {/* Banner Image */}
      <div className=" mb-8">
        <img
  src={term}
  alt="Terms and Conditions"
  // className="w-full lg:h-full  h-60 object-cover rounded-b-xl"
  className='w-full h-47 md:mt-0 md:h-85 lg:h-full mt-22  lg:mt-0 '
/>

      </div>

      {/* Terms Content */}
      <div className="bg-white text-black p-6 sm:p-10 rounded-2xl shadow-lg mx-[7%]">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center leading-snug">
          Privacy Policy and Terms of Conditions (Agreement)<br />
          <span className="text-sm font-normal text-gray-500">
            Effective: {termsData.agreementEffectiveDate}
          </span>
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Introduction</h2>
          <p className="mb-2 text-justify">{termsData.introduction.description}</p>
          <p className="mb-2 text-justify">{termsData.introduction.overview}</p>
          <p className="text-justify">{termsData.introduction.dataSharingPolicy}</p>
        </section>

        {/* Sections */}
        {Object.entries(termsData.sections).map(([key, section]) => (
          <section key={key} className="mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-2">{section.title}</h3>

            {Array.isArray(section.content) ? (
              section.content.map((paragraph, i) => (
                <p key={i} className="mb-2 text-justify">{paragraph}</p>
              ))
            ) : typeof section.content === 'string' ? (
              <p className="text-justify">{section.content}</p>
            ) : (
              section.subsections &&
              Object.entries(section.subsections).map(([subKey, subSec]) => (
                <div key={subKey} className="ml-3 sm:ml-5 mb-3">
                  <h4 className="font-semibold">{subSec.title}</h4>
                  {Array.isArray(subSec.content) ? (
                    subSec.content.map((p, i) => <p key={i} className="text-justify">{p}</p>)
                  ) : (
                    <p className="text-justify">{subSec.content}</p>
                  )}
                </div>
              ))
            )}
          </section>
        ))}

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-600 text-center">
          {termsData.footer}
        </footer>
      </div>
    </div>
  );
};

export default Terms;
