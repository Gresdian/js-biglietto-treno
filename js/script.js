let km = prompt('inserisci il numero di km che vuoi percorrere percorrere');
console.log(km);

let eta = prompt('inserisci la tua età');
console.log(eta);

let ticket = km *0.21;


if(eta < 18){
    sconto = ticket * 0.2;
    ticket = ticket - sconto
    console.log(ticket,'paghi col 20% di sconto');
}
else if(eta > 65){
    sconto =  ticket * 0.4;
    ticket = ticket - sconto
    console.log(ticket,'paghi col 40% di sconto');
}
else {
    console.log(ticket, 'paghi tariffa intera');
}

let n = ticket.toFixed(2)
document.getElementById("price").innerHTML = n;
