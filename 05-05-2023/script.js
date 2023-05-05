// ESERCIZIO 2
// Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno 03-05-2023.

// alert("CALCULATOR");


// function getInput1(num1) {
//     return parseFloat(prompt(num1));
// }

// function getInput2(num2) {
//     return parseFloat(prompt(num2));
// }

// function getOperator() {
//     return prompt("Inserisci un operatore (+, -, *, /):");
// }

// function calc(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//         return num1 + num2;
//         case "-":
//         return num1 - num2;
//         case "*":
//         return num1 * num2;
//         case "/":
//         return num1 / num2;
//         default:
//         return "NaN";
//     }
// }

// let num1 = getInput1("Inserisci il primo numero:");
// let operator = getOperator();
// let num2 = getInput2("Inserisci il secondo numero:");
// let risultato = calc(num1, num2, operator);
// console.log(risultato);





//********************************
// ESERCIZIO 3
// Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni. Giusto per cominciare a prendere pratica con la sintassi e come richiamare valori di oggetti.

// alert("INFO ANDREA")

// function mainInfo(andrea) {
//     console.log("Capelli:",andrea.hair);
//     console.log("Occhi:",andrea.eyes);
//     console.log("Altezza:",andrea.height);
//     console.log("Peso:",andrea.weight);
//     console.log("Taglia scarpe:", andrea.shoe_size);
//     return `Andrea ha i capelli ${andrea.hair}, ha gli occhi ${andrea.eyes}, è alto ${andrea.height}, pesa ${andrea.weight} e calza ${andrea.shoe_size}`;
//     // console.log(2); // Non verrà mai eseguito!
// }

// const body = {
//     hair: "castani",
//     eyes: "marroni",
//     height: "175 cm",
//     weight: "65 kg",
//     shoe_size: "8 US",
// };

// console.log(mainInfo(body));



//*********************************
// AVANZATO
// Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.

// alert("CALCULATOR");

// function getInput(message) {
//     return parseFloat(prompt(message));
// }

// function getOperator() {
//     return prompt("Inserisci un operatore (+, -, *, /):");
// }

// function calc() {
//     let num1 = getInput("Inserisci il primo numero:");
//     let num2 = getInput("Inserisci il secondo numero:");
//     let operator = getOperator();
//     switch (operator) {
//         case "+":
//         return num1 + num2;
//         case "-":
//         return num1 - num2;
//         case "*":
//         return num1 * num2;
//         case "/":
//         return num1 / num2;
//         default:
//         return "NaN";
//     }
// }

// let risultato = calc();
// console.log(risultato);