import { Sidebar } from "@/components/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-start">
      <Sidebar />
      <div className="w-5/6">{children}</div>
    </main>
  );
}
