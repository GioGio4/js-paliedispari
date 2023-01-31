// PALINDROMA - TRACCIA
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// -------------------------------------------------------------------------------//

// Fai inserire un parola all'utente
const user_word = prompt("inserisci una parola");

// Variabile parola al contrario
let word_reverse = "";

// Fai partire la "Function" sulla parola inserita dall'utente
is_palindroma(user_word);


// Analizza la parola inserita (con una funzione) e inserisci le lettere al contrario in una variabile
function is_palindroma(word) {

    for (let i = user_word.length - 1; i >= 0; i--) {
        word_reverse += user_word[i];
    }

    return word_reverse;
}

// Controlla se la parola inserita dall'utente è UGUALE a quella (al contrario) inserita nella variabile
if (user_word == word_reverse) {
    alert("La parola " + user_word + " è palindroma")
}

else {
    alert("La parola " + user_word + " non è palindroma")
}


// Stampa il risultato 


