const multiplyByTwo = (number) => {
    if (!number) {
        throw new Error('number e indefinido')
    }
    return number * 2;
};

multiplyByTwo(4);

it('testa se retorna o resultado da multiplicacao', () => {
    expect(multiplyByTwo(4)).toBe(8);
});

it('testa se e lancado um erro quando number e indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
});

it('testa se a mensagem de erro e "number e indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number e indefinido'));
});