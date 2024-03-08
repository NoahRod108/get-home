import connectDb from "@/config/db";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

// Post /api/bookmarks/check
export const POST = async (req) => {
  try {
    await connectDb();

    const { propertyId } = await req.json();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in DB
    const user = await User.findById(userId);

    // Check is user already bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new Response("Something went wrong!", { stauts: 500 });
  }
};
