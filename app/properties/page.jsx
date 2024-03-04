import PropertyCard from "@/components/PropertyCard";

// Fetch property data for database
async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch property data!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const propertiesPage = async () => {
  const properties = await fetchProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        {properties.length === 0 ? (
          <p>No Properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default propertiesPage;
