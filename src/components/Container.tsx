import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`w-full mx-auto py-20 px-4 md:px-10`}>{children}</main>
  );
};
