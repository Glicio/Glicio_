"use client";
import React from "react";
import ChevronDown from "../icons/chevron-down";

export default function Select({
  value,
  onChange,
  placeholder,
  data,
  error,
  disabled,
  label,
  name,
  fw,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  fw?: boolean;
  data: {
    value: string;
    label: string;
  }[];
}) {
  return (
    <div
      style={{
        width: fw ? "100%" : undefined,
      }}
      className="relative flex flex-col"
    >
      <ChevronDown
        className={`absolute bottom-9 right-2 z-10 size-4 pointer-events-none transition-all`}
      />
      {label ? <label htmlFor={name}>{label}</label> : null}
      <select
        name={name}
        style={{
          width: fw ? "100%" : undefined,
          appearance: "none",
        }}
        disabled={disabled}
        className="relative flex items-center justify-between gap-2 rounded-md bg-background px-4 py-2 pr-8 placeholder-white/30"
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      >
        {data.map((curr, index) => {
          return (
            <option key={index} value={curr.value}>
              {curr.label}
            </option>
          );
        })}
      </select>
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
