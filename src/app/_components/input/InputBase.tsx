"use client";
import React from "react";

export default function InputBase({
  value,
  onChange,
  placeholder,
  error,
  type,
  disabled,
  label,
  name,
  fw,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: "text" | "number" | "tel" | "password";
  disabled?: boolean;
  label?: string;
  name?: string;
  fw?: boolean;
}) {
  return (
    <div
      style={{
        width: fw ? "100%" : undefined,
      }}
      className="flex flex-col"
    >
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        name={name}
        type={type}
        style={{
          width: fw ? "100%" : undefined,
        }}
        disabled={disabled}
        className="flex items-center justify-between gap-2 rounded-md bg-background px-4 py-2 placeholder-white/30"
        value={value}
        inputMode={
          type === "number" ? "numeric" : type === "tel" ? "tel" : "text"
        }
        placeholder={placeholder}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      />
      <div
        style={{
          color: typeof error === "string" ? "#cc3333" : undefined,
        }}
        className="flex min-h-6 items-center whitespace-nowrap px-2 py-0.5 text-center text-sm text-red-400 text-white/50 transition-all"
      >
        {error}
      </div>
    </div>
  );
}
