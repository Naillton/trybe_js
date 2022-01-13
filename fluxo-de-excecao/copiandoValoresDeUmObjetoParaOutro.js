//para copiar os valores de um objeto para outro usamos a funcao Object.assign
//essa funcao nos permite pegar um objeto como parametro e passar outros objetos para adcionalos ao nosso primeiro objeto
//caso algum campo do primiero objeto tenha a mesma chave  e valor do proximo o proximo sobescreve o objeto anterior

const pessoa = {};
const person = {
    name: 'Nailton',
    age: 22
}

pessoa['name'] = 'Jose';
//ao adcionar uma chave name com o valor Jose inserimos em pessoa essa chave
console.log(pessoa)

//agora vamos definir que pessoa recebe person ou seja tudo que tem em person foi copiado para o objeto pessoa
Object.assign(pessoa, person)
//inclusive como name tem em ambos os objetos o ultimo sobrescreve o primeiro
console.log(person)
console.log(pessoa)