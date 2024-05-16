"use client";
import React from "react";

import gerarCPF from "~/app/_utils/gera-cpf";
import SnippetCopy from "../../SnippetCopy";
import gerarCNPJ from "~/app/_utils/gerar-cnpj";

export default function GeradorCNPJ() {
  const [cnpj, setCnpj] = React.useState("");

  React.useEffect(() => {
    setCnpj(gerarCNPJ());
  }, []);
  return (
    <div className="flex h-fit w-full max-w-md flex-col rounded-md bg-white/5 p-4 backdrop-blur-sm">
      <h1 className="text-xl font-bold">Gerador de CNPJ</h1>
      <p className="mb-4 text-sm text-white/50">
        Gere um número de CNPJ válido para testes.
      </p>
      <SnippetCopy value={cnpj} />
      <button
        className="bg-secondary ml-auto rounded-md px-4 py-2 font-semibold text-white "
        onClick={() => {
          setCnpj(gerarCNPJ());
        }}
      >
        GERAR NOVO
      </button>
    </div>
  );
}
