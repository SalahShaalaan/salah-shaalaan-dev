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
        "text-base md:text-xl text-primary lg:text-2xl font-medium text-[#344054]",
        className
      )}
    >
      {children}
    </Tag>
  );
};
