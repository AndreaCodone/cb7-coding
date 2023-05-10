//**************************************
//ESERCIZIO 2(NON COMPLETATO, SONO ANDATO IN CONFUSIONE CON LE CALLBACK)

// Utilizzando callbacks, ricreare la calcolatrice in forma base includendo il DOM, pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina (qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente, per es. potrete avere anche un solo operatore e due valori da sommare)

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const form = document.getElementById("calculator");

const calculator = (operationFunc) => {
    let x = 2;

    return operationFunc(x, 5)
};

console.log(calculator(sum));

calculator.addEventListener('click', function(form) {
    form.preventDefault();
});



//**************************************
//ESERCIZIO AVANZATO (NON COMPLETATO, SONO ANDATO IN CONFUSIONE CON LE CALLBACK)

//Realizzare una calcolatrice che includa almeno le 4 operazioni matematiche fondamentali e arricchire lo stile, prendendo ispirazioni dalla seguente piattaforma https://dribbble.com/search/shots/popular/mobile?q=calculator


//LIGHT/DARK MODE

// const themeToggle = document.getElementById('btn');
// const body = document.body;

// btn.addEventListener('click', () => {
//   body.classList.toggle('dark');
//});



//CALCOLATRICE

// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// const form = document.getElementById("calculator");

// const calculator = (operationFunc) => {
//     let x = 2;

//     return operationFunc(x, 5)
// };

// console.log(calculator(sum));

// calculator.addEventListener('click', function(form) {
//     form.preventDefault();
// });