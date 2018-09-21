function palindromo (){
    cadena = prompt('Ingrese la palabra a verificar: ')
    if(cadena.split("").reverse().join("") == cadena){
        console.log(cadena + ' es palindromo');
    }else{
        console.log(cadena + ' no es palindromo');
    }
}