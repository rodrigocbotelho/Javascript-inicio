let dec = 's'
while (dec === 's') {
    var tent = parseInt(prompt("Fatorial de: "));
    alert('Resultado ' + factorial(tent));
    dec = prompt('Tentar Novamente? s ou n:')
    if (dec !== 's') {
        alert('Fim!')
    }
};
function factorial(numero) {
    if (numero < 0) {
        alert("Erro! Não existe fatorial de número negativo!");
    }
    else if (numero === 0 || numero === 1) {
        return 1;
    }
    for (i = numero - 1; i >= 1; i--) {
        numero *= i;
    }
    return numero;
};