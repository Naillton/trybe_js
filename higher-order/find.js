/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven);
 */
//com o find encontramos o item requerido pela condicao
//por exemplo no exemplo acima o primeiro elemento que for modulo de 2 sera retornado

/* const numbers = [10, 20, 21, 30, 40];

const maiorQue = (element) => element > 20;

const isBig = numbers.find(maiorQue);

console.log(isBig); */

//neste outro caso conseguimos pegar o prieiro numero maior que 20
//lembrando que ele utiliza a ordem do array

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDIvisibleBy3And5 = (element) => {
   return element.find((item) => {
        if (item % 3 === 0 && item % 5 === 0) {
            return item;
        }
    });
};

console.log(findDIvisibleBy3And5(numbers));