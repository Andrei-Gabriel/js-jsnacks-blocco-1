// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const prima = prompt("Inserisci parola");
const seconda = prompt("Inserisci parola");

if(prima.length == seconda.length){
    console.log(prima + " " + seconda);
}
else if(prima.length > seconda.length){
    console.log(prima);
}
else{
    console.log(seconda);
}