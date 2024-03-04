"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);

        setProperty(property);
      } catch (error) {
        console.error("Error fetching property data!", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found!
      </h1>
    );
  }

  return <>{!loading && proper}</>;
};

export default PropertyPage;
