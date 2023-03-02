let utentePadiDispari;
let check;

do {
    utentePadiDispari = toLowerCase(prompt("PARI o DISPARI ? Fai la tua scelta"));
    check = (utentePadiDispari !== "pari" && utentePadiDispari !== "dispari");

    if (check) {
        alert("ATTENZIONE HAI INSERITO UN VALORE NON VALIDO");
    }

} while (check)

console.log(utentePadiDispari);

let numeroUtente;
let chekNumber;

do {
    numeroUtente = parseInt(prompt('Inserisci un nuemro da 1 a 5'));
    chekNumber = (numeroUtente > 5);

    if (chekNumber) {
        alert("INSERISCI UN NUMERO DA 1 A 5");
    } else if (isNaN(numeroUtente)) {
        alert("INSERISCI UN NUMERO ");
    }

} while (chekNumber)


console.log("Numero Utente " + numeroUtente);

// coverto tutto in minuscole

function toLowerCase(word) {
    return word.toLowerCase();
}

// numero casuale generato per il computer da 1 a 5

function generaNumeroCasuale(min, max) {

    let numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroCasuale;
}

let numeroPC = generaNumeroCasuale(1, 5);
console.log("Numero PC " + numeroPC);


// eseguo la somma dei due risultati

let risultatoSomma = sommaDueNumeri(numeroUtente, numeroPC);
console.log("Somma " + risultatoSomma);

function sommaDueNumeri(primoNumero, secondoNumero) {

    let somma = primoNumero + secondoNumero;

    return somma;
}

// calcolo pari e dispari

function calcolaPariDispari(numeroDaControllare) {

    let risultato = "";

    if (numeroDaControllare % 2 == 0) {
        risultato = 'pari';
    } else {
        risultato = 'dispari';
    }

    return risultato;

}

// verifico se la somma è pari o dispari

const checkRisultato = calcolaPariDispari(risultatoSomma);
console.log("La somma dei due numeri è " + checkRisultato);


// vincitore

if (checkRisultato == utentePadiDispari) {
    alert("HAI VINTO!");
    console.log("Vince l'utente");

} else {
    alert("MI DISPIACE HAI PERSO");
    console.log('Vince il pc');
}

alert("VEDI CONSOLE PER DETTAGLIO...");
