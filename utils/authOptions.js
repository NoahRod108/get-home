import GoogleProvider from "next-auth/providers/google";
import connectDb from "@/config/db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    // Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // Connect to DB
      await connectDb();

      // Check if user exists
      const userExists = await User.findOne({ email: profile.email });

      // Add if user does not exist
      if (!userExists) {
        // Shorten username if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }

      return true;
    },
    // Modify session object
    async session({ session }) {
      // Get user
      const user = await User.findOne({ email: session.user.email });

      // User ID to session
      session.user.id = user._id.toString();

      return session;
    },
  },
};
