function insertion(arrg) {                                            
    for(j = 1; j < arrg.length; j++) {
        key = arrg[j]
        i = j - 1
        while (i >= 0 && arrg[i] > key) {
            arrg[i+1] = arrg[i]
            i--
        }
        arrg[i+1] = key
    }
    return arrg
}