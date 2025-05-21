"use client";

import { useState, type FC } from "react";

import { cn } from "@/utils/cn.util";
import { SocialMedia } from "@/components/SocialMedia";
import { MdOutlineMailOutline } from "@/components/icons/mail.icon";
import { MdOutlinePhoneIphone } from "@/components/icons/phone.icon";
import { LiaBirthdayCakeSolid } from "@/components/icons/birthday.icon";

export const ContactInfo: FC = () => {
  const [isEmailVisible, setIsEmailVisible] = useState<boolean>(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState<boolean>(false);

  const hrefData = (value: string, visible: boolean) => {
    if (visible) {
      return value;
    }
    return undefined;
  };

  return (
    <ul className="text-sm leading-none">
      <li className="flex justify-start items-center gap-2 mb-2">
        <MdOutlineMailOutline className="w-6 h-6 text-gray-600" />
        <p
          onClick={() => setIsEmailVisible(!isEmailVisible)}
          className={cn("text-gray-600", {
            "text-sm text-gray-400": !isEmailVisible,
            "hover:underline": isEmailVisible,
          })}
        >
          {hrefData("gorbulea.s@gmail.com", isEmailVisible) ||
            "Fă click pentru a vizualiza"}
        </p>
      </li>

      <li className="flex justify-start items-center gap-2 mb-2">
        <MdOutlinePhoneIphone className="w-6 h-6 text-gray-600" />
        <a
          onClick={() => setIsPhoneVisible(!isPhoneVisible)}
          href={hrefData("tel:37368167524", isPhoneVisible)}
          rel="nofollow"
          className={cn("text-gray-600", {
            "text-sm text-gray-400": !isPhoneVisible,
            "hover:underline": isPhoneVisible,
          })}
        >
          {hrefData("373 (68) 167524", isPhoneVisible) ||
            "Fă click pentru a vizualiza"}
        </a>
      </li>
      <li className="flex justify-start items-center gap-2 mb-2">
        <LiaBirthdayCakeSolid className="w-6 h-6 text-gray-600" />
        <p className="text-gray-600">31.03.1992</p>
      </li>
    </ul>
  );
};
