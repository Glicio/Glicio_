import GeradorCNPJ from "../_components/ferramentas/documents/gerador_cnpj";
import GeradorCpf from "../_components/ferramentas/documents/gerador_cpf";
import ValidarCNPJ from "../_components/ferramentas/documents/validar_cnpj";
import ValidarCPF from "../_components/ferramentas/documents/validar_cpf";


export default function Page() {
  return (
    <main className="flex justify-evenly min-h-screen gap-4 p-4 text-white">
      <GeradorCpf />
      <GeradorCNPJ />
      <ValidarCPF />
      <ValidarCNPJ />
    </main>
  );
}
