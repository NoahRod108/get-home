import React from "react";
import { FaBed, FaBath, FaRulerCombined, FaMapMarker } from "react-icons/fa";

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="text-lg text-blue-700 mr-2" />
          <p className="text-blue-700">
            {property.location.street} {property.location.city},{" "}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          {property.rates.nightly && (
            <div className="flex-col items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="flex justify-center items-center text-gray-500 mr-2 font-bold mb-2">
                Nightly
              </div>
              <div className="text-2xl font-bold text-blue-500">
                ${property.rates.nightly.toLocaleString()}
              </div>
            </div>
          )}
          {property.rates.weekly && (
            <div className="flex-col items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="flex justify-center items-center text-gray-500 font-bold mb-2">
                Weekly
              </div>
              <div className="text-2xl font-bold text-blue-500">
                ${property.rates.weekly.toLocaleString()}
              </div>
            </div>
          )}
          {property.rates.monthly && (
            <div className="flex-col items-center justify-center mb-4 pb-4 md:pb-0">
              <div className="flex justify-center items-center text-gray-500 font-bold mb-2">
                Monthly
              </div>
              <div className="text-2xl font-bold text-blue-500">
                ${property.rates.monthly.toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <div className="flex-col">
            <div className="flex justify-center items-center mb-2">
              <FaBed />
            </div>
            <span className="hidden sm:inline">{property.beds} Beds</span>
          </div>
          <div className="flex-col">
            <div className="flex justify-center items-center mb-2">
              <FaBath />
            </div>
            <span className="hidden sm:inline">{property.baths} Baths</span>
          </div>
          <div className="flex-col">
            <div className="flex justify-center items-center mb-2">
              <FaRulerCombined />
            </div>
            <span className="hidden sm:inline">
              {property.square_feet} sqft
            </span>
          </div>
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities.map((amenity, index) => (
            <li key={index} className="mb-2">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;
