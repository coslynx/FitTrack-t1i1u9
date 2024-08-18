"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/db";

export const getSession = () => {
  const { data: session } = useSession();
  return session;
};

export const signInWithGoogle = () => {
  signIn("google");
};

export const signOutUser = async () => {
  try {
    await signOut({ redirect: false });
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
      // Handle the error gracefully (e.g., display a message to the user).
    }
  } catch (error) {
    console.error("Error signing out:", error);
    // Handle the error gracefully (e.g., display a message to the user).
  }
};

export const getCurrentUser = () => {
  const session = getSession();
  return session?.user;
};

export const redirectIfAuthenticated = () => {
  const router = useRouter();
  const session = getSession();
  if (session) {
    router.push("/");
  }
};

export const redirectIfUnauthenticated = () => {
  const router = useRouter();
  const session = getSession();
  if (!session) {
    router.push("/login");
  }
};