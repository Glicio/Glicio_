"use client";
import React from "react";

export default function TextInput({
  value,
  onChange,
  placeholder,
  error,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      <input
        className=" bg-background flex items-center justify-between gap-2 rounded-md px-4 py-2"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      />
      <div className="flex min-h-10 items-center justify-center whitespace-nowrap px-2 text-center text-sm text-red-400 text-white/50 transition-all">
        {error}
      </div>
    </div>
  );
}
