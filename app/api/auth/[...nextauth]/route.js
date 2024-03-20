import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function login(credentials) {
  try {
    if (
      credentials.email === process.env.ADMIN_USERNAME &&
      credentials.password === process.env.ADMIN_PASSWORD
    ) {
      return credentials.email;
    } else {
      throw new Error("Wrong Credentials..");
    }
  } catch (error) {
    console.log("Something went wrong :", error);
    throw new Error("Something went wrong");
  }
}

export const authOptions = {
  pages: {
    signIn: "/",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
         
          const email = await login(credentials);
          return email;
        } catch (error) {
          console.log(error);
          throw new Error("Failed to Loging.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {

      if (user) {
        token.email = user;
        token.name = 'admin'
      }

      return token;
    },
    async session({ session, token }) {
    
      if (token) {
        session.user.email = token.email;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
