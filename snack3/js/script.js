// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for e con il while.

// CICLO FOR
var somma = 0;
for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  somma = somma + numero;
}
document.getElementById('somma').innerHTML = somma;

// CICLO WHILE
// var somma = 0;
// var i = 0;
// while (i < 5) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   somma = somma + numero
//   i++;
// }
// document.getElementById('somma').innerHTML = somma;
