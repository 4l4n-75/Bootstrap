function intercambio(data, indiceUno, indiceDos){
    let valorTemporal = data[indiceUno];
    data[indiceUno] = data[indiceDos];
    data[indiceDos] = valorTemporal

    return data
}
