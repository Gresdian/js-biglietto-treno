let km = prompt('inserisci il numero di km che vuoi percorrere percorrere');
console.log(km);

let eta = prompt('inserisci la tua età');
console.log(eta);

let ticket = km *0.21;
let n = ticket.toFixed(2)

if(eta < 18){
    ticket = ticket * 0.2;
    console.log(ticket,'paghi col 20% di sconto');
}
else if(eta > 65){
    ticket = ticket * 0.4;
    console.log(ticket,'paghi col 40% di sconto');
}
else {
    console.log(ticket, 'paghi tariffa intera');
}

document.getElementById("price").innerHTML = n;
