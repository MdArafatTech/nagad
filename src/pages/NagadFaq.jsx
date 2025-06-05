import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import nagad1 from '../assets/offerp4.jpg';
import nagad2 from '../assets/offerp2.jpg';
import nagad3 from '../assets/offer5.jpg';
import faqgif from "../assets/faq.gif";
import DraggablePopup from '../component/DraggablePopup';

const images = [nagad1, nagad2, nagad3];

const faqs = [
  {
    question: 'What is Nagad?',
    answer: 'Nagad is a digital financial service (DFS) by the Bangladesh Post Office, offering mobile money, bill pay, and more.',
  },
  {
    question: 'How do I open a Nagad account?',
    answer: 'Dial *167# or use the Nagad app. You’ll need your NID and a photo to register.',
  },
  {
    question: 'Can I use Nagad with any SIM card?',
    answer: 'Yes, Nagad supports Grameenphone, Robi, Banglalink, and Teletalk.',
  },
  {
    question: 'Are there charges for sending money?',
    answer: 'Nagad offers competitive fees. P2P transfers are free, and agent cash-outs cost around 1.5%.',
  },
  {
    question: 'Can I pay bills through Nagad?',
    answer: 'Yes! You can pay electricity, gas, and internet bills using the app or USSD.',
  },
];

const NagadFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    created(slider) {
      setInterval(() => {
        if (slider) slider.next();
      }, 3000);
    },
  });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

     <div>
<div ref={sliderRef} className="keen-slider rounded overflow-hidden shadow-xl  mt-23 lg:mt-0">
        {images.map((img, index) => (
          <div key={index} className="keen-slider__slide">
            <img
              src={img}
              alt={`nagad-slide-${index + 1}`}
            //  className="w-full h-auto max-h-[80vh] object-contain"
  className='w-full max-h-full    '
            />
          </div>
        ))}
      </div>

    <div className="px-[7%]  py-8 mt-25">
 



      {/* Carousel */}
      

      {/* Header */}
      <>
      <DraggablePopup/>
      <div className="max-w-4xl mx-auto p-6 text-center  shadow-xl ">
        <h1 className="text-4xl  font-bold mb-4">Welcome to Nagad Bangladesh FAQ Website</h1>
        <p className="text-lg ">
          Explore FAQs, offers, and more about Nagad digital financial services.
        </p>
      </div>
    </>
      <h1 className="text-3xl font-bold text-center text-red-600 my-5">
        Nagad Bangladesh - FAQ
      </h1>

      {/* FAQ Section */}
      <div className="space-y-4 shadow-xl p-4 rounded ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border  border-gray-300 rounded-lg shadow-sm transition duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full p-4 font-medium text-left "
            >
              <span>{faq.question}</span>
              <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4  border-t bg-white text-red-500">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>




<div className="giffaq mt-10 px-[7%] flex flex-col justify-center items-center overflow-hidden">
  <a href="#">
    <div className=" w-180 max-w-4xl aspect-video h-45 object-contain">
      <iframe
        src={faqgif}
        title="FAQ Animation"
        className="top-0 left-0 w-full h-full border-none"
       
        
      ></iframe>
    </div>
  </a>
</div>










    </div>

    </div>
  );
};

export default NagadFAQ;
