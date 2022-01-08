function ordenBurbuja (data){
    let largo = data.length;
    for (let iExt = 1; iExt < largo; iExt++) {
        for (let iInt = 0; iInt < (largo - iExt); iExt++) {
            let valorIzq = iInt + 1
            if(data[iInt] > data[valorIzq])
                intercambio(data, iInt, valorIzq)
            
        }
        
    }
    return data
}