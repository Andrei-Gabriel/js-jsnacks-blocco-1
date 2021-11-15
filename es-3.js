// Stampa le potenze di 2 fino a 1000

let exp = 0;
let ris;
do{
    ris = Math.pow(2, exp);
    exp++;
    if(ris < 1000){
        console.log(ris);
    }
}
while(ris < 1000);