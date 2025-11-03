import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* This is where pages like Home and Posts will render */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
