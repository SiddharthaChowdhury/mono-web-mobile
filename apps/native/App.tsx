import React from "react";
import { Home } from "screens/home/Home";
import { AppDataProvider } from "@mono/data";

export default function App() {
  return (
    <AppDataProvider>
      <Home />
    </AppDataProvider>
  );
}
