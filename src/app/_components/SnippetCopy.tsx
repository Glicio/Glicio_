"use client";
import React from "react";
import ClipboardDocument from "./icons/clipboard-document";

export default function SnippetCopy({ value }: { value: string }) {
  const [copied, setCopied] = React.useState("");
  const displayMessage = (message: string) => {
    if (!navigator.clipboard) {
      setCopied("Não foi possível copiar para a área de transferência");
      return;
    }

    if (!value) {
      setCopied("Nada para copiar");
      return;
    }
    setCopied(message);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };
  return (
    <div className="flex flex-col">
      <div className=" bg-background flex items-center justify-between gap-2 rounded-md px-4 py-2">
        <span>{value}</span>
        <button
          className="text-white/50"
          onClick={(e) => {
            e.preventDefault();
            void navigator.clipboard.writeText(value).then(() => {
              displayMessage("Copiado para a área de transferência");
            });
          }}
        >
          <ClipboardDocument />
        </button>
      </div>
      <div
        className="flex min-h-10 items-center justify-center whitespace-nowrap px-2 text-center text-sm text-white/50 transition-all"
        style={{ opacity: !!copied ? 1 : 0 }}
      >
        {copied}
      </div>
    </div>
  );
}
