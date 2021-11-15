// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

alert("CON IL FOR");
let somma = 0;
for(let i = 0; i < 5; i++){
    let numUtente = parseFloat(prompt("Inserisci un numero"));
    somma += numUtente;
}
console.log(somma);

alert("CON IL WHILE");
somma = 0;
let y = 0;
do{
    numUtente = parseFloat(prompt("Inserisci un numero"));
    somma += numUtente;
    y++;
}
while(y < 5){
}
console.log(somma);