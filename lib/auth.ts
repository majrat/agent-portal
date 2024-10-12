import { connectDB } from "lib/mongodb";
import user_model from "models/user";
import type { NextAuthOptions, Session } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    // }),
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await user_model
          .findOne({
            email: credentials?.email,
          })
          .select("+password");
        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.role = user.role;
        token.email_verified = user.email_verified;
        token.joined_date = user.createdAt;
      }
      return token;
    },
    session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: any;
      user: any;
    }) {
      session.user.role = token.role;
      session.user.id = token.sub;
      session.user.email_verified = token.email_verified;
      session.user.joined_date = token.joined_date;
      // Send properties to the client, like an access_token and user id from a provider.
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
};
