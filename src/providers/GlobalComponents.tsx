// src/providers/GlobalComponents.tsx

"use client"; // Add this at the top of the file

import { createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const GlobalComponentContext = createContext({
  Button,
  Input,
  Label,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ScrollArea,
  Avatar,
  AvatarImage,
  AvatarFallback,
});

export function GlobalComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalComponentContext.Provider
      value={{
        Button,
        Input,
        Label,
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
        ScrollArea,
        Avatar,
        AvatarImage,
        AvatarFallback,
      }}
    >
      {children}
    </GlobalComponentContext.Provider>
  );
}

export function useGlobalComponent() {
  return useContext(GlobalComponentContext);
}
