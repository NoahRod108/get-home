import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMap,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const getRates = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    }

    if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    }

    if (rates.nighlty) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <Image
        src={property.images[0]}
        alt=""
        sizes="100vw"
        height={0}
        width={0}
        className="w-full object-cover rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-purple-600 font-bold text-right md:text-center lg:text-right">
          ${getRates()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <div className="flex-col">
            <div className="flex justify-center items-center mb-2">
              <FaBed className="inline" />
            </div>
            {property.beds}
            <span className="md:hidden lg:inline"> Beds</span>
          </div>
          <div className="flex-col">
            <div className="flex justify-center items-center mb-2">
              <FaBath className="inline" />
            </div>
            {property.baths}
            <span className="md:hidden lg:inline"> Baths</span>
          </div>
          <div className="flex-col">
            <div className="flex justify-center items-center mb-2">
              <FaRulerCombined className="inline" />
            </div>
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="inline mr-1" />
              <i className="fa-solid fa-money-bill"></i> Nightly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-1" />
              <i className="fa-solid fa-money-bill"></i> Weekly
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-1" />
              <i className="fa-solid fa-money-bill"></i> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <FaMapMarker className="text-orange-700 mt-1" />
            <span className="text-orange-700">
              <p>{property.location.street}</p>
              <p>
                {property.location.city}
                {", "}
                {property.location.state} {property.location.zipcode}
              </p>
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
