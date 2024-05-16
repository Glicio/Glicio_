"use client";
import React from "react";

import gerarCPF from "~/app/_utils/gera-cpf";
import SnippetCopy from "../../SnippetCopy";

export default function GeradorCpf() {
  const [cpf, setCpf] = React.useState("");

  React.useEffect(() => {
    setCpf(gerarCPF());
  }, []);
  return (
    <div className="flex w-full max-w-md flex-col h-fit rounded-md bg-white/5 p-4 backdrop-blur-sm">
      <h1 className="text-xl font-bold">Gerador de CPF</h1>
      <p className="text-sm text-white/50 mb-4">
        Gere um número de CPF válido para testes.
      </p>
      <SnippetCopy value={cpf} />
      <button
        className="bg-secondary ml-auto rounded-md px-4 py-2 font-semibold text-white "
        onClick={() => {
          setCpf(gerarCPF());
        }}
      >
        GERAR NOVO
      </button>
    </div>
  );
}
