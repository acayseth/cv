"use client";

import { type FC } from "react";

export const Language: FC = () => {
  return (
    <ul className="text-gray-500 gap-2 text-sm leading-none">
      <li className="flex justify-between items-center mb-2">
        <p>Română</p>
        <p>(nativă)</p>
      </li>
      <li className="flex justify-between items-center mb-2">
        <p>Engleză</p>
        <p>(A2)</p>
      </li>
      <li className="flex justify-between items-center mb-2">
        <p>Rusă</p>
        <p>(fluent)</p>
      </li>
    </ul>
  );
};
