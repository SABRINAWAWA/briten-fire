import React from "react";

const ServiceArea = () => {
  const cities = [
    "San Francisco",
    "Oakland",
    "Berkeley",
    "San Jose",
    "Palo Alto",
    "Mountain View",
    "Sunnyvale",
    "Santa Clara",
    "Cupertino",
    "Los Gatos",
    "Fremont",
    "Union City",
    "Hayward",
    "Castro Valley",
    "San Leandro",
    "Dublin",
    "Pleasanton",
    "Livermore",
    "Walnut Creek",
    "Concord",
    "San Mateo",
    "Redwood City",
    "Menlo Park",
    "South San Francisco",
    "Millbrae",
    "Burlingame",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Service Areas
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Briten Fire Service proudly serves restaurants across the Bay Area.
          We provide reliable filter exchange and fire prevention services in
          the following cities:
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-lg font-medium text-gray-800">
          {cities.map((city, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg py-4 px-2 
                         hover:bg-red-50 hover:scale-105 hover:shadow-xl 
                         transition-all duration-300 ease-in-out cursor-pointer"
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceArea;
