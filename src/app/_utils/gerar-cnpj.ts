function gerarCNPJ(): string {
    // Função para gerar um número aleatório entre min e max
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Gerar os 8 primeiros dígitos do CNPJ (número da empresa)
    const base = Array.from({ length: 8 }, () => randomInt(0, 9)).join('');
    // Definir os 4 dígitos da filial (geralmente 0001)
    const filial = '0001';

    // Concatenar os 12 primeiros dígitos do CNPJ
    const cnpjSemDV = base + filial;

    // Função para calcular um dígito verificador
    const calcularDV = (cnpjParcial: string) => {
        const pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const soma = cnpjParcial
            .split('')
            .map(Number)
            .reduce((acc, digit, index) => acc + digit * (pesos[index + (pesos.length - cnpjParcial.length)] ?? 1), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    // Calcular o primeiro dígito verificador
    const dv1 = calcularDV(cnpjSemDV);
    // Calcular o segundo dígito verificador
    const dv2 = calcularDV(cnpjSemDV + dv1);

    // Concatenar os dígitos verificadores ao CNPJ base
    const cnpj = cnpjSemDV + dv1 + dv2;

    // Formatar o CNPJ
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}

export default gerarCNPJ;
