/* //objeto names
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
//utilizando for in e imprimindo mensagem com os names do objeto
for(let key in names){
    console.log("Ola "+names[key]);
} */

//objeto car
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
//imprimindo chaves e valores com for in
for(let key in car){
    console.log(key+": "+car[key]);
}