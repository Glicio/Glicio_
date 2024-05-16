"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Document from "./icons/document";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className=" sticky left-0 top-0 flex w-full justify-center p-4  z-10">
      <div className=" flex flex-grow items-center rounded-md bg-white/5 p-4 backdrop-blur-lg">
        <Link href="/">
          <div className="font-bold">GLICIO.DEV</div>
        </Link>
        <div className="mx-2 h-[90%] w-px bg-white/30" id="divider"></div>
        <DropdownMenu>
          <DropdownMenuTrigger>Ferramentas</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Geradores</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                void router.push("/documents");
              }}
            >
              <Document />
              <span>Gerador de CPF/CNPJ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
