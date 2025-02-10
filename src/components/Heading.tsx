import React from "react";

import { twMerge } from "tailwind-merge";

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) => {
  return (
    <Tag
      className={twMerge(
        "text-base md:text-xl text-[#B89650] lg:text-4xl bg-clip-text  bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </Tag>
  );
};
