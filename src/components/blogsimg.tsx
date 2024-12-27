import React from "react";
import Image from "next/image";
import { FaRegClock, FaCalendarAlt } from "react-icons/fa";

const BlogGrid = () => {
  return (
    <div className="bg-white px-6 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-black">Our Blogs</h2>
        <p className="text-gray-500 mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog 1 */}
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full h-60">
            <Image
              src="/images/Rectangle 13.png"
              alt="Going all-in with millennial design"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium">Going all-in with millennial design</h3>
            <p className="mt-4 font-semibold underline">Read More</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRegClock className="h-4 w-4" />
                5 min
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="h-4 w-4" />
                12th Oct 2022
              </span>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full h-60">
            <Image
              src="/images/Rectangle 14.png"
              alt="Going all-in with millennial design"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium">Going all-in with millennial design</h3>
            <p className="mt-4 font-semibold underline">Read More</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRegClock className="h-4 w-4" />
                5 min
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="h-4 w-4" />
                12th Oct 2022
              </span>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full h-60">
            <Image
              src="/images/Rectangle 15 (1).png"
              alt="Going all-in with millennial design"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium">Going all-in with millennial design</h3>
            <p className="mt-4 font-semibold underline">Read More</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRegClock className="h-4 w-4" />
                5 min
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="h-4 w-4" />
                12th Oct 2022
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* View All Post Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="text-black text-lg underline hover:text-gray-600"
        >
          View All Post
        </a>
      </div>
    </div>
  );
};

export default BlogGrid;

