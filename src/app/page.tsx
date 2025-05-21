import "server-only";

import { PersonalInformation } from "@/components/PeronalInformation";
import { Section } from "@/components/Section";
import { ContactInfo } from "@/components/ContactInfo";
import { Language } from "@/components/Language";
import { Hobby } from "@/components/Hobby";

export default function () {
  return (
    <>
      <PersonalInformation />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Section title="Date de contact">
          <ContactInfo />
        </Section>
        <Section title="Limbi străine">
          <Language />
        </Section>
        <Section title="Hobby-uri">
          <Hobby />
        </Section>
      </div>
    </>
  );
}
