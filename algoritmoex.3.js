/* let n = 5;
let ast = '';
let space = '';
for(let i = 0; i < 5; i++){
    ast = ast+'*';
    if(ast == '*'){
    console.log("    "+ast);
    }else if(ast == '**'){
        console.log("   "+ast);
    }else if(ast == '***'){
        console.log("  "+ast);
    }else if(ast == '****'){
        console.log(" "+ast);
    }else if(ast == '*****'){
        console.log(ast);
    }
    
} */

//depois de muita luta e de tirar duvidas na mentoria consegui fazer a questao com menos codigo
let n = 5;
let space = "";
let ast = "";
for(let i = 0; i < 5; i++){
    for(let s = 0; s <= n; s+=1){
        if(s < n){
            space +=" ";
        }else{
            ast +="*"
        }
    }
    console.log(space+ast);
    space = "";
    n--;
}