import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name: string;
      email: string;
      id: string;
      role: string;
      expires: Date;
      email_verified: Boolean;
      joined_date: Date;
    };
  }
}
