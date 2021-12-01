let statusCarro = false;

function carroLigado(){
    if(statusCarro === false){
        statusCarro = true;
    }else{
        statusCarro = false;
    }

    return statusCarro;
}