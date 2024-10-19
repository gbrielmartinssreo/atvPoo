export function calcularPrecoFinal(precoBase, desconto) {
    if (typeof precoBase !== 'number' || precoBase <= 0) {
        throw new Error('Preço base inválido!');
    }

    if (desconto) {
        if (typeof desconto !== 'number' || desconto < 0 || desconto > 100) {
            throw new Error('Desconto inválido!');
        }
        return precoBase * (1 - desconto / 100);
    }

    return precoBase;
}
