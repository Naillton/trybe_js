console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.getItem("firstname")) // retorna o valor "Adam"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("name", "Nailton Jr.")
let username = localStorage.getItem('name')
 /*    let organization = {
        name: "trybe",
        since: 2019
    }
    
    // objeto "storage" pode ser localStorage ou sessionStorage
    
    storage.setItem("trybe", JSON.stringify(organization))
    let org = JSON.parse(storage.getItem("trybe"))
    console.log(org) // { name: "trybe", since: 2019 }
    
    let classes = ["2019/set", "2019/oct"]
    storage.setItem("classses", JSON.stringify(classes))
    let cs = JSON.parse(storage.getItem("classes"))
    console.log(cs)
    if(window.localStorage){
        console.log("posso usar")
    }else{
    console.log("nao pode usar")
    } */