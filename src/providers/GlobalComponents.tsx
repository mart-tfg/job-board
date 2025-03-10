// src/providers/GlobalComponents.tsx

"use client"; // Add this at the top of the file

import { createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const GlobalComponentContext = createContext({ Button, Input, Label });

export function GlobalComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalComponentContext.Provider value={{ Button, Input, Label }}>
      {children}
    </GlobalComponentContext.Provider>
  );
}

export function useGlobalComponent() {
  return useContext(GlobalComponentContext); // This will now work as it's inside a client component
}
