let utentePadiDispari = (prompt('PARI o DISPARI ? Fai la tua scelta'));
console.log(utentePadiDispari);

let numeroUtente = parseInt(prompt('Inserisci un nuemro da 1 a 5'));
console.log("Numero Utente " + numeroUtente);


// numero casuale generato per il computer da 1 a 5

function generaNumeroCasuale(min, max) {
    let numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroCasuale;
}

let numeroPC = generaNumeroCasuale(1, 5);
console.log("Numero Pc " + numeroPC);


// eseguo la somma dei due risultati

const risultato = sommaDueNumeri(numeroUtente, numeroPC);
console.log("Somma " + risultato);

function sommaDueNumeri(primoNumero, secondoNumero) {
    let somma = primoNumero + secondoNumero;
    return somma;
}
