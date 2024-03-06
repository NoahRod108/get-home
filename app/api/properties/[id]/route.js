import connectDb from "@/config/db";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/properties/:id
export const GET = async (req, { params }) => {
  try {
    await connectDb();

    const property = await Property.findById(params.id);

    if (!property) return new Response("Property Not Found!", { status: 404 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (req, { params }) => {
  const propertyId = params.id;

  const sessionUser = await getSessionUser();

  // Check for session
  if (!sessionUser || !sessionUser.userId) {
    return Response("User ID is required", { status: 401 });
  }

  const { userId } = sessionUser;

  try {
    await connectDb();

    const property = await Property.findById(propertyId);

    if (!property) return new Response("Property Not Found!", { status: 404 });

    // Verify if user is authorized
    if (property.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await property.deleteOne();

    return new Response("Property deleted!", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};
