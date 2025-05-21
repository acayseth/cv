"use client";

import { type ReactNode, type FC } from "react";

interface Props {
  children: ReactNode;
  name: string;
  company: string;
  period: string;
}

export const Experience: FC<Readonly<Props>> = ({
  children,
  name,
  company,
  period,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-4 pb-4">
        <div>
          <p className="font-bold text-teal-600">{name}</p>
          <p className="text-sm text-teal-500">{company}</p>
        </div>
        <p className="text-teal-600">{period}</p>
      </div>
      {children}
    </>
  );
};
