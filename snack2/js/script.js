// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');
console.log(parola1);
console.log(parola2);

if (parola1.length == parola2.length) {
  alert('Hai inserito due parole con stessa lunghezza')
} else if (parola1.lenght > parola2.lenght) {
  console.log(parola1 + ' ' + parola2);
} else {
  console.log(parola2 + ' ' + parola1);
}
