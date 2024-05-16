

export default function validarCNPJ(cnpj: string) {
    // Remover caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Verificar se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }

    // Verificar se todos os dígitos são iguais (CNPJ inválido)
    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    // Função para calcular um dígito verificador
    const calcularDV = (cnpjParcial: string) => {
        const pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const soma = cnpjParcial
            .split('')
            .map(Number)
            .reduce((acc, digit, index) => acc + digit * (pesos[index + (pesos.length - cnpjParcial.length)] ?? 0), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    // Separar os 12 primeiros dígitos e os 2 dígitos verificadores
    const cnpjBase = cnpj.slice(0, 12);
    const dv1 = parseInt(cnpj[12]!, 10);
    const dv2 = parseInt(cnpj[13]!, 10);

    // Calcular os dígitos verificadores
    const dv1Calculado = calcularDV(cnpjBase);
    const dv2Calculado = calcularDV(cnpjBase + dv1Calculado);

    // Verificar se os dígitos calculados são iguais aos fornecidos
    return dv1 === dv1Calculado && dv2 === dv2Calculado;
}
