"use client";

import { type FC } from "react";
import { Experience } from "@/components/Experience";
import { Section } from "@/components/Section";

export const Education: FC = () => {
  return (
    <Section title="Educație">
      <Experience
        name="Masterat, Tehnologii Informaționale"
        company="Universitatea de Stat din Moldova, Chișinău"
        period="Ian. 2014 - Ian. 2016"
      >
        <></>
      </Experience>
    </Section>
  );
};
