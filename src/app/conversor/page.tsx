import React from "react";
import Conversor from "../_components/ferramentas/conversor/conversor";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-wrap justify-evenly gap-4 p-4 text-white">
      <Conversor />
    </main>
  );
}
