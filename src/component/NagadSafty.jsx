import React, { useEffect, useState } from "react";
import safty from "../assets/learnsafty.jpg";

const NagadSafty = () => {
  const [safetyInfo, setSafetyInfo] = useState(null);

  useEffect(() => {
    fetch("/safty.json")
      .then((res) => res.json())
      .then((data) => setSafetyInfo(data));
  }, []);

  return (
    <div className=" ">
      <img
        src={safty}
        alt="Nagad Safety"
        className='w-full h-47 md:mt-0 md:h-85 lg:h-full mt-22  lg:mt-0 '
      />

      <div className=" px-[7%] py-6 space-y-6">
        {safetyInfo && (
          <div className="space-y-4 p-5 rounded-2xl bg-white text-black shadow-2xl">
            <h2 className="text-2xl font-bold">Fraud Prevention</h2>
            <p className="text-lg">{safetyInfo.fraudPrevention.warning}</p>

            <h3 className="text-xl font-semibold mt-4">
              Common Scam Techniques:
            </h3>
            <ul className="list-disc list-inside">
              {safetyInfo.fraudPrevention.commonScams.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">
              Precautionary Measures:
            </h3>
            <ul className="list-disc list-inside">
              {safetyInfo.fraudPrevention.precautions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-6">Legal Notices</h2>
            <p>{safetyInfo.legalNotices.message1}</p>
            <p>{safetyInfo.legalNotices.message2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NagadSafty;
