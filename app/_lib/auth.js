import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

export const { signIn, signOut, handlers, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized({ request, auth }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const isUserExist = await getGuest(user.email);

        if (!isUserExist)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch (error) {
        return false;
      }
    },
    async session({ session }) {
      const user = await getGuest(session.user.email);
      session.user.guestId = user.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
});
