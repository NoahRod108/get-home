import connectDb from "@/config/db";
import User from "@/models/User";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

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
    let message;

    if (isBookmarked) {
      // remove bookmark if already bookmarked
      user.bookmarks.pull(propertyId);
      message = "Bookmark removed successfully!";
      isBookmarked = false;
    } else {
      // If not bookmarked add
      user.bookmarks.push(propertyId);
      message = "Bookmark added successfully!";
      isBookmarked = true;
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new Response("Something went wrong!", { stauts: 500 });
  }
};
