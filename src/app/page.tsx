import "server-only";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  robots: {index: false, follow: false}
};

export default function Home() {
  return (
    <>
      CV
    </>
  );
}
