import "server-only";
import "@/@assets/globals.css";

import React, { type FC, type ReactNode } from "react";

import { fontMono, fontSans } from "@/utils/font.util";
import { cn } from "@/utils/cn.util";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({children}) => {
  return (
    <html lang="ro">
    <body className={cn("antialiased", fontSans.variable, fontMono.variable)}>
    {children}
    </body>
    </html>
  );
};

export default RootLayout;
