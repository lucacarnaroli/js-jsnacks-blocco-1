// snack 4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.
var nomiLista = ['Luca','Adrea','Giovanni','Lucia','Carla'];
var nomeUtente = prompt('Come ti chiami?');
var messaggio = 'NON PUOI PARTECIPARE';

for (var i = 0; i < nomiLista.length; i++) {
  if (nomeUtente == nomiLista[i]) {
    messaggio = 'Benvenuto alla festa';
  }
}
console.log(messaggio);
document.getElementById('nomi-lista').innerHTML = nomiLista;
document.getElementById('utente').innerHTML = nomeUtente + ' '+  messaggio;
