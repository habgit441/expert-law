"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Jago Law. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
