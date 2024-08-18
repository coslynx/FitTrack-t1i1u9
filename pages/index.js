"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";

const HomePage = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return <Dashboard />;
};

export default HomePage;