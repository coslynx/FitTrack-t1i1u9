import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { supabase } from '@/utils/db';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('email', token.email);

      return {
        ...session,
        user: {
          ...user,
          id: user._id,
        },
      };
    },
  },
});