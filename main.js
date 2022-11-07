
const text_name = prompt('inserisci il tuo nome');

const text_surname = prompt('inserisci il tuo cognome');

const text_color = prompt('inserisci il tuo colore preferito');

console.log(text_name,text_surname,text_color, "21");

document.getElementById("password").innerHTML = text_name + text_surname + text_color + "21";