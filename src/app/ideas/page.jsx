import Filter from '@/component/Filter';
import IdeaCard from '@/component/IdeaCard';
import { getData } from '@/lib/allData';
import React from 'react';

const ALLIdeasPage = async() => {
    const data = await getData();
    return (
      <div className="max-w-11/12 mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-5">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center md:text-left">
            ALL Ideas
          </h2>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            {/* Search Field */}
            <input
              type="text"
              placeholder="Search ideas..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filter Dropdown */}
           <Filter></Filter>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
          {data.map((data) => (
            <IdeaCard key={data._id} data={data}></IdeaCard>
          ))}
        </div>
      </div>
    );
};

export default ALLIdeasPage;