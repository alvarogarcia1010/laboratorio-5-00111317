function fibonacci(n){
    var a=0;
    var b=1;
    var resultado = a + ", ";
 
    for(i=0; i<n-1;i++){
        var numeroTemporal=a;
        a=b;
        b=numeroTemporal+b;
 
        resultado = resultado + a + ", ";
    }
    return resultado;
}
