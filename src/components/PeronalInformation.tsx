"use client";

import { type FC } from "react";
import Image from "next/image";

import { DownloadCV } from "@/components/DownloadCV";
import aravatImage from "@/@assets/avatar.jpg";

interface Props {}

export const PersonalInformation: FC<Readonly<Props>> = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row justify-start items-stretch mb-8">
      <div className="md:max-w-xs w-full p-4 bg-teal-600 md:rounded-l-xl md:rounded-r-none rounded-t-xl flex flex-col justify-center items-center">
        <Image
          src={aravatImage}
          width={220}
          height={220}
          alt="avatar"
          className="w-[220px] h-[220px] object-cover rounded-full mb-4"
          loading="lazy"
        />
        <DownloadCV className="w-full h-8 ring ring-teal-700 bg-teal-700/80 text-white/80 hover:text-white hover:bg-teal-700 rounded cursor-pointer flex justify-center items-center p-1.5 transition-all delay-50" />
      </div>
      <div className="min-h flex-1 md:p-6 p-4 border border-teal-400 md:rounded-r-xl md:rounded-l-none rounded-b-xl">
        <header className="md:pb-12 pb-4">
          <h1 className="text-teal-600 text-3xl md:text-4xl font-bold text-center md:text-left">
            Serghei Gorbulea
          </h1>
        </header>
        <p className="text-gray-600 italic whitespace-pre-wrap text-sm">
          <span className="pl-5 text-lg" />
          După un deceniu de activitate am înțeles că adaptabilitatea și
          curiozitatea sunt cheile evoluției într-un domeniu în continuă
          schimbare. Găsesc satisfacție în rezolvarea provocărilor complexe,
          lucrând alături de specialiști din diferite domenii și contribuind cu
          idei relevante și cu impact. Caut mereu oportunități de a învăța și de
          a crește — atât profesional, cât și personal.
        </p>
      </div>
    </section>
  );
};
