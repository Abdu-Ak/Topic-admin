import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions  = { 

    pages : {
       signIn : "/",
    },

    providers : [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) {
              try {
                console.log(credentials);
              } catch (error) {
                console.log(error);
              }
            }
          })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET , handler as POST };