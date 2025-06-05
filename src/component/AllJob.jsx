import React from 'react';
import All from "../assets/alljob.jpg"

const AllJob = () => {
    return (
        <div>
             <img
                    src={All}
                    alt="Career at Nagad"
                     className='w-full h-47 md:mt-0 md:h-85 lg:h-full lg:rounded-none mt-22  lg:mt-0 rounded-xl '
                  />


                  <div className="text-xl bg-white text-red-500 py-2 rounded-2xl text-center font-bold px-2 my-5">
                    
All positions are currently filled. Check our website regularly to get the latest job updates.
                  </div>
        </div>
    );
};

export default AllJob;