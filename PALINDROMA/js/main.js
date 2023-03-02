
let parolaUtente = (prompt('Inserisci una parola'));
console.log(parolaUtente);

let parolaInversa = invertiParola(parolaUtente);

// for (let i = 0; i < parolaUtente.length; i++) {
//     console.log(parolaUtente[i])
// }

// let parolaDivisa = parolaUtente.split('');
// console.log(parolaDivisa);

// let parolaDivisaInvertita = parolaDivisa.reverse();
// console.log(parolaDivisaInvertita);

// let parolaInversa = parolaDivisaInvertita.join('');
// console.log(parolaInversa);


if (parolaUtente == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(stringa) {
    let stringaInversa = stringa.split('').reverse().join('');
    return stringaInversa;
}


alert("VEDI CONSOLE PER DETTAGLIO...");