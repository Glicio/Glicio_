import { GitBranch, Mail } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-white">
      <div className="flex flex-col gap-2 rounded-md bg-white/5 p-4 backdrop-blur-sm">
        <p>Eu sou Glicio</p>
        <p className="w-full min-w-0 max-w-[90vw] md:max-w-[50vw]">
          Atualmente sócio da empresa{" "}
          <a
            href="https://x3mmotion.com.br"
            target="_blank"
            className="font-bold text-[#8a009c]"
          >
            X3M Motion
          </a>{" "}
        </p>

        <div className="flex flex-col gap-2 py-4">
          <Link
            href="https://github.com/Glicio"
            className="flex items-center gap-2 text-blue-400"
          >
            <GitBranch />
            Meu github
          </Link>
          <Link
            href="mailto:mail@glicio.dev"
            className="flex items-center gap-2 text-blue-400"
          >
            <Mail />
            Entre em contato
          </Link>
        </div>
      </div>
    </main>
  );
}
