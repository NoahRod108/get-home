import connectDb from "@/config/db";
import Property from "@/models/Property";

// GET /api/properties/search
export const GET = async (req) => {
  try {
    await connectDb();

    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");

    const locationPattern = new RegExp(location, "i");

    // Location pattern
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.street": locationPattern },
        { "location.city": locationPattern },
        { "location.state": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };

    // Only check for selected property type
    if (propertyType && propertyType !== "All") {
      const typePattern = new RegExp(propertyType, "i");

      // Match query to type pattern
      query.type = typePattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};
