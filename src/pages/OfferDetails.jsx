import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Import offer images locally
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import offer3 from "../assets/offer3.jpg";
import offer4 from "../assets/offer4.jpg";
import offer5 from "../assets/offer5.jpg";
import offer6 from "../assets/offer6.jpg";
import offer7 from "../assets/offer7.jpg";
import offer8 from "../assets/offer8.jpg";
import offer9 from "../assets/offer9.jpg";

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
    <div className="max-w-4xl mx-auto p-6 mt-25">
      {/* Back to All Offers Button */}
     

      <div className="border rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center px-6 py-3 bg-blue-100 gap-2 font-semibold text-blue-700">
          <span>{offer.badge}</span>
        </div>
        <img
          src={offerImageMap[offer.image]}
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

           <Link to="/offers">
                            <button className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                             Back
                            </button>
                          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
