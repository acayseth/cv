"use client";

import { type FC, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export const Section: FC<Readonly<Props>> = ({ children, title }) => {
  return (
    <section className="w-full h-auto border border-teal-400 rounded-xl mb-4 p-4">
      <header className="bg-white -mt-7.5 mb-4 px-2 w-[140px] text-gray-600 italic">
        <h2 className="font-semibold">{title}</h2>
      </header>
      {children}
    </section>
  );
};
