// // *****************************************
// // ESERCIZIO 1
// // Sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. La seguente lista deve essere renderizzata sul DOM e non su console.log. Attenzione: non scrivere in modo statico alcun elemento (il body della pagina HTML sarà vuoto)

const listObj = [
    { 
        id: 1,
        titolo: "Andare in banca" 
    },
    {
        id: 2,
        titolo: "Fare spesa"
    },
    {
        id: 3,
        titolo: "Fare benzina"
    },
    {
        id: 4,
        titolo: "Tagliare capelli"
    },
    {
        id: 5,
        titolo: "Esercitazione H.O.F" // altrimenti mi cazziano!!!
    },
    {
        id: 6,
        titolo: "Videocall"
    },
    {
        id: 7,
        titolo: "Preparare cena"
    },
];

//   for (let item of listObj) {
//       console.log(item.titolo);
//   }

// listObj.forEach((item) => {
//     console.log(item)
// });

const cE = (element) => document.createElement(element); //riga 32 e 33-35 sono la stessa cosa
// function cE(element) {
// return document.createElement(element);
// }
const qS = (element) => document.querySelector(element);


const listItemGen = (textItem) => {
    const listItemEl = cE('li') // crea un list item di 'ul'
    
    listEl.className = "listItem" // Diamo una classe
    listItemEl.className = "listItem" 
    
    listItemEl.textContent = textItem  //testo di prova che abbiamo cambiato con textItem
    
    return listItemEl;
};

const listEl = cE("ul")  //crea una unordered list

listEl.className = "list";

listObj.forEach((item) => listEl.append(listItemGen(item.titolo))); //riga 66, 67-69 e 72-74 sono la stessa cosa

// listObj.forEach((item) => {
//     return listEl.append(listItemGen(item.titolo));
// });

// listObj.forEach(function (item) {
//     listEl.append(listItemGen(item.titolo));
// });

document.body.append(listEl);




// // *****************************************
// // ESERCIZIO AVANZATO
// // Realizzare una todo-list che permetta all'utente di aggiungere e rimuovere elementi dalla lista. Per trarre ispirazione, o modello da copiare, seguire uno dei seguenti https://dribbble.com/search/shots/popular/mobile?q=todo-list


// DA SVOLGERE IN SEGUITO!!!