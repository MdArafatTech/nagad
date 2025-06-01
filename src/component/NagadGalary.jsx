import React, { useEffect, useState } from 'react';

const NagadGalary = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/galary.json') // Must be in /public folder
            .then(res => res.json())
            .then(data => setImages(data));
    }, []);

    return (
        <div className="px-[7%] py-6 ">
            <h1 className="text-3xl font-bold text-center my-6">
                Nagad In Everyday Life
            </h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-3 rounded-3xl ">
  {images.map(img => (
    <div
      key={img.id}
      className="rounded-2xl overflow-hidden shadow-md border-4 border-red-500 hover:scale-120 transition-transform duration-200"
    >
      <img
        src={img.image}
        alt={`Gallery ${img.id}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ))}
</div>


<p className='text-center my-10 '>Nagad’s services are designed to facilitate convenience and maximum benefit of its users. Nagad is making people's lives easier as they are now making all their transactions with the best benefits.</p>

        </div>
    );
};

export default NagadGalary;
