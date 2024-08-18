"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { useStore } from '@/store';
import { supabase } from '@/utils/db';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const { setUser, setUserSession } = useStore((state) => state);

  React.useEffect(() => {
    if (session) {
      setUserSession(session);
      setUser(session.user);
    } else {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
          setUserSession(session);
          setUser(session.user);
        } else if (event === 'SIGNED_OUT') {
          setUserSession(null);
          setUser(null);
        }
      });
    }
  }, [session]);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Toaster />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;