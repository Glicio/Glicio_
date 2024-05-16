import { GitBranch, Mail } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-white">
      <div className="flex flex-col gap-2 rounded-md bg-white/5 p-4 backdrop-blur-sm">
        <h1 className="text-4xl font-bold">Olá, Mundo!</h1>
        <p>Eu sou Glicio, programador fullstack e jogador de destiny. </p>
        <p className="w-full min-w-0 max-w-[90vw] md:max-w-[50vw]">
          Atualmente sócio da empresa{" "}
          <a
            href="https://x3mmotion.com.br"
            target="_blank"
            className="font-bold text-[#8a009c]"
          >
            X3M Motion
          </a>{" "}
          , onde atuo como desenvolvedor fullstack e líder técnico. Trabalho com
          tecnologias como React, React Native, Next.js, Node.js, TypeScript,
          para desenvolvimento de aplicações web e mobile, landing pages, sites
          institucionais e e-commerces junto com a equipe da X3M Motion que
          conta com ótimos profissionais que estão sempre em busca de novos
          desafios.
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

        <p className="w-full min-w-0 max-w-[90vw] text-sm text-white/30 md:max-w-[50vw]">
          PS: Não tem mta coisa por aqui pq fiz esse site apenas pq tava cansado
          de usar o validador de cpf e cnpj travado da 4devs, caso faça alguma
          ferramenta legal tavez coloque aqui dps. Projetos e portfólio talvez quando tiver um tempo.
        </p>
      </div>
    </main>
  );
}
