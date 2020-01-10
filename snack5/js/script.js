// Snack1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.
// var num1 = parseInt(prompt('inserisci il primo numero'));
// var num2 = parseInt(prompt('inserisci il secondo numero'));
// console.log(num1);
// console.log(num2);
//
// if (num1 > num2) {
//   console.log(num1);
// }else if (num1 < num2) {
//   console.log(num2);
// }else {
//   console.log(num1 = num2);
// }

// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
// var parola1 = prompt('inserisci la prima parola');
// var parola2 = prompt('inserisci la seconda parola');
// console.log(parola1);
// console.log(parola2);
//
// if (parola1.length == parola2.length) {
//   alert('Hai inserito due parole con stessa lunghezza')
// } else if (parola1.lenght > parola2.lenght) {
//   console.log(parola1 + ' ' + parola2);
// } else {
//   console.log(parola2 + ' ' + parola1);
// }

// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for

// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   console.log(numero);
//   somma = somma + numero;
// }
// console.log(somma);
// var somma = 0;
// var i = 0;
// while (i < 5) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   console.log(numero);
//   somma = somma + numero
//   i++;
// }
// console.log(somma);

// snack 4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// var nomiInvitati = ['Luca','Adrea','Giovanni','Lucia','Carla'];
//
// var nomeUtente = prompt('Come ti chiami?');
//
//
// var invitato = false;
//
// for (var i = 0; i < nomiInvitati.length; i++) {
//
//   if (nomeUtente == nomiInvitati) {
//    console.log(invitato);
//    invitato = true;
// }
// }


// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// CICLO FOR
  // var vuoto = [];
  //
  // for (var i = 0; i < 6; i++) {
  //   var numero = parseInt(prompt('inserisci un numero'));
  //   if (numero % 2 != 0) {
  //     vuoto.push(numero);
  //     console.log(vuoto);
  //   }
  // }
  // console.log(vuoto);

// CICLO while
// var vuoto = [];
// var i = 0;
// while (i < 6) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   if (numero % 2 != 0) {
//     vuoto.push(numero);
//     console.log(numero);
//  }
//  i++;
// }
//  console.log(vuoto);
