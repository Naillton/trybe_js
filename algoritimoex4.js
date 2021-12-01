let n = 5;
let space = "";
let ast = "";
for(let i = 0; i < 3; i++){
    for(let s = 0; s <= n; s+=1){
        if(s+1 < n){
            space +=" ";
        }else{
            ast +="*";
        }
    }
    console.log(space+ast.substr(1));
    space = "";
    n--
}