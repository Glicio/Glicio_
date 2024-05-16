export default function validarCpf(cpf: string) {
  // remover alguns casos comuns de CPFs inválidos
  if (!cpf || cpf.length < 11) {
    return false;
  }
  if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }
  // Função para calcular um dígito verificador
  const calcularDV = (cpfParcial: string) => {
    const length = cpfParcial.length + 1;
    const soma = cpfParcial
      .split("")
      .map(Number)
      .reduce((acc, digit, index) => acc + digit * (length - index), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  // Remover caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Verificar se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Calcular o primeiro dígito verificador
  const dv1 = calcularDV(cpf.slice(0, 9));
  // Calcular o segundo dígito verificador
  const dv2 = calcularDV(cpf.slice(0, 9) + dv1);

  // Verificar se os dígitos verificadores são válidos
  if (cpf.slice(9) === dv1.toString() + dv2.toString()) {
    return true;
  } else {
    return false;
  }
}
