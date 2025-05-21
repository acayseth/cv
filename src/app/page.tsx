import "server-only";

import { PersonalInformation } from "@/components/PeronalInformation";
import { Section } from "@/components/Section";
import { ContactInfo } from "@/components/ContactInfo";
import { Language } from "@/components/Language";
import { Experiences } from "@/components/Experiences";
import { Education } from "@/components/Education";
import { Hobby } from "@/components/Hobby";

export default function () {
  return (
    <>
      <PersonalInformation />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-4">
        <Section title="Date de contact">
          <ContactInfo />
        </Section>
        <Section title="Limbi străine">
          <Language />
        </Section>
        <Section title="Abilitați">
          <Hobby />
        </Section>
      </div>
      <Experiences />
      <Education />
    </>
  );
}
