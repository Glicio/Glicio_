function gerarCPF(): string {
    // Função para gerar um número aleatório entre min e max
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Gerar os 9 primeiros dígitos do CPF
    const base = Array.from({ length: 9 }, () => randomInt(0, 9)).join('');

    // Função para calcular um dígito verificador
    const calcularDV = (cpfParcial: string) => {
        const length = cpfParcial.length + 1;
        const soma = cpfParcial
            .split('')
            .map(Number)
            .reduce((acc, digit, index) => acc + digit * (length - index), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    // Calcular o primeiro dígito verificador
    const dv1 = calcularDV(base);
    // Calcular o segundo dígito verificador
    const dv2 = calcularDV(base + dv1);

    // Concatenar os dígitos verificadores ao CPF base
    const cpf = base + dv1 + dv2;

    // Formatar o CPF
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

export default gerarCPF;
