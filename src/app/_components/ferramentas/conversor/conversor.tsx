"use client";

import React from "react";
import InputBase from "../../input/InputBase";
import Select from "../../input/Select";

export default function Conversor() {
  const [base, setBase] = React.useState(2);
  const [toBase, setToBase] = React.useState(10);
  const [number, setNumber] = React.useState("");
  const [toNumber, setToNumber] = React.useState("");

  //it's wrong, but it works :(
  //ps: most times...
  //ps.2: with numbers under 999999999999999...
  React.useEffect(() => {
    let base10Number = 0;

    if (base === 2) {
      const numbers: number[] = [];
      const n = number.toString();
      if (n.length === 0) return;

      for (const [i, nb] of Array.from(n).entries()) {
        const value = Number(nb);
        if (isNaN(value)) continue;
        numbers.push(value * 2 ** (n.length - 1 - i));
      }

      const res = numbers?.reduce((acc, curr) => {
        return acc + curr;
      });

      base10Number = res;
    }

    if (base === 8) {
      const numbers: number[] = [];
      const n = number.toString();
      if (n.length === 0) return;

      for (const [i, nb] of Array.from(n).entries()) {
        const value = Number(nb);
        if (isNaN(value)) continue;
        numbers.push(value * 8 ** (n.length - 1 - i));
      }

      const res = numbers?.reduce((acc, curr) => {
        return acc + curr;
      });

      base10Number = res;
    }

    if (base === 16) {
      const numbers: number[] = [];
      const n = number.toString();
      if (n.length === 0) return;

      for (const [i, nb] of Array.from(n).entries()) {
        const value = parseInt(nb, 16);
        if (isNaN(value)) continue;
        numbers.push(value * 16 ** (n.length - 1 - i));
      }

      const res = numbers?.reduce((acc, curr) => {
        return acc + curr;
      });

      base10Number = res;
    }

    if (base === 10) {
      base10Number = Number(number);
    }

    if (toBase === 16) {
      let n = base10Number;
      const digits: string[] = [];
      while (n > 0) {
        const digit = n % 16;
        switch (digit) {
          case 10:
            digits.push("A");
            break;
          case 11:
            digits.push("B");
            break;
          case 12:
            digits.push("C");
            break;
          case 13:
            digits.push("D");
            break;
          case 14:
            digits.push("E");
            break;
          case 15:
            digits.push("F");
            break;
          default:
            digits.push(digit.toString());
            break;
        }

        n = Math.floor(n / 16);
      }


      return setToNumber(digits.reverse().join(""));
    }

    if (toBase === 8) {
      let n = base10Number;
      const digits: string[] = [];
      while (n > 0) {
        const digit = n % 8;
        digits.push(digit.toString())
        n = Math.floor(n / 8);
      }
      return setToNumber(digits.reverse().join(""));
    }


    if (toBase === 10) {
      let n = base10Number;
      const digits: string[] = [];
      while (n > 0) {
        const digit = n % 10;
        digits.push(digit.toString())
        n = Math.floor(n / 10);
      }
      return setToNumber(digits.reverse().join(""));
    }


    if (toBase === 2) {
      let n = base10Number;
      const digits: string[] = [];
      while (n > 0) {
        const digit = n % 2;
        digits.push(digit.toString())
        n = Math.floor(n / 2);
      }
      return setToNumber(digits.reverse().join(""));
    }
  }, [number, base, toBase]);
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
          value={base.toString()}
          onChange={(value) => {
            const number = Number(value);
            if (isNaN(number)) return;
            setNumber("");
            setBase(number);
          }}
          fw
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
        <Select
          label="Base Saída"
          fw
          value={toBase.toString()}
          onChange={(value) => {
            const number = Number(value);
            if (isNaN(number)) return;
            setToBase(number);
          }}
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
        <InputBase
          fw
          value={number}
          onChange={(value) => {
            if (!value) setNumber("");
            if (base === 2) {
              const formmated = value.replace(/[^01]/g, "");
              return setNumber(formmated);
            }
            if (base === 8) {
              const formmated = value.replace(/[^0-8]/g, "");
              return setNumber(formmated);
            }
            if (base === 16) {
              const formmated = value.replace(/[^0-9a-fA-F]/g, "");
              return setNumber(formmated.toUpperCase());
            }
            const formmated = value.replace(/[^0-9]/g, "");
            return setNumber(formmated);
          }}
          label={"Entrada"}
          placeholder="10"
          type="text"
        />
        <InputBase
          value={toNumber}
          onChange={(value) => {
            if (!value) setNumber("");
            if (base === 2) {
              const formmated = value.replace(/[^01]/g, "");
              return setNumber(formmated);
            }
            if (base === 8) {
              const formmated = value.replace(/[^0-8]/g, "");
              return setNumber(formmated);
            }
            if (base === 16) {
              const formmated = value.replace(/[^0-9a-fA-F]/g, "");
              return setNumber(formmated.toUpperCase());
            }
            const formmated = value.replace(/[^0-9]/g, "");
            return setNumber(formmated);
          }}
          fw
          label={"Saída"}
          placeholder="2"
          type="text"
        />
      </div>
    </div>
  );
}
