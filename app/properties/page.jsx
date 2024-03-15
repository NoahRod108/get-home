import SearchProperties from "@/components/SearchProperties";
import Properties from "@/components/Properties";

const propertiesPage = async () => {
  return (
    <>
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex-flex-col items-start sm:px-6 lg:px-8">
          <SearchProperties />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default propertiesPage;
