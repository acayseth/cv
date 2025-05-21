"use client";

import { type FC } from "react";

import { FaLinkedinIn } from "@/components/icons/linked-in.icon";
import { FaTelegram } from "@/components/icons/telegram.icon";

export const SocialMedia: FC = () => {
  return (
    <ul className="flex justify-center">
      <li className="flex justify-start items-center gap-2">
        <a
          target="_blank"
          rel="nofollow"
          href="https://www.linkedin.com/in/gorbulea"
          className="text-teal-600/80 hover:text-teal-600"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
        <a
          target="_blank"
          rel="nofollow"
          href="https://t.me/acayseth"
          className="text-teal-600/80 hover:text-teal-600"
        >
          <FaTelegram className="w-6 h-6" />
        </a>
      </li>
    </ul>
  );
};
