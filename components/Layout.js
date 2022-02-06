import React from "react";
import Footer from "./Footer";
import Navbar from "@components/Navbar";

export default function Layout({ children }) {
  return (
    <div className=" bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen font-sans text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
