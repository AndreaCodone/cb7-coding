// *******************************************
// ESERCIZIO 1
// Creare un pulsante HTML e un elemento di testo vuoto come una un 'p'.
// Aggiungere un gestore di eventi click al pulsante utilizzando il metodo addEventListener().
// Al click dell'utente deve modificare il testo dell'elemento di testo per visualizzare un messaggio di saluto.


// const salutoBtn = document.querySelector (".saluto-btn");
// const salutoTesto = document.querySelector (".saluto-testo");

// salutoBtn.addEventListener ('click', () => {
//   salutoTesto.textContent = "Benvenuto sul nostro sito!";
// });




// *******************************************
// ESERCIZIO 2
// Creare un campo di input HTML e un pulsante.
// Aggiungere un gestore di eventi 'submit'.
// Al submit dell'utente il gestore di eventi deve leggere il valore dell'input dell'utente e visualizzarlo in un elemento di testo come un 'div' o un 'p'.


// const myForm = document.getElementById('form');
// const inputField = document.getElementById('input-field');
// const output = document.getElementById('output');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const inputValue = inputField.value;
//   output.textContent = "Il testo inserito è: " + inputValue;
//   inputField.value = "";
// });




// *******************************************
// ESERCIZIO AVANZATO
// creare un 'input', una lista HTML 'ul' e un 'button' "Aggiungi elemento" che aggiungerà un elemento alla lista.
// l'elemento aggiunto deve contenere come "textContent" il valore dell'input inserito


// const form = document.getElementById("form");
// const inputField = document.getElementById("input-field");
// const addBtn = document.getElementById("add-btn");
// const list = document.getElementById("list");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const listItem = document.createElement("li");
//   listItem.textContent = inputField.value;
//   list.appendChild(listItem);
//   inputField.value = "";
// });