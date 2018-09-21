function radioCircunferencia () {
    r = prompt('Ingrese el radio de su circunferencia: ')
    if(r <= 0) {
        return 'ERROR:El radio debe ser mayor que cero.';
    }
    return Math.PI*Math.pow(r, 2);
}
