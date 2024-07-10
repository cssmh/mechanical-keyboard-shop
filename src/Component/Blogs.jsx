import { FaRegClock } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";

const BLogs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-center text-green-600 mb-10">
          Why Choose Us Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://cdn.candykeys.com/public/22711/katslurp-slider.jpeg"
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Blog Title {index + 1}
                </h2>
                <p className="text-gray-600 mb-4">
                  The backend should be built using Node.js, Express, and
                  MongoDB. You can make a single-page server like you did in
                  level 1, or optionally, you can use TypeScript along with a
                  modular pattern to structure the codebase.
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center">
                    <FaRegClock className="mr-1" /> 5 min read
                  </div>
                  <div className="flex items-center">
                    <BsPeople className="mr-1" /> by John Doe
                  </div>
                  <div className="flex items-center">
                    <AiOutlineFileText className="mr-1" /> Category
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BLogs;
