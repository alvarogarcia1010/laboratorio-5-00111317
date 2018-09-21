function radioCircunferencia () {
    r = prompt('Ingrese el radio de su circunferencia: ')
    if(r <= 0) {
        return -1;
    }
    return Math.PI*Math.pow(r, 2);
}
