"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-secondary border-t border-gray-200">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Salah Shaalaan
    </div>
  );
};
