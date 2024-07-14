"use client";

import React from "react";
import InputBase from "../../input/InputBase";
import Select from "../../input/Select";

export default function Conversor() {
  const [base, setBase] = React.useState(2);
  const [toBase, setToBase] = React.useState(10);
  const [number, setNumber] = React.useState(0);
  const [toNumber, setToNumber] = React.useState(0);
  return (
    <div className="flex  h-fit flex-col rounded-md bg-white/5 p-4 backdrop-blur-sm">
      <h1 className="text-xl font-bold">Conversor de bases numéricas</h1>
      <p className="text-white/30">
        Converta números de um base numérica para outra, ex: de Binário para
        decimal.
      </p>
      <div className="flex w-full gap-2">
        <Select
          label="Base entrada"
          data={[
            {
              label: "Binário",
              value: "2",
            },
            {
              label: "Octal",
              value: "8",
            },
            {
              label: "Decimal",
              value: "10",
            },
            {
              label: "Hexadecimal",
              value: "16",
            },
          ]}
        />
      </div>
      <div className="flex w-full gap-2">
        <InputBase fw label={"Entrada"} placeholder="10" type="number" />
        <InputBase fw label={"Saída"} placeholder="2" type="number" />
      </div>
    </div>
  );
}
