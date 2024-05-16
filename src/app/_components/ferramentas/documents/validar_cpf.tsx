"use client";
import React from "react";

import validarCpf from "~/app/_utils/validar-cpf";

export default function ValidarCPF() {
  const [cpf, setCpf] = React.useState("");
  const [error, setError] = React.useState<string | undefined>();
  const [success, setSuccess] = React.useState<string | undefined>();

  return (
    <div className="flex h-fit w-full max-w-md flex-col rounded-md bg-white/5 p-4 backdrop-blur-sm">
      <h1 className="text-xl font-bold">Validador de CPF</h1>
      <p className="mb-4 text-sm text-white/50">
        Digite um número de CPF e clique em validar.
      </p>
      <div className="flex flex-col">
        <input
          className=" bg-background flex items-center justify-between gap-2 rounded-md px-4 py-2"
          value={cpf}
          placeholder="Digite o CPF"
          onChange={(e) => {
            const replace = e.target.value.replace(/[^0-9.-]/g, "");
            setCpf(replace);
          }}
        />
        <div
          style={{ 
            color: !!success ? "rgb(74 222 128)" : "rgb(248 113 113)",
          }}
          className="flex min-h-10 font-bold items-center justify-center whitespace-nowrap px-2 text-center text-sm text-red-400 text-white/50 transition-all">
          {error || success}
        </div>
      </div>
      <button
        className="bg-secondary ml-auto rounded-md px-4 py-2 font-semibold text-white "
        onClick={() => {
          const isValid = validarCpf(cpf);

          if (isValid) {
            console.log("CPF válido");
            setError(() => "");
            return setSuccess("CPF válido");
          }

          if (!isValid) {
            setSuccess(() => "");
            return setError(() => "CPF inválido");
          }
        }}
      >
        VALIDAR
      </button>
    </div>
  );
}
