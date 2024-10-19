import { calcularPrecoFinal } from "./main";
describe('calcularPrecoFinal', () => {
    it('calcula o preço final corretamente sem desconto', () => {
        expect(calcularPrecoFinal(100, 0)).toBe(100);
    });

    it('calcula o preço final corretamente com desconto', () => {
        expect(calcularPrecoFinal(100, 20)).toBe(80);
    });

    it('lança um erro para preço base inválido', () => {
        expect(() => calcularPrecoFinal(-50, 10)).toThrow('Preço base inválido!');
        expect(() => calcularPrecoFinal('abc', 10)).toThrow('Preço base inválido!');
    });

    it('lança um erro para desconto inválido', () => {
        expect(() => calcularPrecoFinal(100, -10)).toThrow('Desconto inválido!');
        expect(() => calcularPrecoFinal(100, 150)).toThrow('Desconto inválido!');
        expect(() => calcularPrecoFinal(100, 'abc')).toThrow('Desconto inválido!');
    });
});
