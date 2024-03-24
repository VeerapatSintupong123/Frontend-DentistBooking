import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import UserLogin from "@/libs/userLogin";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password", placeholder: "password" }
          },
          async authorize(credentials, req) {
            if(!credentials) return null

            const user = UserLogin(credentials.email,credentials.password)
      
            if (user) {
              return user
            } else {
              return null
            }
            
          }
        })
      ],
    session: {strategy:'jwt'}
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}