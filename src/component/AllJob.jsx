import React from 'react';
import All from "../assets/alljob.jpg"

const AllJob = () => {
    return (
        <div>
             <img
                    src={All}
                    alt="Career at Nagad"
                    className="w-full h-[310px] md:h-[450px] object-cover rounded-b-xl"
                  />


                  <div className="text-xl bg-white text-red-500 py-2 rounded-2xl text-center font-bold px-2 my-5">
                    
All positions are currently filled. Check our website regularly to get the latest job updates.
                  </div>
        </div>
    );
};

export default AllJob;