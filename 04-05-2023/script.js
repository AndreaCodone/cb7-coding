//*******************************************
//Esercizio 1
//Scrivere un piccolo script javascript che inverta un array senza utilizzare il metodo reverse().

// const numbers = [65,23,89,1,74];

// function reverseArray(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         const value = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = value;
//     }
    
//     return arr;
// }

// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers);





//*******************************************
// Esercizio 2
//Dato un array di numeri, stampare il velore minimo e massimo

// let arrNumeri = [12,9,54,3,37]

// let min = arrNumeri[0]  //Imposto il primo elemento dell'array come minimo
// let max = arrNumeri[0]

// for(let i = 1; i < arrNumeri.length; i++){
//   if(arrNumeri[i] < min){
//          min = arrNumeri[i]
//      }
//      if(arrNumeri[i] > max){
//          max = arrNumeri[i]
//      }
//  }

//  console.log("L'elemento minimo è: " + min)
//  console.log("L'elemento massimo è: " + max)