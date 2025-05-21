import "server-only";
import "@/@assets/globals.css";

import React, { type FC, type ReactNode } from "react";
import type { Metadata } from "next";
import { fontMono, fontSans } from "@/utils/font.util";
import { cn } from "@/utils/cn.util";

export const metadata: Metadata = {
  title: "CV",
  robots: { index: false, follow: false },
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={cn("antialiased", fontSans.variable, fontMono.variable)}>
        <main className="mx-auto max-w-7xl p-8">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
