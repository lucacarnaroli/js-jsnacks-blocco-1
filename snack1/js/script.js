// Snack1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.
var num1 = parseInt(prompt('inserisci il primo numero'));
var num2 = parseInt(prompt('inserisci il secondo numero'));

if (num1 > num2) {
  document.getElementById('numero').innerHTML = num1;
}else if (num1 < num2) {
  document.getElementById('numero').innerHTML = num2;
}else {
  console.log(num1 = num2);
  document.getElementById('numero').innerHTML = 'Pareggio';
}
