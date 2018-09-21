	function toBinary(n){
		var arrg = [];
		var entradas = 0;
        var resultadoBinario = '';
        if(n==0){
            return n;
        }
		while(n > 0){
			residuo = parseInt(n % 2);
			n = parseInt(n/2);
			arrg[entradas] = residuo;
			entradas++;
		}
		for (var i = arrg.length - 1; i >= 0; i--) {
			resultadoBinario += arrg[i];
		}
		return resultadoBinario;
	}