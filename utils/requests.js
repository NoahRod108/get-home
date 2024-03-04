const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all property data for database
async function fetchProperties() {
  try {
    // Handle if domain is not available
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch property data!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch single property data
async function fetchProperty(id) {
  try {
    // Handle if domain is not available
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch property data!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
