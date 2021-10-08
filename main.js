/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
(nome, congnome e colore preferito sono i dati inseriti dall'utente) */ 

const firstName = prompt ("Ciao, qual è il tuo nome?")
const lastName = prompt ("Qual è il tuo cognome?")
const color = prompt ("Qual è il tuo colore preferito?")
const result = firstName + lastName + color

console.log("Il tuo nome è " + firstName);

console.log("Il tuo cognome è " + lastName);

console.log("Il tuo colore preferito è " + color);