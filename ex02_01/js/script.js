function calculoCF(){
    let numC = parseFloat(document.getElementById('input-C').value);
    console.log(numC);
    
    let numF = ((numC * 9/5) + 32).toFixed(1);
    console.log(numF);
    
    document.getElementById('output-F').innerHTML = numC +'ºC convertido em <br> <h2>'+ numF + 'ºF </h2>';

    document.getElementById('input-C').value = '';
}
function tecla_ativa(event) {
    if (event.key == 'Enter') {
        calculoCF();
    }
}