"use client";

import { type FC } from "react";
import { Experience } from "@/components/Experience";
import { Section } from "@/components/Section";

export const Experiences: FC = () => {
  return (
    <Section title="Experiență">
      <Experience
        name="Full-stack Developer"
        company="ArtPlanet S.R.L"
        period="Mai 2022 - Prezent"
      >
        <ul className="text-gray-500 px-4 list-disc list-inside pb-4">
          <li className="list-none">
            <a
              href="https://www.photolamus.com"
              rel="nofollow"
              className="text-blue-500 hover:underline"
            >
              www.photolamus.com
            </a>{" "}
            este o platformă online specializată în caricaturi și portrete
            personalizate realizate manual de artiști. Utilizatorii pot încărca
            fotografii și primi desene unice, în format digital sau tipărite pe
            diverse suporturi (pânze, postere, căni, tricouri)
          </li>
          <li>
            Am dezvoltat și optimizat backend-ul Yii2, creând un REST-API pentru
            migrarea frontend-ului către Next.js{" "}
          </li>
          <li>Am contribuit la tranziția frontend-ului la Next.js</li>
          <li>Am automatizat procesele de deploy și pipeline CI/CD</li>
        </ul>
      </Experience>

      <div className="border-b border-gray-100 my-4 w-4/5 mx-auto" />

      <Experience
        name="PHP/Full-stack developer"
        company="ProContext S.R.L"
        period="Noi. 2016 - Mai 2022"
      >
        <ul className="text-gray-500 px-4 list-disc list-inside pb-4">
          <li>
            Am dezvoltat și implementat soluții IVR (Interactive Voice Response)
            pentru automatizarea fluxurilor de interacțiune cu clienții
          </li>
          <li>
            Am dezvoltat dashboard-uri interactive, adaptate cerințelor
            clienților, pentru afișarea datelor în timp real și luarea rapidă a
            deciziilor
          </li>
          <li>
            Am asigurat mentenanța și optimizarea continuă a aplicațiilor
            existente, îmbunătățind performanța și stabilitatea acestora
          </li>
        </ul>
      </Experience>

      <div className="border-b border-gray-100 my-4 w-4/5 mx-auto" />

      <Experience
        name="Web Developer"
        company="ÎCS Spamol S.R.L"
        period="Sept. 2015 - Dec. 2015"
      >
        <ul className="text-gray-500 px-4 list-disc list-inside pb-4">
          <li>
            Monitorizarea performanței aplicației și rezolvarea erorilor
            raportate de utilizatori
          </li>
          <li>
            Corectarea bug-urilor și îmbunătățirea codului existent pentru a
            crește stabilitatea și eficiența
          </li>
          <li>
            Implementarea modificărilor și noi funcționalități la cererea
            echipei
          </li>
        </ul>
      </Experience>

      <div className="border-b border-gray-100 my-4 w-4/5 mx-auto" />

      <Experience
        name="Web Developer"
        company="StarSoft S.R.L"
        period="Aug. 2014 - Sept. 2015"
      >
        <ul className="text-gray-500 px-4 list-disc list-inside pb-4">
          <li>
            Colaborarea directă cu echipele de design și marketing pentru
            integrarea eficientă a elementelor vizuale și a conținutului
          </li>
          <li>
            Crearea de site-uri web funcționale, responsive și optimizate pentru
            diferite dispozitive
          </li>
        </ul>
      </Experience>
    </Section>
  );
};
