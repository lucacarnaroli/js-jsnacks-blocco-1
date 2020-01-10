// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');

if (parola1.length == parola2.length) {
  alert('Hai inserito due parole con stessa lunghezza')
} else if (parola1.lenght > parola2.lenght) {
  document.getElementById('parola').innerHTML = (parola1 + ' ' + parola2);
} else {
  document.getElementById('parola').innerHTML = (parola2 + ' ' + parola1);
}
