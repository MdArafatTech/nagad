import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const OfferDetail = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    fetch("/offers.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((o) => o.id.toString() === id);
        setOffer(found);
      })
      .catch(console.error);
  }, [id]);

  if (!offer) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      {/* Back to All Offers Button */}
     
      <div className="border rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center px-6 py-3 bg-blue-100 gap-2 font-semibold text-blue-700">
          <span>{offer.badge}</span>
        </div>
        <img
          src={offer.image}
          alt={offer.badge}
        className="w-full h-auto max-h-[400px] object-contain"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{offer.badge} Offer</h1>
          <p className="mb-6">
            This is the detail page for the <strong>{offer.badge}</strong> offer.
            You can customize this content with full descriptions, terms, or any
            extra info.
          </p>
          <a href="/">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 cursor-pointer">
            Back
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
