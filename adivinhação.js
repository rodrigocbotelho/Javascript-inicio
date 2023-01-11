const adiv = parseInt(Math.random() * 10);
let dec = 's'
while (dec === 's') {
    var tent = parseInt(prompt('TENTE ADIVINHAR O NUMERO: '));
    if (tent === adiv) {
        alert("Parabéns você Acertou!");
    }
    else if (tent > 10 || tent < 0) {
        alert("Infelizmente você ERROU! Você deve digitar um número de 0 a 10");
    }
    else if (adiv > tent) {
        alert("você ERROU! O número que eu pensei é maior.");
    } else {
        alert("você ERROU! O número que eu pensei é menor.");
    }
    dec = prompt('Tentar Novamente? s ou n:')
    if (dec !== 's') {
        alert('Fim!')
    }
};