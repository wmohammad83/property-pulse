import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
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
    // Invoked on successful sign in.
    async signIn({ profile }) {
      // 1. connect to the database
      // 2. check if the user exists
      // 3. if not, create a new user and add to database
      // 4. return true to allow sign in
    },
    // modify the session object
    async session({ session }) {
      // 1. get the user from the database
      // 2. assign the user id to the session
      // 3. return the session
    },
  },
};