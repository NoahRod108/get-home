import connectDb from "@/config/db";
import Property from "@/models/Property";
import cloudinary from "@/config/cloudinary";
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

    // extract public id's from image url in DB
    const publicIds = property.images.map((imageUrl) => {
      const parts = imageUrl.split("/");
      return parts.at(-1).split(".").at(0);
    });

    // Delete images from Cloudinary
    if (publicIds.length > 0) {
      for (let publicId of publicIds) {
        await cloudinary.uploader.destroy("get-home/" + publicId);
      }
    }

    await property.deleteOne();

    return new Response("Property deleted!", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};

// PUT /api/properties/:id
export const PUT = async (req, { params }) => {
  try {
    await connectDb();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { id } = params;
    const { userId } = sessionUser;

    const formData = await req.formData();

    // All values from amenities and images
    const amenities = formData.getAll("amenities");

    // Get property for update
    const exisitingProperty = await Property.findById(id);

    if (!exisitingProperty) {
      return new Response("Property does not exist!", { status: 404 });
    }

    // Verify you own the property
    if (exisitingProperty.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Create property for DB
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        nightly: formData.get("rates.nightly"),
        monthly: formData.get("rates.monthly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };

    // Update property
    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData);

    return new Response(JSON.stringify(updatedProperty), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
