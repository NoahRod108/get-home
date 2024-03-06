import connectDb from "@/config/db";
import Property from "@/models/Property";

// GET /api/properties/user/:userId
export const GET = async (req, { params }) => {
  try {
    await connectDb();

    // Api route is [userId]
    const userId = params.userId;

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }

    const properties = await Property.find({ owner: userId });

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};
