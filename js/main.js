for (let i = 0; i < 4; i++) {

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
            risultato = 'PARI';
        } else {
            risultato = 'DISPARI';
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

}

alert("VEDI CONSOLE PER DETTAGLIO...");
