import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { fetchProperties } from "@/utils/requests";

const HomeProperties = async () => {
  const data = await fetchProperties();
  const { properties } = data;

  const recentProperties = properties
    .sort((a, b) => Math.random() - Math.random())
    .slice(0, 3);

  recentProperties.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      <section className="px-4 py-6 bg-blue-50">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties === 0 ? (
              <p></p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-[#121212] text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
